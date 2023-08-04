const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add')

function createNote({name, content, created, dates, category}) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
    <div class="note-style">
      <p id="note-name">${name}</p>
      <input id="note-name-textarea" class="hidden"></input>    
    </div>
    <div class="note-style">
        <p id="note-created">${created}</p>
    </div>
    <div class="note-style">
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
    <div class="note-style">
        <p id="note-dates">${dates}</p>
    </div>
    <div class="main-buttons">
        <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
    </div>

  `

    const editBtn = noteEl.querySelector('.note-edit');
    const deleteBtn = noteEl.querySelector('.note-delete');
    const nameEl = noteEl.querySelector('#note-name');
    const contentEl = noteEl.querySelector('#note-content');
    const nameInputEl = noteEl.querySelector('#note-name-textarea');
    const contentInputEl = noteEl.querySelector('#note-content-textarea');
    const categoryEl = noteEl.querySelector('#note-category')
    const categorySelectEl = noteEl.querySelector('#note-select-categories')
    const datesEl = noteEl.querySelector('#note-dates')

    editBtn.addEventListener('click', (e) => {
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

    return noteEl;
}

addBtn.addEventListener('click', (e) => {

    const today = new Date();
    const year = today.getFullYear().toString();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month.toString().length < 2) {
        month = `0` + month.toString();
    }

    if (day.toString().length < 2) {
        day = `0` + day.toString();
    }
    let todayFormatted = day + '.' + month + '.' + year;
    const el = createNote({
        name: "Note",
        content: "Type here",
        created: todayFormatted,
        dates: "",
        category: "",
    });
    notesEl.appendChild(el);
});