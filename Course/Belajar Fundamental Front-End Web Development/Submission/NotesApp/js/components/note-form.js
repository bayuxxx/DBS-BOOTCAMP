import { NoteFormStyles } from '../style/note-form-style';
import NoteServices from '../api/api-service';
import Swal from 'sweetalert2';

class NoteFormDialog extends HTMLElement {
  #noteServices;
  #form;
  #dialog;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.#noteServices = new NoteServices();
    this.#initializeStyles();
    this.#initializeDOM();
  }

  #initializeStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = NoteFormStyles;
    this.shadowRoot.appendChild(styleElement);
  }

  #initializeDOM() {
    this.shadowRoot.innerHTML += `
            <div class="dialog-overlay">
                <div class="dialog-content">
                    <div class="dialog-header">
                        <h2>Add New Note</h2>
                        <button class="close-button">&times;</button>
                    </div>
                    <form id="noteForm" novalidate>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" id="title" name="title" required minlength="3" maxlength="50">
                            <span class="validation-icon"></span>
                            <div class="error-message" data-for="title"></div>
                            <div class="character-count" data-for="title">0/50</div>
                        </div>
                        <div class="form-group">
                            <label for="body">Note Content</label>
                            <textarea id="body" name="body" required minlength="10" maxlength="1000"></textarea>
                            <span class="validation-icon"></span>
                            <div class="error-message" data-for="body"></div>
                            <div class="character-count" data-for="body">0/1000</div>
                        </div>
                        <div class="form-error"></div>
                        <div class="form-actions">
                            <button type="button" class="cancel-button">Cancel</button>
                            <button type="submit" class="save-button">Save Note</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

    this.#form = this.shadowRoot.querySelector('#noteForm');
    this.#dialog = this.shadowRoot.querySelector('.dialog-overlay');
  }

  connectedCallback() {
    this.#addEventListeners();
  }

  #addEventListeners() {
    const closeButton = this.shadowRoot.querySelector('.close-button');
    const cancelButton = this.shadowRoot.querySelector('.cancel-button');
    const titleInput = this.shadowRoot.querySelector('#title');
    const bodyInput = this.shadowRoot.querySelector('#body');

    this.#setupFieldValidation(titleInput, {
      required: 'Title is required',
      minLength: 'Title must be at least 3 characters',
      maxLength: 'Title cannot exceed 50 characters',
    });

    this.#setupFieldValidation(bodyInput, {
      required: 'Note content is required',
      minLength: 'Note content must be at least 10 characters',
      maxLength: 'Note content cannot exceed 1000 characters',
    });

    closeButton.addEventListener('click', () => this.close());
    cancelButton.addEventListener('click', () => this.close());

    this.#form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (this.#validateForm()) {
        try {
          const saveButton = this.#form.querySelector('.save-button');
          saveButton.disabled = true;
          saveButton.textContent = 'Saving...';

          const formData = new FormData(this.#form);
          const noteData = {
            title: formData.get('title').trim(),
            body: formData.get('body').trim(),
          };

          const response = await this.#noteServices.createNote(noteData);

          if (response.status === 'success') {
            await Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Note has been successfully created',
              confirmButtonColor: '#3085d6',
            });

            this.dispatchEvent(
              new CustomEvent('note-submitted', {
                detail: response.data,
              })
            );
            this.#form.reset();
            this.close();
          } else {
            throw new Error('Failed to create note');
          }
        } catch (error) {
          console.error('Error creating note:', error);
          await Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to create note. Please try again.',
            confirmButtonColor: '#d33',
          });
        } finally {
          const saveButton = this.#form.querySelector('.save-button');
          saveButton.disabled = false;
          saveButton.textContent = 'Save Note';
        }
      }
    });
  }

  #setupFieldValidation(field, messages) {
    const errorDisplay = this.shadowRoot.querySelector(
      `.error-message[data-for="${field.id}"]`
    );
    const charCount = this.shadowRoot.querySelector(
      `.character-count[data-for="${field.id}"]`
    );
    const validationIcon =
      field.parentElement.querySelector('.validation-icon');

    const updateCharCount = () => {
      const current = field.value.length;
      const max = field.maxLength;
      charCount.textContent = `${current}/${max}`;
      charCount.classList.toggle('error', current > max);
    };

    const validateField = () => {
      let error = '';
      field.classList.remove('error');
      errorDisplay.classList.remove('show');
      validationIcon.classList.remove('valid', 'invalid', 'show');

      if (field.validity.valueMissing) {
        error = messages.required;
      } else if (field.validity.tooShort) {
        error = messages.minLength;
      } else if (field.validity.tooLong) {
        error = messages.maxLength;
      }

      if (error) {
        field.classList.add('error');
        errorDisplay.textContent = error;
        errorDisplay.classList.add('show');
        validationIcon.classList.add('invalid', 'show');
      } else if (field.value.length > 0) {
        validationIcon.classList.add('valid', 'show');
      }

      return !error;
    };

    field.addEventListener('input', () => {
      updateCharCount();
      validateField();
    });

    field.addEventListener('blur', validateField);
    updateCharCount();
  }

  #validateForm() {
    const titleValid = this.#validateField(
      this.shadowRoot.querySelector('#title')
    );
    const bodyValid = this.#validateField(
      this.shadowRoot.querySelector('#body')
    );
    return titleValid && bodyValid;
  }

  #validateField(field) {
    const event = new Event('blur');
    field.dispatchEvent(event);
    return field.validity.valid;
  }

  async #showError(message) {
    await Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: message,
      confirmButtonColor: '#d33',
    });
  }

  open() {
    this.#dialog.classList.add('show');
  }

  close() {
    this.#dialog.classList.remove('show');
    this.#form.reset();

    const fields = this.#form.querySelectorAll('input, textarea');
    fields.forEach((field) => {
      field.classList.remove('error');
      const errorDisplay = this.shadowRoot.querySelector(
        `.error-message[data-for="${field.id}"]`
      );
      const validationIcon =
        field.parentElement.querySelector('.validation-icon');
      errorDisplay.classList.remove('show');
      validationIcon.classList.remove('valid', 'invalid', 'show');

      const charCount = this.shadowRoot.querySelector(
        `.character-count[data-for="${field.id}"]`
      );
      charCount.textContent = `0/${field.maxLength}`;
      charCount.classList.remove('error');
    });
  }
}

customElements.define('note-form-dialog', NoteFormDialog);

export default NoteFormDialog;
