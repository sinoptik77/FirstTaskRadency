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