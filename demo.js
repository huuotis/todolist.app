
// btn.onclick = function () {
  //   showTasks ()
  // }
  
  
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var form = $('.wrapper')
var input = $('input');
var addBtn = $('.inputField button');
var todoList = $('.todoList');
var deleteTasksAll = $('.footer button')
var countTasks = $('.pendingTasks')
var value;

input.oninput = function () {
  value = input.value;
  addBtn.classList.add('active');
}

addBtn.onclick = function () {
  return showTasks (value);
}

form.onkeyup = function (e) {
  if (e.which === 13) {
    showTasks (value);
  }
}

function showTasks (value) {
  if (value = "") {
    return value;
  } else {
    value = input.value;
  }
  
  var html = `<li>${value}<span class="icon" onclick="deleteTaskItem()"><i class="fas fa-trash"></i></span></li>`
  todoList.innerHTML += html;
  input.value = "";
  deleteTasksAll.classList.add('active');
  countTasks.textContent = $$('li').length;
}

function deleteTaskItem () {
  $('li').remove();
  addBtn.classList.remove('active');
  countTasks.textContent = $$('li').length;
}

deleteTasksAll.onclick = function () {
  todoList.innerHTML = "";
  deleteTasksAll.classList.remove('active');
  countTasks.textContent = $$('li').length;
}











