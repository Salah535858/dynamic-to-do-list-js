// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Select the "Add Task" button
    const taskInput = document.getElementById('task-input');   // Select the input field for tasks
    const taskList = document.getElementById('task-list');     // Select the unordered list for tasks

    // Step 3: Create the addTask Function
    function addTask() {
        // Step 4: Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task.'); // Prompt user to enter a task
            return; // Exit the function if input is empty
        }

        // Step 5: Task Creation and Removal
        // Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set text content to the task

        // Create a new button for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';  // Set button text
        removeBtn.className = 'remove-btn'; // Add class for styling

        // Assign an onclick event to the remove button
        removeBtn.onclick = function () {
            taskList.removeChild(listItem); // Remove the li element from taskList
        };

        // Append the remove button to the li element, then append the li to taskList
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Step 6: Attach Event Listeners
    // Add an event listener to addButton
    addButton.addEventListener('click', addTask);

    // Add an event listener for the 'keypress' event to allow Enter key for adding tasks
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { // Check if the pressed key is "Enter"
            addTask(); // Call addTask if Enter is pressed
        }
    });

    // Step 7: Invoke the addTask function on DOMContentLoaded
    // This step ensures any initialization logic could be added here if necessary
});
