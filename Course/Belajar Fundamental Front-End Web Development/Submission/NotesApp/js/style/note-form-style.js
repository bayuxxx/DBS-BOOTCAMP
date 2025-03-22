export const NoteFormStyles = `
:host {
    --primary-blue: #2196F3;
    --primary-light: #64B5F6;
    --primary-dark: #1976D2;
    --accent-blue: #0D47A1;
    --secondary-blue: #90CAF9;
    --background-light: #F5F9FF;
    --white: #FFFFFF;
    --text-primary: #333333;
    --text-secondary: #666666;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
}

.dialog-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 1rem;
}

.dialog-overlay.show {
    display: flex;
}

.dialog-content {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
    box-shadow: var(--shadow-md);
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.dialog-header h2 {
    margin: 0;
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 600;
}

.close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--text-secondary);
    border-radius: 50%;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
}

.close-button:hover {
    background-color: var(--gray-100);
    color: var(--text-primary);
}

.form-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.error-message {
    color: #f44336;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.error-message.show {
    display: block;
    opacity: 1;
}

input.error, textarea.error {
    border-color: #f44336;
}

.character-count {
    position: absolute;
    right: 0;
    bottom: -1.25rem;
    font-size: 0.75rem;
    color: var(--text-secondary);
}

.character-count.error {
    color: #f44336;
}

.validation-icon {
    position: absolute;
    right: 1rem;
    top: 2.5rem;
    font-size: 1rem;
    display: none;
}

.validation-icon.valid::before {
    content: '✓';
    color: #4CAF50;
    display: block;
}

.validation-icon.invalid::before {
    content: '✗';
    color: #f44336;
    display: block;
}

.validation-icon.show {
    display: block;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    font-weight: 500;
}

input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--gray-200);
    border-radius: 8px;
    font-size: 1rem;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
    outline: none;
    border-color: var(--primary-blue);
}

textarea {
    min-height: 120px;
    resize: vertical;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
}

button {
    font-family: 'Poppins', sans-serif;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.save-button {
    background-color: var(--primary-blue);
    color: var(--white);
}

.save-button:hover {
    background-color: var(--primary-dark);
    transform: translateY(-1px);
}

.cancel-button {
    background-color: var(--gray-100);
    color: var(--text-primary);
}

.cancel-button:hover {
    background-color: var(--gray-200);
}

@media (max-width: 768px) {
    .dialog-content {
        padding: 1.5rem;
    }

    .dialog-header h2 {
        font-size: 1.25rem;
    }

    .form-actions {
        flex-direction: column-reverse;
    }

    .form-actions button {
        width: 100%;
    }
}
}`;