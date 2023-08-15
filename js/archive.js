const switchBtn = document.querySelector('.note-switch');

switchBtn.addEventListener('click', (e) => {
    if (switchBtn.innerText === 'Go to archive') {
        switchBtn.innerText = 'Go to active'
        renderArchiveNotes()
    } else {
        switchBtn.innerText = 'Go to archive'
        renderActiveNotes()
    }
})

function archiveNote(noteEl, id) {
    const index = activeNotes.findIndex(note => note.id === id);
    if (index !== -1) {
        const archivedItem = activeNotes.splice(index, 1)[0];
        archivedNotes.push(archivedItem);
        const archivedContainer = document.querySelector('.archived-notes');
        const archiveBtn = noteEl.querySelector('.note-archive');
        noteEl.querySelector('.main-buttons').appendChild(archiveBtn);
        archivedContainer.appendChild(noteEl);
    }
}

function unarchiveNote(noteEl, id) {
    const index = archivedNotes.findIndex(note => note.id === id);
    if (index !== -1) {
        archivedNotes.splice(index, 1);
        activeNotes.push(noteEl);
        const archiveBtn = noteEl.querySelector('.note-archive');
        noteEl.querySelector('.main-buttons').appendChild(archiveBtn);
        notesEl.appendChild(noteEl);
    }
}