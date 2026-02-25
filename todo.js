const todo_form = document.querySelector('#todo_form');
const titleInput = document.querySelector('.todo_title');
const detailsInput = document.querySelector('.todo_details');
const grid = document.querySelector('.grid');
const logoutbutton = document.querySelector(".logoutbutton");

let todo = JSON.parse(localStorage.getItem('todo')) || [];
let editingIndex = null;

function saveTodo() {
    localStorage.setItem('todo', JSON.stringify(todo));
}

console.log(todo)

function renderTodo() {
    grid.innerHTML = "";

    todo.forEach((e, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const title = document.createElement('h1');
        title.textContent = e.title;
        if (e.completed) title.style.textDecoration = "line-through";

        const descp = document.createElement("p");
        descp.textContent = e.details;
        if (e.completed) descp.style.textDecoration = "line-through";

        const flex = document.createElement('div');
        flex.classList.add('flex');


        const trashIcon = document.createElement('i');
        trashIcon.className = "fa-solid fa-trash";
        trashIcon.onclick = function () {
            if (confirm("Are you sure you want to delete this list?")) {
                todo.splice(index, 1);
                saveTodo();
                renderTodo();
            }
        };


        const editIcon = document.createElement('i');
        editIcon.className = "fa-solid fa-pen-to-square";
        editIcon.onclick = function () {
            titleInput.value = e.title;
            detailsInput.value = e.details;
            editingIndex = index;
        };


        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = e.completed;
        checkbox.onchange = function () {
            todo[index].completed = checkbox.checked;
            saveTodo();
            renderTodo();
        };

        flex.appendChild(trashIcon);
        flex.appendChild(editIcon);
        flex.appendChild(checkbox);

        todoDiv.appendChild(title);
        todoDiv.appendChild(descp);
        todoDiv.appendChild(flex);

        grid.appendChild(todoDiv);
    });
}

function CreateTodo(e) {
    e.preventDefault();

    const todo_title = titleInput.value.trim();
    const todo_details = detailsInput.value.trim();

    if (todo_title === "") {
        alert("Please fill the title section");
        return;
    }

    if (todo_details === "") {
        alert("Please fill the details section");
        return;
    }

    // If editing an existing todo
    if (editingIndex !== null) {
        todo[editingIndex].title = todo_title;
        todo[editingIndex].details = todo_details;

        alert("To-do updated successfully!");
        editingIndex = null;
    }

    // If creating new todo
    else {
        todo.push({
            title: todo_title,
            details: todo_details,
            completed: false
        });

        alert("To-do created successfully!");
    }

    saveTodo();
    renderTodo();
    todo_form.reset();
}

// FIRST RENDER
renderTodo();

// FORM SUBMISSION
todo_form.addEventListener('submit', CreateTodo);

// function logOut(){
// confirm("Are you sure you want to Log Out")
// if (confirm === ok) {
//     window.location.href = "login.html"
// } else { }
// }
// logOut()

logoutbutton.onclick = function () {
   
    const userconfirm = confirm("Are you sure you want to Log Out")
    if (userconfirm ) {
        window.location.href = "login.html"
    } 

}















// function saveTodo() {
//     localStorage.setItem('todo', JSON.stringify(todo))
// }



// let todo = JSON.parse(localStorage.getItem('todo')) || [];
// let editingIndex = null;

// function CreateTodo(e) {

//     const todo_form = document.querySelector('#todo_form')
//     const todo_title = document.querySelector('.todo_title').value.trim()
//     const todo_details = document.querySelector('.todo_details').value.trim()
//     // const todo_button = document.querySelector('.todo_button').value.trim()
//     // const todo_logout = document.querySelector('.todo_logout').value.trim()
//     // const grid = document.querySelector('grid')

//     e.preventDefault()
//     if (todo_title === "") {
//         alert("Please fill the title Section")
//     } else if (todo_details === "") {
//         alert("Please fill the details section")
//     } else { alert(`List created succesfully, Tiltle: "${todo_title}", Details: "${todo_details}"`) }

//     // todo_form.reset()
// }

// CreateTodo()



// const todo_form = document.querySelector('#todo_form');
// function saveTodo() {
//     localStorage.setItem('todo', JSON.stringify(todo))
// }
// const todo = JSON.parse(localStorage.getItem('todo')) || []
// let editingIndex = null;

// console.log(todo)

// function CreateTodo(e) {
//     e.preventDefault()
//     const todo_title = document.querySelector('.todo_title').value.trim()
//     const todo_details = document.querySelector('.todo_details').value.trim()
//     const grid = document.querySelector('.grid');

//     if (todo_title === "") {
//         alert("Please fill the title section")
//         return;
//     }
//     if (todo_details === "") {
//         alert("Please fill the details section")
//         return;
//     }

//     else {alert(`To-do List Created Successfully`)
//         grid.innerHTML = ""
//         todo.forEach((e, index) => {
//             const todoDiv = document.createElement('div');
//             todoDiv.classList.add('todo');

//             const title = document.createElement('h1')
//             title.textContent = e.title
//             if (e.completed) title.style.textDecoration = "line through";

//             const descp = document.createElement("p");
//             descp.textContent = e.details
//             if (e.completed) descp.style.textDecoration = "line through"

//             const flex = document.createElement('div');
//             flex.classList.add('flex');
//             const trashIcon = document.createElement('i');
//             trashIcon.className = "fa-solid fa-delete-left"
//             trashIcon.onclick = function () {
//                 if (confirm("Are you sure you want to delete this list?"))
//                     todo.splice(index, 1)
//                 saveTodo()
//                 // CreateTodo()
//             };

//             const editIcon = document.createElement('i');
//             editIcon.className = "fa-solid fa-pen-to-square"
//             editIcon.onclick = function () {
//                 input.value = e.title
//                 TextArea.value = e.description
//                 editingIndex = index;


//             };

//             const checkbox = document.createElement('input');
//             checkbox.type = "checkbox"
//             checkbox.checked = e.completed
//             checkbox.onchange = function () {
//                 todo[index].completed = checkbox.checked;
//                 saveTodo()
//             }

//             flex.appendChild(trashIcon)
//             flex.appendChild(editIcon)
//             flex.appendChild(checkbox)

//             todoDiv.appendChild(title)
//             todoDiv.appendChild(descp)
//             todoDiv.appendChild(flex)

//             grid.appendChild(todoDiv)

//         })
//     }


//     todo.push({
//         title: todo_title,
//         details: todo_details
//     })

//     saveTodo()
//     todo_form.reset()
// }
// todo_form.addEventListener('submit', CreateTodo)


