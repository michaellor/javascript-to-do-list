/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }

    return descriptions;
  }

  export var lowPriorityTasks = function(priority, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.priority === "Low") {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var getHobbyTasks = function(taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if((task.constructor.name) === "HobbyTask") {
        descriptions.push(task.description);
      }
    }
      // console.log(descriptions);
    return descriptions;
  }

  export var getHomeTasks = function(taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if((task.constructor.name) === "HomeTask") {
        descriptions.push(task.description);
      }
    }
    // console.log(descriptions);
    return descriptions;
  }

  export var getWorkTasks = function(taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection) {
      if((task.constructor.name) === "WorkTask") {
        descriptions.push(task.description);
      }
    }
    console.log(descriptions);
    return descriptions;
  }
}
