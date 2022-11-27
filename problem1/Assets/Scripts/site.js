const { fromEvent } = rxjs;
let form = document.getElementById("form");
let titleInput = document.getElementById("titleInput");
let msg = document.getElementById("msg");
let bodyInput = document.getElementById("bodyInput");
let colorInput = document.getElementById("colorInput");
let notes = document.getElementById("notes");
let addBtn = document.getElementById("addBtn");
let wrapper = document.getElementById("wrapper");
let deleteBtn = document.getElementsByClassName("deleteBtn");

const addNoteEvent = fromEvent(addBtn, 'click');
const deleteNoteEvent = fromEvent(deleteBtn, 'click', function (e) {
    return {

    }
});

addNoteEvent.subscribe((e) => {
    e.preventDefault();
    formValidation();
})

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
    /*
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
    */

    let newDiv = document.createElement("div");
    newDiv.className = data.color;

    let newSpan = document.createElement("span");
    newSpan.className = data.title;
    newDiv.appendChild(newSpan);

    let newOption = document.createElement("option")
    newOption.value = data.color;
    newDiv.appendChild(newDiv);

    let newSpan2 = document.createElement("span");
    newSpan2.className = "options";

    let newDeleteBtn = document.createElement("button");
    newDeleteBtn.type = "button";
    newDeleteBtn.innerHTML = "Delete"
    newSpan2.appendChild(newDeleteBtn);
    newDiv.appendChild(newSpan2);

    notes.appendChild(newDiv);


    resetForm();
};

let resetForm = () => {
    titleInput.value = "";
    bodyInput.value = "";
    colorInput.value = "red";
};

/*
deleteNoteEvent.subscribe(() => {
    deleteBtn.parentNode.remove();
})
*/