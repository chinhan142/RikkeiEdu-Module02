const deleteBtn = document.querySelectorAll("#delete-btn");

deleteBtn.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.target.parentElement.remove();
    })
})