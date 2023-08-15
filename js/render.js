

function renderActiveNotes() {
    notesEl.innerHTML = '';

    activeNotes.forEach(noteData => {
        const el = createNote(noteData);
        notesEl.appendChild(el);
    });
}

function renderArchiveNotes() {
    notesEl.innerHTML = '';

    archivedNotes.forEach(noteData => {
        const el = createNote(noteData);
        notesEl.appendChild(el);
    });
}