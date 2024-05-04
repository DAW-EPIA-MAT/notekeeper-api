import notes from "../data/index.js";

export const NotesInMemoryRepository = () => ({
  getAllNotes: async () => {
    return notes;
  },

  getNote: async (index) => {
    return notes[index];
  },

  addNote: async (note) => {
    notes.push(note);
  },

  updateNote: async (index, note) => {
    notes[index] = note;
  },

  removeNote: async (index) => {
    return notes.splice(index, 1);
  },

  findIndexNoteById: async (noteId) => {
    return notes.findIndex((note) => note._id === noteId);
  },

  removeAllNotes: async () => {
    notes.length = 0;
  }
});
