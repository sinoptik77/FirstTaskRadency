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

    activeNotes.forEach((noteEl) => {
        const category = noteEl.category;
        activeCategoriesCount[category]++;
    });

    archivedNotes.forEach((noteEl) => {
        const category = noteEl.category;
        archivedCategoriesCount[category]++;
    });

    const table = document.querySelector('.table-container');

    for (const category in activeCategoriesCount) {
        const activeCount = activeCategoriesCount[category];
        const activeCell = table.querySelector(`#${category.toLowerCase().replace(' ', '-')}-active`);
        if (activeCount !== null && !isNaN(activeCount)) {
            activeCell.textContent = activeCount;
        }
    }

    for (const category in archivedCategoriesCount) {
        const archiveCount = archivedCategoriesCount[category];
        const archivedCell = table.querySelector(`#${category.toLowerCase().replace(' ', '-')}-archived`);
        if (archiveCount !== null && !isNaN(archiveCount)) {
            archivedCell.textContent = archiveCount;
        }
    }
}

