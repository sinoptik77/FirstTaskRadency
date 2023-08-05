const notesEl = document.querySelector('.notes');

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
        archived: false,
    });
    notesEl.appendChild(el);
});
