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
    //createNotes();
};