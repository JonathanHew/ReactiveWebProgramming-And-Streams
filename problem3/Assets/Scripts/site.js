const {Observable,fromEvent}= rxjs;

let form = document.querySelector("form");
let errMsg = document.getElementById("errMsg");
let bodyInput = document.getElementById("bodyInput");
let colorInput = document.getElementById("colorInput");
let notes = document.getElementById("notes");

class Note extends HTMLElement {
    constructor(parentId, id, body) {
        super();
        this.parentId = parentId
        this.id = id;
        this.body = body;
      }
}

fromEvent(form,'submit').subscribe( (e) => {
    e.preventDefault();
    console.log("subcribe working");
    //formValidation();
});