const addBtn = document.querySelector('.note-add')

function createNote({id, name, content, created, dates, category}) {

    const noteEl = document.createElement('div');
    noteEl.classList.add('note');

    noteEl.innerHTML = `
    <div class="note-style">
      <p id="note-name">${name}</p>
      <input id="note-name-textarea" class="hidden">   
    </div>
    <div class="note-styleB">
        <p id="note-created">${created}</p>
    </div>
    <div class="note-styleB">
        <p id="note-category">${category}</p>
        <select id="note-select-categories" class="hidden" name="categories">
        </select>
    </div>
    <div class="note-style">
        <p id="note-content">${content}</p>
        <textarea id="note-content-textarea" class="hidden">${content}</textarea>
    </div>
    ${dates !== null ?
        `<div class="note-styleB"><p id="note-dates">${dates}</p></div>` :
        `<div class="note-styleB"><p id="note-dates"></p></div>`}
    <div class="main-buttons">
        <button class="note-archive">
        <i id="box" class="fa-solid fa-box"></i>
        </button>
        <button class="note-edit">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="note-delete">
        <i class="fa-solid fa-trash"></i>
        </button>
    </div>
  `;

    const editBtn = noteEl.querySelector('.note-edit');
    const deleteBtn = noteEl.querySelector('.note-delete');
    const archiveBtn = noteEl.querySelector('.note-archive')
    const nameEl = noteEl.querySelector('#note-name');
    const contentEl = noteEl.querySelector('#note-content');
    const nameInputEl = noteEl.querySelector('#note-name-textarea');
    const contentInputEl = noteEl.querySelector('#note-content-textarea');
    const categoryEl = noteEl.querySelector('#note-category')
    const categorySelectEl = noteEl.querySelector('#note-select-categories')
    const datesEl = noteEl.querySelector('#note-dates')
    const box = noteEl.querySelector('#box')
    const categorySelect = noteEl.querySelector('#note-select-categories');

    noteEl.querySelector('.main-buttons').appendChild(archiveBtn);

    const archivedIndex = archivedNotes.findIndex(note => note.id === id);
    let isArchived = archivedIndex !== -1;

    if (isArchived) {
        box.classList.remove('fa-box');
        box.classList.add('fa-box-open');
    } else {
        box.classList.remove('fa-box-open');
        box.classList.add('fa-box');
    }

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    editBtn.addEventListener('click', () => {
        nameEl.classList.toggle('hidden');
        contentEl.classList.toggle('hidden');
        nameInputEl.classList.toggle('hidden');
        contentInputEl.classList.toggle('hidden');
        categoryEl.classList.toggle('hidden');
        categorySelectEl.classList.toggle('hidden');
        saveData();
    });

    deleteBtn.addEventListener('click', () => {
        const archivedIndex = archivedNotes.findIndex(note => note.id === id);
        let isArchived = archivedIndex !== -1;
        if (isArchived) {
            archivedNotes.splice(archivedIndex, 1);
            renderPage();
        } else {
            const activeIndex = activeNotes.findIndex(note => note.id === id);
            activeNotes.splice(activeIndex, 1);
            renderPage();
        }
        updateSummaryTable();
        saveData();
    });

    archiveBtn.addEventListener('click', () => {
        const archivedIndex = archivedNotes.findIndex(note => note.id === id);
        let isArchived = archivedIndex !== -1;
        if (isArchived === false) {
            archiveNote(noteEl, id);
            renderPage();
        } else {
            unarchiveNote(noteEl, id);
            renderPage();
        }
        updateSummaryTable()
        saveData();
    });

    nameInputEl.addEventListener('input', (e) => {
        nameEl.innerText = e.target.value;
        const archivedIndex = archivedNotes.findIndex(note => note.id === id);
        let isArchived = archivedIndex !== -1;
        if (isArchived) {
            if (archivedIndex !== -1) {
                archivedNotes[archivedIndex].name = e.target.value;
            }
        } else {
            const activeIndex = activeNotes.findIndex(note => note.id === id);
            if (activeIndex !== -1) {
                activeNotes[activeIndex].name = e.target.value;
            }
        }
        saveData();
    });

    contentInputEl.addEventListener('input', (e) => {
        contentEl.innerText = e.target.value;
        const archivedIndex = archivedNotes.findIndex(note => note.id === id);
        let isArchived = archivedIndex !== -1;
        if (isArchived) {
            if (archivedIndex !== -1) {
                archivedNotes[archivedIndex].content = e.target.value;
            }
        } else {
            const activeIndex = activeNotes.findIndex(note => note.id === id);
            if (activeIndex !== -1) {
                activeNotes[activeIndex].content = e.target.value;
            }
        }
        saveData();
    });

    categorySelectEl.addEventListener('change', (e) => {
        categoryEl.innerText = e.target.value;
        const archivedIndex = archivedNotes.findIndex(note => note.id === id);
        let isArchived = archivedIndex !== -1;
        const activeIndex = activeNotes.findIndex(note => note.id === id);
        if (isArchived) {
            if (archivedIndex !== -1) {
                archivedNotes[archivedIndex].category = e.target.value;
            }
        } else {
            if (activeIndex !== -1) {
                activeNotes[activeIndex].category = e.target.value;
            }
        }
        updateSummaryTable();
        saveData();
    });

    contentInputEl.addEventListener('input', updateDatesList);
    contentInputEl.addEventListener('blur', updateDatesList);

    function updateDatesList() {
        let datesFromContent = contentEl.innerText;
        const dateRegex = /\d{2}\.\d{2}\.\d{4}/g;
        datesEl.innerText = datesFromContent.match(dateRegex);
        let importantDates = datesFromContent.match(dateRegex);
        const archivedIndex = archivedNotes.findIndex(note => note.id === id);
        let isArchived = archivedIndex !== -1;
        if (isArchived) {
            if (archivedIndex !== -1) {
                archivedNotes[archivedIndex].dates = importantDates;
            }
        } else {
            const activeIndex = activeNotes.findIndex(note => note.id === id);
            if (activeIndex !== -1) {
                activeNotes[activeIndex].dates = importantDates;
            }
        }
        saveData();
    }

    return noteEl;
}

