const activeNotes = [];
const archivedNotes = [];
const categories = [];

let selectPage = "Active";

const tablesEl = document.querySelector('.table-container')
const notesEl = document.querySelector('.notes');

window.addEventListener('load', () => {
    loadData();
    renderActiveNotes();
    updateSummaryTable();
});

function saveData() {
    localStorage.setItem('activeNotes', JSON.stringify(activeNotes));
    localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes));
    localStorage.setItem('categories', JSON.stringify(categories))
}

function loadData() {
    const activeNotesData = localStorage.getItem('activeNotes');
    const archivedNotesData = localStorage.getItem('archivedNotes');
    const categoriesData = localStorage.getItem('categories');

    if (activeNotesData) {
        activeNotes.push(...JSON.parse(activeNotesData));
    }

    if (archivedNotesData) {
        archivedNotes.push(...JSON.parse(archivedNotesData));
    }

    if (categoriesData) {
        categories.push(...JSON.parse(categoriesData));
    }

}

