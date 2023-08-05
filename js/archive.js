const switchBtn = document.querySelector('.note-switch');

const archivePage = document.querySelector('#archived-notes');
const activePage = document.querySelector('#active-notes');

switchBtn.addEventListener('click', (e) => {
    archivePage.classList.toggle('hidden');
    activePage.classList.toggle('hidden');
    if (switchBtn.innerText === 'Go to archive') {
        switchBtn.innerText = 'Go to active'
    } else {
        switchBtn.innerText = 'Go to archive'
    }
})

function archiveNote(noteEl) {
    const index = activeNotes.indexOf(noteEl);
    if (index !== -1) {
        activeNotes.splice(index, 1);
        archivedNotes.push(noteEl);
        const archivedContainer = document.querySelector('.archived-notes');
        const archiveBtn = noteEl.querySelector('.note-archive');
        noteEl.querySelector('.main-buttons').appendChild(archiveBtn);
        archivedContainer.appendChild(noteEl);
    }
}

function unarchiveNote(noteEl) {
    const index = archivedNotes.indexOf(noteEl);
    if (index !== -1) {
        archivedNotes.splice(index, 1);
        activeNotes.push(noteEl);
        const archiveBtn = noteEl.querySelector('.note-archive');
        noteEl.querySelector('.main-buttons').appendChild(archiveBtn);
        notesEl.appendChild(noteEl);
    }
}