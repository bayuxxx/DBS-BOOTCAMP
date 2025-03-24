import Swal from "sweetalert2";
const BASE_URL = "https://notes-api.dicoding.dev/v2";

class NoteServices {
  async getAllNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      if (!response.ok) {
        throw new Error("Failed to fetch notes");
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
        throw new Error("Failed to fetch archived notes");
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error fetching archived notes: ${error.message}`);
    }
  }

  async createNote(noteData) {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });
      if (!response.ok) {
        throw new Error("Failed to create note");
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error creating note: ${error.message}`);
    }
  }

  async archiveNote(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to archive note");
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error archiving note: ${error.message}`);
    }
  }

  async unarchiveNote(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to unarchive note");
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Error unarchiving note: ${error.message}`);
    }
  }

  async deleteNote(id) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await fetch(`${BASE_URL}/notes/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete note");
        }

        const data = await response.json();

        await Swal.fire("Deleted!", "Your note has been deleted.", "success");

        return data;
      }

      return null;
    } catch (error) {
      await Swal.fire(
        "Error!",
        `Error deleting note: ${error.message}`,
        "error",
      );
      throw new Error(`Error deleting note: ${error.message}`);
    }
  }
}

export default NoteServices;
