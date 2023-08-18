

function renderActiveNotes() {
    notesEl.innerHTML = '';

    activeNotes.forEach(noteData => {
        const el = createNote(noteData);
        notesEl.appendChild(el);
    });
    deleteList();
}

function renderArchiveNotes() {
    notesEl.innerHTML = '';

    archivedNotes.forEach(noteData => {
        const el = createNote(noteData);
        notesEl.appendChild(el);
    });
    deleteList();
}

function renderPage() {
    if (selectPage === "Active") {
        renderActiveNotes()
    } else if (selectPage === "Archive") {
        renderArchiveNotes()
    }
    deleteList();
}