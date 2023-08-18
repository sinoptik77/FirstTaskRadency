const switchBtn = document.querySelector('.note-switch');


switchBtn.addEventListener('click', (e) => {
    if (switchBtn.innerText === 'GO TO ARCHIVE') {
        switchBtn.innerText = 'GO TO ACTIVE'
        selectPage = "Archive";
        renderPage();
    } else {
        switchBtn.innerText = 'GO TO ARCHIVE'
        selectPage = "Active";
        renderPage();
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
        const activeItem = archivedNotes.splice(index, 1)[0];
        activeNotes.push(activeItem);
        const archiveBtn = noteEl.querySelector('.note-archive');
        noteEl.querySelector('.main-buttons').appendChild(archiveBtn);
        notesEl.appendChild(noteEl);
    }
}