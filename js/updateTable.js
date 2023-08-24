const table = document.querySelector('.table-container');

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

    categories.forEach(category => {
        activeCategoriesCount[category] = 0;
        archivedCategoriesCount[category] = 0;
    });

    activeNotes.forEach((noteEl) => {
        const category = noteEl.category;
        activeCategoriesCount[category]++;
    });

    archivedNotes.forEach((noteEl) => {
        const category = noteEl.category;
        archivedCategoriesCount[category]++;
    });

    const categoryObjects = categories.map(category => ({
        name: category,
        active: activeCategoriesCount[category],
        archived: archivedCategoriesCount[category]
    }));

    console.log(categoryObjects, categories)

    function createTable({name, active, archived}) {

        const tableEl = document.createElement('div');
        tableEl.classList.add('table-style');

        tableEl.innerHTML = `
        <div class="table-category">${name}</div>
        <div id="task-active" class="status">${active}</div>
        <div id="task-archived" class="status">${archived}</div>
        `
        return tableEl
    }

    function renderTableElements() {
        tablesEl.innerHTML = '';

        categoryObjects.forEach(table => {
            const el = createTable(table);
            tablesEl.appendChild(el);
        });
    }

    renderTableElements();

    for (const category in activeCategoriesCount) {
        const activeCount = activeCategoriesCount[category];
        const activeCell =
            table.querySelector(`#${category.toLowerCase().replace(' ', '-')}-active`);
            activeCell.textContent = activeCount;
    }

    for (const category in archivedCategoriesCount) {
        const archiveCount = archivedCategoriesCount[category];
        const archivedCell =
            table.querySelector(`#${category.toLowerCase().replace(' ', '-')}-archived`);
            archivedCell.textContent = archiveCount;
    }
}


function initializeCategories() {
    defaultCategories.forEach(category => {
        if (!categories.includes(category)) {
            categories.push(category);
        }
    });
}


