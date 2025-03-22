const BASE_URL = 'https://notes-api.dicoding.dev/v2';

class NoteServices {
    async getAllNotes() {
        try {
            const response = await fetch(`${BASE_URL}/notes`);
            if (!response.ok) {
                throw new Error('Failed to fetch notes');
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Error fetching notes: ${error.message}`);
        }
    }

    async getArchivedNotes() {
        try {
            const response = await fetch(`${BASE_URL}/notes/archived`);
            if (!response.ok) {
                throw new Error('Failed to fetch archived notes');
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Error fetching archived notes: ${error.message}`);
        }
    }

    async createNote(noteData) {
        try {
            const response = await fetch(`${BASE_URL}/notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noteData)
            });
            if (!response.ok) {
                throw new Error('Failed to create note');
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Error creating note: ${error.message}`);
        }
    }

    async archiveNote(id) {
        try {
            const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
                method: 'POST'
            });
            if (!response.ok) {
                throw new Error('Failed to archive note');
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Error archiving note: ${error.message}`);
        }
    }

    async unarchiveNote(id) {
        try {
            const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
                method: 'POST'
            });
            if (!response.ok) {
                throw new Error('Failed to unarchive note');
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Error unarchiving note: ${error.message}`);
        }
    }
}

export default NoteServices;