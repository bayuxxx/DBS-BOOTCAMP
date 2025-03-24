import { NoteListStyle } from "../style/note-list-style.js";

class NoteItem extends HTMLElement {
  #note;
  #onArchive;
  #onUnarchive;
  #onDelete;

  constructor(note, onArchive, onUnarchive, onDelete) {
    super();
    this.attachShadow({ mode: "open" });
    this.#note = note;
    this.#onArchive = onArchive;
    this.#onUnarchive = onUnarchive;
    this.#onDelete = onDelete;
    this.render();
  }

  connectedCallback() {
    this.#addEventListeners();
  }

  render() {
    const { id, title, body, createdAt, archived } = this.#note;

    const date = new Date(createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const actionButton = archived
      ? `<button class="unarchive-button" data-id="${id}">Unarchive</button>`
      : `<button class="archive-button" data-id="${id}">Archive</button>`;

    this.shadowRoot.innerHTML = `
        <style>
            ${NoteListStyle}
            
            /* Additional styles specific to the note-item component */
            :host {
                display: block;
            }
        </style>
        <div class="note-item" data-noteid="${id}">
            <div class="note-title"> 
                <h3>${title}</h3>
                <svg class="delete-button" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="Red" class="bi bi-trash3" viewBox="0 0 16 16">
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
    const deleteButton = this.shadowRoot.querySelector(".delete-button");
    const archiveButton = this.shadowRoot.querySelector(".archive-button");
    const unarchiveButton = this.shadowRoot.querySelector(".unarchive-button");

    if (deleteButton) {
      deleteButton.addEventListener("click", () => {
        this.#onDelete(this.#note.id);
      });
    }

    if (archiveButton) {
      archiveButton.addEventListener("click", () => {
        this.#onArchive(this.#note.id);
      });
    }

    if (unarchiveButton) {
      unarchiveButton.addEventListener("click", () => {
        this.#onUnarchive(this.#note.id);
      });
    }
  }
}

customElements.define("note-item", NoteItem);

export { NoteItem };
