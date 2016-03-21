/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var low: ToDoList.ITask = {
    priority: "low",
  }

  var medium: ToDoList.ITask = {
    priority: "medium",
  }

  var high: ToDoList.ITask = {
    priority: "high",
  }

  export var taskpriority = {
    "low": low,
    "medium": medium,
    "high": high,
  };
}
