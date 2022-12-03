const {Observable,fromEvent}= rxjs;

let form = document.querySelector("form");
let titleInput = document.getElementById("titleInput");
let errMsg = document.getElementById("errMsg");
let bodyInput = document.getElementById("bodyInput");
let colorInput = document.getElementById("colorInput");
let notes = document.getElementById("notes");
let addBtn = document.getElementById("addBtn");

fromEvent(form,'submit').subscribe( (e) => {
    e.preventDefault();
    console.log("subcribe working");
    formValidation();
});

let formValidation = () =>{
    if(titleInput.value === "")
    {
        console.log("Failure!!");
        errMsg.innerHTML = "Title cannot be blank";
    }
    else
    {
        console.log("Success!!");
        errMsg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["title"] = titleInput.value;
    data["body"] = bodyInput.value;
    data["color"] = colorInput.value;

    console.log(data)
    createNote();
};

let createNote = () => {

    let li = document.createElement('li');
    li.style.backgroundColor = data.color;
    notes.appendChild(li);

    let noteContent = document.createElement('div');
    noteContent.className = "noteContent";
    
    let newTitle = document.createElement("p");
    newTitle.innerHTML = data.title;

    let newBody = document.createElement("p");
    newBody.innerHTML = data.body;

    li.appendChild(noteContent);
    noteContent.appendChild(newTitle);
    noteContent.appendChild(newBody);

    let deleteBtn= document.createElement('button');
    deleteBtn.type = "button";
    deleteBtn.name = "deleteBtn";
    deleteBtn.innerHTML = "Delete";

    fromEvent(deleteBtn, 'click').subscribe(
        () => {
          deleteBtn.parentNode.remove();
        }
      );
    
    li.appendChild(deleteBtn);

    let editNote = document.createElement('input');
    editNote.type = "text";

    let editTitle = document.createElement('input');
    editTitle.type = "text";
  
    let editBtn = document.createElement('button');
    editBtn.type = "button";
    editBtn.name = "editBtn";
    editBtn.innerHTML = "Edit";



    fromEvent(editBtn, 'click').subscribe(
        () => {
          if (editBtn.parentNode.contains(newTitle)) {
            editBtn.parentNode.replaceChild(editTitle, newTitle)
            editTitle.value = newTitle.innerHTML;

            editBtn.parentNode.replaceChild(editNote, newBody)
            editNote.value = newBody.innerHTML;

            editBtn.innerHTML = "Save";
          } else {
            editBtn.parentNode.replaceChild(newTitle, editTitle)
            newTitle.innerHTML = editTitle.value;

            editBtn.parentNode.replaceChild(newBody, editNote)
            newBody.innerHTML = editNote.value;
            editBtn.innerHTML = "Edit";
          }
        }
      );

    noteContent.appendChild(editBtn);

    resetForm();
};


let resetForm = () => {
    titleInput.value = "";
    bodyInput.value = "";
    colorInput.value = "red";
};