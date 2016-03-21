/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-priority.ts" />
/// <reference path="to-do-listing-function.ts" />

var people = ToDoList.people;
var taskpriority = ToDoList.taskpriority;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));

tasks.push(new ToDoList.HobbyTask("Play board game."));
tasks.push(new ToDoList.HobbyTask("Eat bbq ribs"));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
tomorrow.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Pick up cheese and crackers.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new car.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

// console.log(tasks);

var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
// console.log("Here are Thor's tasks: ");
for(var task of thorTasks){
  // console.log(task);
}

var HobbyTasks =
ToDoList.getHobbyTasks(tasks);

var HomeTasks = ToDoList.getHomeTasks(tasks);

var WorkTasks = ToDoList.getWorkTasks(tasks);

var LowPriorty = ToDoList.lowPriorityTasks(taskpriority.low, tasks);

var highPriorityName = ToDoList.highPriorityName(people.thor, tasks);



//
