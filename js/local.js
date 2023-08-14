const activeNotes = [];
const archivedNotes = [];

const notesEl = document.querySelector('.notes');

/*window.addEventListener('load', () => {
    loadData();
    updateNotes();
    updateSummaryTable();
});*/

function saveData() {
    localStorage.setItem('activeNotes', JSON.stringify(activeNotes));
    localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes));

    console.log(localStorage, activeNotes,archivedNotes)
}

/*
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

function updateNotes() {
    activeNotes.forEach(noteData => {
        const el = createNote(noteData);
        notesEl.appendChild(el);
    });

    archivedNotes.forEach(noteData => {
        const el = createNote(noteData);
        archiveNote(el);
    });

    updateSummaryTable();
}
*/
