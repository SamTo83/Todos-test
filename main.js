

const input = document.querySelector('#input');
const submitBtn = document.querySelector('.plusButton');
const taskList = document.querySelector('.task__description');
const resetBtn = document.querySelector('.resetButton');

const createTask = () => {
  taskList.innerHTML += `<li><input id="check" type="checkbox">${input.value} <i class="fas fa-pen"></i></li>`
}

submitBtn.addEventListener("click", createTask);

resetBtn.addEventListener('click', () => {
  taskList.innerHTML = "";
})