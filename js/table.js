function updateSummaryTable() {

    const activeCategoriesCount = {
        'Task': 0,
        'Random Thought': 0,
        'Idea': 0,
        'Quote': 0,
    };

    const archivedCategoriesCount = {
        'Task': 0,
        'Random Thought': 0,
        'Idea': 0,
        'Quote': 0,
    };

    const table = document.querySelector('.table-container');

    const taskActive = table.querySelector('#task-active');
    const taskArchive = table.querySelector('#task-archived')
    const randomThoughtActive = table.querySelector('#random-thought-active');
    const randomThoughtArchive = table.querySelector('#random-thought-archived');
    const ideaActive = table.querySelector('#idea-active');
    const ideaArchive = table.querySelector('#idea-archived');
    const quoteActive = table.querySelector('#quote-active');
    const quoteArchive = table.querySelector('#quote-archived');

    activeNotes.forEach((noteEl) => {
        const category = noteEl.querySelector('#note-category').innerText;
        activeCategoriesCount[category]++;
    });

    archivedNotes.forEach((noteEl) => {
        const category = noteEl.querySelector('#note-category').innerText;
        archivedCategoriesCount[category]++;
    });

    taskActive.innerHTML = activeCategoriesCount.Task;
    taskArchive.innerHTML = archivedCategoriesCount.Task;
    randomThoughtActive.innerHTML = activeCategoriesCount["Random Thought"];
    randomThoughtArchive.innerHTML = archivedCategoriesCount["Random Thought"];
    ideaActive.innerHTML = activeCategoriesCount.Idea;
    ideaArchive.innerHTML = archivedCategoriesCount.Idea;
    quoteActive.innerHTML = activeCategoriesCount.Quote;
    quoteArchive.innerHTML = archivedCategoriesCount.Quote;

}
