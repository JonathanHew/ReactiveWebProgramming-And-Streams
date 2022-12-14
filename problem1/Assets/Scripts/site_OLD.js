let form = document.getElementById("form");
let titleInput = document.getElementById("titleInput");
let msg = document.getElementById("msg");
let bodyInput = document.getElementById("bodyInput");
let colorInput = document.getElementById("colorInput");
let notes = document.getElementById("notes");
let addBtn = document.getElementById("addBtn");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () =>{
    if(titleInput.value === "")
    {
        console.log("Failure!!");
        msg.innerHTML = "Title cannot be blank";
    }
    else
    {
        console.log("Success!!");
        msg.innerHTML = "";
        acceptData();
        addBtn.setAttribute("data-bs-dismiss","modal");
        addBtn.click();
        
        (()=>{
            addBtn.setAttribute("data-bs-dismiss","");
        })()
    }
};

let data = {};

let acceptData = () => {
    data["title"] = titleInput.value;
    data["body"] = bodyInput.value;
    data["color"] = colorInput.value;

    console.log(data)
    createNotes();
};

let createNotes = () => {
    notes.innerHTML += `
    <div class = "${data.color}">
        <span class="fw-bold">${data.title}</span>
        <p>${data.body}</p>
        <option value="${data.color}">${data.color}</option>
        <span class="options">
            <button onClick = "editNote(this)" data-bs-toggle="modal" data-bs-target="#form" name="edit" type="button">Edit</button>
            <button onClick = "deleteNote(this)" type="button">Delete</button> 
        </span>
    </div>
    `;
    

    resetForm();
};

let deleteNote = (e) => {
    e.parentElement.parentElement.remove();
}

let editNote = (e) => {
    let selectedNote = e.parentElement.parentElement;

    titleInput.value = selectedNote.children[0].innerHTML;
    bodyInput.value = selectedNote.children[1].innerHTML;
    colorInput.value = selectedNote.children[2].innerHTML;

    selectedNote.remove();
};

let resetForm = () => {
    titleInput.value = "";
    bodyInput.value = "";
    colorInput.value = "red";
};

