const {Observable,fromEvent}= rxjs;

let form = document.querySelector("form");
let errMsg = document.getElementById("errMsg");
let bodyInput = document.getElementById("bodyInput");
let colorInput = document.getElementById("colorInput");
let pidInput = document.getElementById("pidInput")
let notes = document.getElementById("notes");

let noteId = 1;

class Note extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("new-note", Note);

fromEvent(form,'submit').subscribe( (e) => {
    e.preventDefault();
    console.log("subcribe working");
    formValidation();
});

let formValidation = () =>{
    if(bodyInput.value === "")
    {
        console.log("Failure!!");
        errMsg.innerHTML = "Note cannot be blank";
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
    data["body"] = bodyInput.value;
    data["color"] = colorInput.value;
    data["pid"] = pidInput.value;

    console.log(data)
    createNote();
};
let createNote = () => {
    const newNote = new Note();
    newNote.id = noteId;
    noteId++;

    if(data.pid == 0 || data.pid === "")
    {
        newNote.pid = null;
    }
    else
    {
        newNote.pid = data.pid;
    }

    newNote.color = data.color;

    newNote.body = data.body;

    console.log(newNote.pid);
};

let resetForm = () => {
    pidInput.value = "";
    bodyInput.value = "";
    colorInput.value = "red";
};