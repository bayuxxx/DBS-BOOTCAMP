// Constants for localStorage keys and DOM elements
const STORAGE_KEY = 'BOOKSHELF_APPS';
const RENDER_EVENT = 'render-book';
const SEARCH_EVENT = 'search-book';

// Book form elements
const bookForm = document.getElementById('bookForm');
const bookFormTitle = document.getElementById('bookFormTitle');
const bookFormAuthor = document.getElementById('bookFormAuthor');
const bookFormYear = document.getElementById('bookFormYear');
const bookFormIsComplete = document.getElementById('bookFormIsComplete');
const bookFormSubmit = document.getElementById('bookFormSubmit');

// Edit dialog elements
const editDialog = document.getElementById('editDialog');
const editForm = document.getElementById('editForm');
const editFormTitle = document.getElementById('editFormTitle');
const editFormAuthor = document.getElementById('editFormAuthor');
const editFormYear = document.getElementById('editFormYear');
const editFormIsComplete = document.getElementById('editFormIsComplete');
const closeEditDialog = document.getElementById('closeEditDialog');

// Search form elements
const searchForm = document.getElementById('searchBook');
const searchBookTitle = document.getElementById('searchBookTitle');

// Book lists containers
const incompleteBookList = document.getElementById('incompleteBookList');
const completeBookList = document.getElementById('completeBookList');

// Books data
let books = [];
let editingBookId = null;

// Load data when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadDataFromStorage();
    renderBooks();

    // Update submit button text based on checkbox state
    bookFormIsComplete.addEventListener('change', updateSubmitButtonText);

    // Handle form submission
    bookForm.addEventListener('submit', handleBookFormSubmit);

    // Handle edit form submission
    editForm.addEventListener('submit', handleEditFormSubmit);

    // Handle search
    searchForm.addEventListener('submit', handleSearchFormSubmit);

    // Handle dialog close button
    closeEditDialog.addEventListener('click', () => {
        editDialog.close();
    });

    // Handle click outside dialog to close
    editDialog.addEventListener('click', (e) => {
        if (e.target === editDialog) {
            editDialog.close();
        }
    });
});

// Generate unique ID
const generateId = () => {
    return +new Date();
};

// Create book object
const createBook = (id, title, author, year, isComplete) => {
    return {
        id,
        title,
        author,
        year: parseInt(year),
        isComplete
    };
};

// Save data to localStorage
const saveData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    document.dispatchEvent(new Event(RENDER_EVENT));
};

// Load data from localStorage
const loadDataFromStorage = () => {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    books = serializedData ? JSON.parse(serializedData) : [];
};

// Update submit button text based on checkbox state
const updateSubmitButtonText = () => {
    const span = bookFormSubmit.querySelector('span');
    span.textContent = bookFormIsComplete.checked ? 'Selesai dibaca' : 'Belum selesai dibaca';
};

// Handle book form submission (for new books)
const handleBookFormSubmit = (e) => {
    e.preventDefault();

    const title = bookFormTitle.value;
    const author = bookFormAuthor.value;
    const year = bookFormYear.value;
    const isComplete = bookFormIsComplete.checked;

    const id = generateId();
    const book = createBook(id, title, author, year, isComplete);
    books.push(book);

    saveData();
    bookForm.reset();
    updateSubmitButtonText();
};

// Handle edit form submission
const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const title = editFormTitle.value;
    const author = editFormAuthor.value;
    const year = editFormYear.value;
    const isComplete = editFormIsComplete.checked;

    const bookIndex = books.findIndex(book => book.id === editingBookId);
    if (bookIndex !== -1) {
        books[bookIndex] = {
            ...books[bookIndex],
            title,
            author,
            year: parseInt(year),
            isComplete
        };
    }

    saveData();
    editDialog.close();
    editingBookId = null;
};

// Handle search form submission
const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    document.dispatchEvent(new Event(SEARCH_EVENT));
};

// Create book element
const createBookElement = (bookData) => {
    const { id, title, author, year, isComplete } = bookData;

    const bookItem = document.createElement('div');
    bookItem.setAttribute('data-bookid', id);
    bookItem.setAttribute('data-testid', 'bookItem');
    bookItem.classList.add('book-item');

    const titleElement = document.createElement('h3');
    titleElement.setAttribute('data-testid', 'bookItemTitle');
    titleElement.textContent = title;

    const authorElement = document.createElement('p');
    authorElement.setAttribute('data-testid', 'bookItemAuthor');
    authorElement.textContent = `Penulis: ${author}`;

    const yearElement = document.createElement('p');
    yearElement.setAttribute('data-testid', 'bookItemYear');
    yearElement.textContent = `Tahun: ${year}`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const toggleButton = document.createElement('button');
    toggleButton.setAttribute('data-testid', 'bookItemIsCompleteButton');
    toggleButton.textContent = isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';
    toggleButton.classList.add('toggle-button');
    toggleButton.onclick = () => {
        toggleBookStatus(id);
    };

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
    deleteButton.textContent = 'Hapus Buku';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => {
        if (confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
            deleteBook(id);
        }
    };

    const editButton = document.createElement('button');
    editButton.setAttribute('data-testid', 'bookItemEditButton');
    editButton.textContent = 'Edit Buku';
    editButton.classList.add('edit-button');
    editButton.onclick = () => {
        editBook(id);
    };

    buttonContainer.append(toggleButton, editButton, deleteButton);
    bookItem.append(titleElement, authorElement, yearElement, buttonContainer);

    return bookItem;
};

// Render books
const renderBooks = () => {
    incompleteBookList.innerHTML = '';
    completeBookList.innerHTML = '';

    const searchQuery = searchBookTitle.value.toLowerCase();

    const filteredBooks = books.filter(book =>
        !searchQuery || book.title.toLowerCase().includes(searchQuery)
    );

    for (const book of filteredBooks) {
        const bookElement = createBookElement(book);
        if (book.isComplete) {
            completeBookList.append(bookElement);
        } else {
            incompleteBookList.append(bookElement);
        }
    }
};

// Toggle book status
const toggleBookStatus = (bookId) => {
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        books[bookIndex].isComplete = !books[bookIndex].isComplete;
        saveData();
    }
};

// Delete book
const deleteBook = (bookId) => {
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        saveData();
    }
};

// Edit book
const editBook = (bookId) => {
    const book = books.find(book => book.id === bookId);
    if (book) {
        editingBookId = book.id;
        editFormTitle.value = book.title;
        editFormAuthor.value = book.author;
        editFormYear.value = book.year;
        editFormIsComplete.checked = book.isComplete;
        editDialog.showModal();
    }
};

// Add event listeners for render and search events
document.addEventListener(RENDER_EVENT, renderBooks);
document.addEventListener(SEARCH_EVENT, renderBooks);