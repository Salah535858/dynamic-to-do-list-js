// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Select the "Add Task" button
    const taskInput = document.getElementById('task-input');   // Select the input field for tasks
    const taskList = document.getElementById('task-list');     // Select the unordered list for tasks

    // Initialize an empty array for tasks
    let tasks = [];

    // Step 3: Load Tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get tasks from Local Storage
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add each task to the list
    }

    // Step 4: Create the addTask Function
    function addTask(taskText, save = true) {
        // Task creation logic remains the same
        const trimmedTaskText = taskText.trim(); // Trim the task text

        // Check if trimmedTaskText is not empty
        if (trimmedTaskText === '') {
            alert('Please enter a task.'); // Prompt user to enter a task
            return; // Exit the function if input is empty
        }

        // Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = trimmedTaskText; // Set text content to the task

        // Create a new button for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove'; // Set button text
        removeBtn.classList.add('remove-btn'); // Add class for styling

        // Assign an onclick event to the remove button
        removeBtn.onclick = function () {
            // Remove the li element from taskList
            taskList.removeChild(listItem);
            // Remove from the tasks array
            tasks = tasks.filter(task => task !== trimmedTaskText);
            // Update Local Storage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        // Append the remove button to the li element, then append the li to taskList
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Optionally, add a class to the list item for styling
        listItem.classList.add('task-item'); // Add a class for the list item

        // Update tasks array and save to Local Storage
        if (save) {
            tasks.push(trimmedTaskText); // Add to tasks array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to Local Storage
        }

        // Clear the task input field
        taskInput.value = '';
    }

    // Step 5: Attach Event Listeners
    // Add an event listener to addButton
    addButton.addEventListener('click', () => addTask(taskInput.value));

    // Add an event listener for the 'keypress' event to allow Enter key for adding tasks
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { // Check if the pressed key is "Enter"
            addTask(taskInput.value); // Call addTask if Enter is pressed
        }
    });

    // Step 6: Load tasks on page load
    loadTasks(); // Load tasks from Local Storage when the page loads
});
