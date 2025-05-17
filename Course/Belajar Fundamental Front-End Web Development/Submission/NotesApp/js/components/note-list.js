import { NoteListStyle } from '../style/note-list-style.js';
import NoteServices from '../api/api-service.js';
import { NoteItem } from './note-item.js';
import { animate } from 'motion';

class NotedList extends HTMLElement {
  #notes = [];
  #currentView = 'active';
  #noteServices;
  #isLoading = false;
  #reloadInterval = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.#noteServices = new NoteServices();
    this.#initializeStyles();
  }

  #initializeStyles() {
    this.shadowRoot.innerHTML = `
        <style>
            ${NoteListStyle}
        </style>
        <div class="loading-overlay">
            <div class="loading-spinner"></div>
        </div>
        <note-form-dialog></note-form-dialog>
        <div class="controls">
            <button class="add-button">Add Note</button>
            <button class="category-button active" data-view="active">Active Notes</button>
            <button class="category-button" data-view="archived">Archived Notes</button>
        </div>
        <div id="notesList"></div>
        `;
  }

  async connectedCallback() {
    try {
      this.#showLoading();
      await this.#loadNotes();
      this.#addControlEventListeners();
      this.#render();
      this.#hideLoading();
      this.#startAutoReload();
    } catch (error) {
      console.error('Error loading notes:', error);
      this.#renderError();
      this.#hideLoading();
    }
  }

  disconnectedCallback() {
    this.#stopAutoReload();
  }

  #startAutoReload() {
    this.#reloadInterval = setInterval(async () => {
      await this.#checkForNewNotes();
    }, 1000);
  }

  #stopAutoReload() {
    if (this.#reloadInterval) {
      clearInterval(this.#reloadInterval);
      this.#reloadInterval = null;
    }
  }

  async #checkForNewNotes() {
    try {
      const response =
        this.#currentView === 'active'
          ? await this.#noteServices.getAllNotes()
          : await this.#noteServices.getArchivedNotes();

      if (response.status === 'success') {
        if (JSON.stringify(response.data) !== JSON.stringify(this.#notes)) {
          console.log('New notes detected, updating view');
          this.#notes = response.data;
          this.#render();
        }
      }
    } catch (error) {
      console.error('Error checking for new notes:', error);
    }
  }

  #showLoading() {
    this.#isLoading = true;
    const loadingOverlay = this.shadowRoot.querySelector('.loading-overlay');
    loadingOverlay.classList.add('active');
  }

  #hideLoading() {
    this.#isLoading = false;
    const loadingOverlay = this.shadowRoot.querySelector('.loading-overlay');
    loadingOverlay.classList.remove('active');
  }

  async #loadNotes() {
    try {
      const response =
        this.#currentView === 'active'
          ? await this.#noteServices.getAllNotes()
          : await this.#noteServices.getArchivedNotes();

      if (response.status === 'success') {
        this.#notes = response.data;
      } else {
        throw new Error('Failed to load notes');
      }
    } catch (error) {
      console.error('Error loading notes:', error);
      throw error;
    }
  }

  #addControlEventListeners() {
    const addButton = this.shadowRoot.querySelector('.add-button');
    const categoryButtons =
      this.shadowRoot.querySelectorAll('.category-button');
    const noteFormDialog = this.shadowRoot.querySelector('note-form-dialog');

    const buttons = this.shadowRoot.querySelectorAll('.controls button');
    buttons.forEach((button, index) => {
      animate(
        button,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
        { duration: 0.5, delay: index * 0.1 }
      );
    });

    addButton.addEventListener('click', () => {
      noteFormDialog.open();
    });

    noteFormDialog.addEventListener('note-submitted', async (e) => {
      try {
        this.#showLoading();
        const response = await this.#noteServices.createNote(e.detail);
        if (response.status === 'success') {
          await this.#loadNotes();
          this.#render();
        }
        this.#hideLoading();
      } catch (error) {
        console.error('Error creating note:', error);
        this.#hideLoading();
      }
    });

    categoryButtons.forEach((button) => {
      button.addEventListener('click', async (e) => {
        categoryButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        this.#currentView = e.target.dataset.view;
        this.#showLoading();
        await this.#loadNotes();
        this.#render();
        this.#hideLoading();
      });
    });
  }

  #render() {
    const notesContainer = this.shadowRoot.querySelector('#notesList');

    if (this.#notes.length === 0) {
      notesContainer.innerHTML = `
                <div class="empty-message">
                    No ${this.#currentView} notes found
                </div>
            `;
      return;
    }

    notesContainer.innerHTML = '';

    this.#notes.forEach((note, index) => {
      const noteItem = new NoteItem(
        note,
        this.#handleArchive.bind(this),
        this.#handleUnarchive.bind(this),
        this.#handleDelete.bind(this)
      );
      notesContainer.appendChild(noteItem);

      animate(
        noteItem,
        { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] },
        { duration: 0.4, delay: index * 0.1 }
      );
    });
  }

  async #handleArchive(noteId) {
    try {
      this.#showLoading();
      await this.#noteServices.archiveNote(noteId);
      await this.#loadNotes();
      this.#render();
      this.#hideLoading();
    } catch (error) {
      console.error('Error archiving note:', error);
      this.#hideLoading();
    }
  }

  async #handleUnarchive(noteId) {
    try {
      this.#showLoading();
      await this.#noteServices.unarchiveNote(noteId);
      await this.#loadNotes();
      this.#render();
      this.#hideLoading();
    } catch (error) {
      console.error('Error unarchiving note:', error);
      this.#hideLoading();
    }
  }

  async #handleDelete(noteId) {
    try {
      this.#showLoading();
      const result = await this.#noteServices.deleteNote(noteId);

      if (result) {
        await this.#loadNotes();
        this.#render();
      }

      this.#hideLoading();
    } catch (error) {
      console.error('Error deleting note:', error);
      this.#hideLoading();
    }
  }

  #renderError() {
    const notesContainer = this.shadowRoot.querySelector('#notesList');
    notesContainer.innerHTML = `
            <div class="error-message">
                Failed to load notes. Please try again later.
            </div>
        `;
  }
}

customElements.define('noted-list', NotedList);
