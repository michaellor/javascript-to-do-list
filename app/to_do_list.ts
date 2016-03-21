
$(document).ready (function(){
  for(var i = 0; i < HobbyTasks.length; i++) {
    $('#hobbyResults').append("<li>" + HobbyTasks[i] + "</li>");
  }

  for(var i = 0; i < HomeTasks.length; i++) {
    $('#homeResults').append("<li>" + HomeTasks[i] + "</li>");
  }

  for(var i = 0; i < WorkTasks.length; i++) {
    $('#workResults').append("<li>" + WorkTasks[i] + "</li>");
  }

  for(var i = 0; i < LowPriorty.length; i++) {
    $('#lowPriorty').append("<li>" + LowPriorty[i] + "</li>");
  }

  $('#thorHighTask').append("<li>" + highPriorityName[0] + "</li>");

});
