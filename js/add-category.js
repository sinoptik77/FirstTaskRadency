const addCategoryBtn = document.getElementById('add-category-btn');
const newCategoryInput = document.getElementById('new-category-input');

addCategoryBtn.addEventListener('click', () => {
    const newCategory = newCategoryInput.value.trim();

    if (newCategory !== '') {
        if (!categories.includes(newCategory)) {
            categories.push(newCategory);
            renderPage();
            saveData();
            updateSummaryTable();
        } else {
            alert('Category already exists');
        }
        newCategoryInput.value = '';
    }
    renderPage();
});