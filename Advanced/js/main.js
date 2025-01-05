    document.addEventListener("DOMContentLoaded", () => {
    const shoppingForm = document.getElementById("shoppingForm");
    const itemInput = document.getElementById("itemInput");
    const shoppingList = document.getElementById("shoppingList");

    shoppingForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const itemText = itemInput.value.trim();

        if (itemText === "") return; 

        const listItem = document.createElement("li");

        const itemSpan = document.createElement("span");
        itemSpan.textContent = itemText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            shoppingList.removeChild(listItem);
        });

        listItem.appendChild(itemSpan);
        listItem.appendChild(deleteButton);

        shoppingList.appendChild(listItem);

        itemInput.value = "";
        itemInput.focus();
});
});