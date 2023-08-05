const addBtn = document.querySelector('.note-add')

const activeNotes = [];
const archivedNotes = [];
let currentEditingNote = null;

function createNote({name, content, created, dates, category}) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
    <div class="note-style">
      <p id="note-name">${name}</p>
      <input id="note-name-textarea" class="hidden"></input>    
    </div>
    <div class="note-styleB">
        <p id="note-created">${created}</p>
    </div>
    <div class="note-styleB">
        <p id="note-category">${category}</p>
        <select id="note-select-categories" class="hidden" name="categories">
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
            <option value="Quote">Quote</option>
        </select>
    </div>
    <div class="note-style">
        <p id="note-content">${content}</p>
        <textarea id="note-content-textarea" class="hidden">${content}</textarea>
    </div>
    <div class="note-styleB">
        <p id="note-dates">${dates}</p>
    </div>
    <div class="main-buttons">
        <button class="note-archive">
        <i id="box" class="fa-solid fa-box"></i>
        </button>
        <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;

    const editBtn = noteEl.querySelector('.note-edit');
    const deleteBtn = noteEl.querySelector('.note-delete');
    const archiveBtn = noteEl.querySelector('.note-archive')
    const unarchiveBtn = noteEl.querySelector('.note-unarchive')
    const nameEl = noteEl.querySelector('#note-name');
    const contentEl = noteEl.querySelector('#note-content');
    const nameInputEl = noteEl.querySelector('#note-name-textarea');
    const contentInputEl = noteEl.querySelector('#note-content-textarea');
    const categoryEl = noteEl.querySelector('#note-category')
    const categorySelectEl = noteEl.querySelector('#note-select-categories')
    const datesEl = noteEl.querySelector('#note-dates')
    const box = noteEl.querySelector('#box')

    editBtn.addEventListener('click', (e) => {
        currentEditingNote = noteEl;
        nameEl.classList.toggle('hidden');
        contentEl.classList.toggle('hidden');
        nameInputEl.classList.toggle('hidden');
        contentInputEl.classList.toggle('hidden');
        categoryEl.classList.toggle('hidden');
        categorySelectEl.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove();
    });

    nameInputEl.addEventListener('input', (e) => {
        nameEl.innerText = e.target.value;
    });

    contentInputEl.addEventListener('input', (e) => {
        contentEl.innerText = e.target.value;
    });

    categorySelectEl.addEventListener('change', (e) => {
        categoryEl.innerText = e.target.value;
    });

    contentInputEl.addEventListener('input', updateDatesList);
    contentInputEl.addEventListener('blur', updateDatesList);

    function updateDatesList() {
        let datesFromContent = contentEl.innerText;
        const dateRegex = /\d{2}\.\d{2}\.\d{4}/g;
        datesEl.innerText = datesFromContent.match(dateRegex);
    }

    archiveBtn.addEventListener('click', (e) => {
        if (activeNotes.includes(noteEl)) {
            archiveNote(noteEl);
            box.classList.remove('fa-box');
            box.classList.add('fa-box-open');
        } else if (archivedNotes.includes(noteEl)) {
            unarchiveNote(noteEl);
            box.classList.toggle('fa-box-open');
            box.classList.toggle('fa-box');
        }
    });

    noteEl.querySelector('.main-buttons').appendChild(archiveBtn);

    activeNotes.push(noteEl);

    return noteEl;
}

function saveEditedNote() {
    if (currentEditingNote) {
        const index = activeNotes.indexOf(currentEditingNote);
        if (index !== -1) {
            const updatedNote = createNote({
                name: currentEditingNote.querySelector('#note-name').innerText,
                content: currentEditingNote.querySelector('#note-content').innerText,
                created: currentEditingNote.querySelector('#note-created').innerText,
                dates: currentEditingNote.querySelector('#note-dates').innerText,
                category: currentEditingNote.querySelector('#note-category').innerText,
            });
            activeNotes[index] = updatedNote;
            currentEditingNote = null;
        }
    }
}

