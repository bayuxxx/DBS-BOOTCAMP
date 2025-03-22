import { NoteListStyle } from "../style/note-list-style.js";
import NoteServices from "../api/api-service.js";

class NotedList extends HTMLElement {
    #notes = [];
    #currentView = "active";
    #noteServices;
    #isLoading = false;
    #reloadInterval = null;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
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
            console.error("Error loading notes:", error);
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
            const response = this.#currentView === 'active' 
                ? await this.#noteServices.getAllNotes()
                : await this.#noteServices.getArchivedNotes();
                
            if (response.status === 'success') {
                // Compare the length or use a more sophisticated comparison
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
            const response = this.#currentView === 'active' 
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
        const addButton = this.shadowRoot.querySelector(".add-button");
        const categoryButtons = this.shadowRoot.querySelectorAll(".category-button");
        const noteFormDialog = this.shadowRoot.querySelector("note-form-dialog");

        addButton.addEventListener("click", () => {
            noteFormDialog.open();
        });

        noteFormDialog.addEventListener("note-submitted", async (e) => {
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
            button.addEventListener("click", async (e) => {
                categoryButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");
                this.#currentView = e.target.dataset.view;
                this.#showLoading();
                await this.#loadNotes();
                this.#render();
                this.#hideLoading();
            });
        });
    }

    #render() {
        const notesContainer = this.shadowRoot.querySelector("#notesList");
        
        if (this.#notes.length === 0) {
            notesContainer.innerHTML = `
                <div class="empty-message">
                    No ${this.#currentView} notes found
                </div>
            `;
            return;
        }

        notesContainer.innerHTML = this.#notes
            .map((note) => this.#createNoteItemElement(note))
            .join("");

        this.#addEventListeners();
    }

    #renderError() {
        const notesContainer = this.shadowRoot.querySelector("#notesList");
        notesContainer.innerHTML = `
            <div class="error-message">
                Failed to load notes. Please try again later.
            </div>
        `;
    }

    #createNoteItemElement({ id, title, body, createdAt, archived }) {
        const date = new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        const actionButton = archived
            ? `<button class="unarchive-button" data-id="${id}">Unarchive</button>`
            : `<button class="archive-button" data-id="${id}">Archive</button>`;

        return `
            <div class="note-item" data-noteid="${id}">

                <div class="note-title"> 
                <h3>${title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="Red" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </div>
                <p class="note-date">${date}</p>
                <p class="note-body">${body}</p>
                ${actionButton}
            </div>
        `;
    }

    #addEventListeners() {
        const archiveButtons = this.shadowRoot.querySelectorAll(".archive-button");
        const unarchiveButtons = this.shadowRoot.querySelectorAll(".unarchive-button");

        archiveButtons.forEach((button) => {
            button.addEventListener("click", async (e) => {
                try {
                    const noteId = e.target.dataset.id;
                    this.#showLoading();
                    await this.#noteServices.archiveNote(noteId);
                    await this.#loadNotes();
                    this.#render();
                    this.#hideLoading();
                } catch (error) {
                    console.error('Error archiving note:', error);
                    this.#hideLoading();
                }
            });
        });

        unarchiveButtons.forEach((button) => {
            button.addEventListener("click", async (e) => {
                try {
                    const noteId = e.target.dataset.id;
                    this.#showLoading();
                    await this.#noteServices.unarchiveNote(noteId);
                    await this.#loadNotes();
                    this.#render();
                    this.#hideLoading();
                } catch (error) {
                    console.error('Error unarchiving note:', error);
                    this.#hideLoading();
                }
            });
        });
    }
}

customElements.define("noted-list", NotedList);