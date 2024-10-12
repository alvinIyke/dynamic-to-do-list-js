// Setup eventListener for page load
document.addEventListener('DOMContentLoaded', function() {
 
// Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput  = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
 
// Add event listener to add task button
    addButton.addEventListener('click', addTask);


// Create the add task function
    function addTask() {
// Retrieve and trim the value from the task input field
    const taskText  = taskInput.value.trim();
      
// Check if taskText is not empty
    if (taskText === "") {
// Prompt the user to enter a task
    alert("Please enter a task.");
          return;
     }
    
    if (taskText !== '') {
// Create task element
    const task = document.createElement('li');
    task.classList.add('task');
    taskText.textContent = "task added";

// Create remove task button
    const removeTaskBtn = document.createElement('remove-btn');
    removeTaskBtn.classList.add('remove-task');
    removeTaskBtn.textContent = "Remove";
            
// Assign onclick event to remove button
    removeTaskBtn.onclick = function() {
// Remove the parent li element (task) from taskList
    taskList.removeChild(this.parentNode);
  }
  
  


              // Append remove task button to task
      task.appendChild(removeTaskBtn);

      // Append task to task list
      taskList.appendChild(task);

      // Clear task input
      taskInput.value = '';
    }
  }

  // Add event listener to taskInput for keypress event
taskInput.addEventListener('keypress', function(event) {
    // Check if Enter key was pressed
    if (event.key === 'Enter') {
      // Call addTask function
      addTask();
    }
  });
  
  
      