const inputTxt = document.querySelector('.inputTask');
const addBtn = document.querySelector('.addBtn');
const taskList = document.querySelector('.task');
const searchBar = document.querySelector('.searchbar');
const copy = document.querySelectorAll('li');
const ul = document.querySelector('ul');
let liElements = document.querySelectorAll('li');
let amountLi = document.getElementsByClassName('taskies');
let spanCounter = document.querySelector('.counter span');
let counting = 0;
let tasks = [...liElements];

const removeItem = (e) => {
    e.target.parentNode.remove();
    spanCounter.innerHTML = amountLi.length;
};

const addTask = () => {
    const liElement = document.createElement('li');
    if (inputTxt.value === '') return;
    liElement.innerHTML =
        inputTxt.value + `<button class="fa-solid fa-trash-can"></button>`;
    liElement.className = 'taskies';
    taskList.appendChild(liElement);
    inputTxt.value = '';
    spanCounter.innerHTML = amountLi.length;
    document.querySelectorAll('li button').forEach((item) => {
        item.addEventListener('click', removeItem);
    });
    liElements = document.querySelectorAll('li');
};

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    tasks = [...liElements];
    tasks = tasks.filter((li) =>
        li.textContent.toLowerCase().includes(searchText)
    );
    ul.textContent = '';
    tasks.forEach((li) => ul.appendChild(li));
    document.querySelectorAll('li button').forEach((item) => {
        item.addEventListener('click', removeItem);
    });
};

// console.log(tasks);

addBtn.addEventListener('click', addTask);
document.querySelectorAll('li button').forEach((item) => {
    item.addEventListener('click', removeItem);
});
searchBar.addEventListener('input', searchTask);
