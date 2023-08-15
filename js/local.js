const activeNotes = [];
const archivedNotes = [];

const notesEl = document.querySelector('.notes');

window.addEventListener('load', () => {
    loadData();
    renderActiveNotes();
    updateSummaryTable();
});

function saveData() {
    localStorage.setItem('activeNotes', JSON.stringify(activeNotes));
    localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes));
}

function loadData() {
    const activeNotesData = localStorage.getItem('activeNotes');
    const archivedNotesData = localStorage.getItem('archivedNotes');

    if (activeNotesData) {
        activeNotes.push(...JSON.parse(activeNotesData));
    }

    if (archivedNotesData) {
        archivedNotes.push(...JSON.parse(archivedNotesData));
    }
}

