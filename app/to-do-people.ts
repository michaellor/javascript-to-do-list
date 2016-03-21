/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  };

  var thor: ToDoList.IPerson = {
    name: "Thor Son of Odin",
    email: "thor@asgard.com"
  };

  var loki: ToDoList.IPerson = {
    name: "God of mischief",
    email: "loki@geocities.com",
    phone: "555-555-1111"
  };

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki,
  };
}
