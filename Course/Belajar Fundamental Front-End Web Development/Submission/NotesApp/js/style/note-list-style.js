export const NoteListStyle = `
:host {
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: block;
}

.controls {
    margin-top: 80px;
    position: sticky;
    top: 70px;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
    padding: 1rem;
    flex-wrap: wrap;
    background-color: var(--background-light);
    z-index: 10;
}

button {
    font-family: 'Poppins', sans-serif;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.add-button {
    background-color: var(--primary-blue);
    color: var(--white);
}
.add-button:hover {
    background-color: var(--primary-dark);
}

.category-button {
    border: 1px solid var(--primary-blue);
    background-color: var(--gray-100);
    color: var(--text-primary);
}
.category-button.active {
    background-color: var(--primary-light);
    color: var(--white);
}
.category-button:hover {
    background-color: var(--gray-200);
}
.category-button.active:hover {
    background-color: var(--primary-blue);
}

#notesList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.note-item {
    background-color: var(--white);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.note-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.note-title {
    color: var(--text-primary);
    font-size: 1.25rem;
    margin: 0;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.note-date {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin: 0;
}

.note-body {
    color: var(--text-primary);
    margin: 0;
    line-height: 1.5;
    flex-grow: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.archive-button, .unarchive-button {
    background-color: var(--secondary-blue);
    color: var(--text-primary);
    width: 100%;
    margin-top: auto;
}
.archive-button:hover, .unarchive-button:hover {
    background-color: var(--primary-light);
    color: var(--white);
}

.error-message {
    text-align: center;
    color: var(--text-primary);
    padding: 2rem;
    grid-column: 1 / -1;
}

.loading-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.loading-overlay.active {
    display: flex;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    :host {
        margin-top: 40px;
    }
    .controls {
        top: 70px;
        flex-direction: column;
        align-items: stretch;
        padding: 1rem;
        margin: 1rem 0;
    }
    #notesList {
        grid-template-columns: 1fr;
        padding: 1rem;
        gap: 1rem;
    }
    .note-item {
        margin: 0;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    #notesList {
        grid-template-columns: repeat(2, 1fr);
        padding: 1.5rem;
    }
}
`;
