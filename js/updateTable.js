

function updateSummaryTable() {

    const table = document.querySelector('.table-container');

    const activeCategoriesCount = {

    };

    const archivedCategoriesCount = {

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
}


function initializeCategories() {
    defaultCategories.forEach(category => {
        if (!categories.includes(category)) {
            categories.push(category);
        }
    });
}


