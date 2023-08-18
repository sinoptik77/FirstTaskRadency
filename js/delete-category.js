const deleteCategoryEl = document.createElement('select');
const deleteEl = document.querySelector('.delete-category-div');
const deleteBtn = document.getElementById('delete-category-btn');
function deleteList() {
    deleteCategoryEl.innerText = 'Choose category to delete';
    deleteCategoryEl.id = "note-select-categories";
    deleteCategoryEl.name = "categories";

    deleteCategoryEl.innerHTML = `
    <option value="Task">Task</option>
    <option value="Random Thought">Random Thought</option>
    <option value="Idea">Idea</option>
    <option value="Quote">Quote</option>
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

    if (selectedCategory) {
        const index = categories.indexOf(selectedCategory);
        if (index !== -1) {
            categories.splice(index, 1);
            renderPage();
            saveData();
            updateSummaryTable();
        }
    } else {
        alert('Nothing to delete');
    }
});