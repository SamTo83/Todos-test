"use strict";

var input = document.querySelector('#input');
var submitBtn = document.querySelector('.plusButton');
var taskList = document.querySelector('.task__description');

var createTask = function createTask() {
  taskList.innerHTML += "<li><input id=\"check\" type=\"checkbox\">".concat(input.value, " <i class=\"fas fa-pen\"></i></li>");
};

submitBtn.addEventListener("click", createTask);