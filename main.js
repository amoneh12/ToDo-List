function addTask() {
  const inputBox = document.getElementById("input-box");
  const taskText = inputBox.value;

  if (taskText.trim() !== "") {
    const listContainer = document.getElementById("List-container");
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    listContainer.appendChild(listItem);
    inputBox.value = ""; // Clear the input box after adding the task
  }
}
