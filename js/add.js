addBtn.addEventListener('click', () => {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    const todayFormatted = `${day}.${month}.${year}`;

    const noteId = Date.now();

    const newNote = {
        id: noteId,
        name: "Note",
        content: "Type here",
        created: todayFormatted,
        dates: "",
        category: "Task",
    };

    activeNotes.push(newNote);

    saveData();
    renderActiveNotes();
    updateSummaryTable();
});
