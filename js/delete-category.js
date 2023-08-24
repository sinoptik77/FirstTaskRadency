const deleteCategoryEl = document.createElement('select');
const deleteEl = document.querySelector('.delete-category-div');
const deleteBtn = document.getElementById('delete-category-btn');
function deleteList() {
    deleteCategoryEl.id = "note-select-categories";
    deleteCategoryEl.name = "categories";

    deleteCategoryEl.innerHTML = `
`;

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        deleteCategoryEl.appendChild(option);
    });

    deleteEl.appendChild(deleteCategoryEl)

}

deleteBtn.addEventListener('click', () => {
    const selectedCategory = deleteCategoryEl.value;
    const categoriesNotAllowedToDelete = ["Task", "Random Thought", "Idea", "Quote"];
    if (!categoriesNotAllowedToDelete.includes(selectedCategory)) {
        const index = categories.indexOf(selectedCategory);
        if (index !== -1) {
            categories.splice(index, 1);
            renderPage();
            saveData();
            updateSummaryTable();
        }
    } else {
        alert('This category cannot be deleted');
    }
});