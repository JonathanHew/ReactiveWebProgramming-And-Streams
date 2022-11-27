const { fromEvent, takeWhile } = rxjs;
let form = document.getElementById("form");
let titleInput = document.getElementById("titleInput");
let msg = document.getElementById("msg");
let bodyInput = document.getElementById("bodyInput");
let colorInput = document.getElementById("colorInput");
let notes = document.getElementById("notes");
let addBtn = document.getElementById("addBtn");
let wrapper = document.getElementById("wrapper");

const addNoteEvent = fromEvent(addBtn, 'click');

addNoteEvent.subscribe((e) => {
    e.preventDefault();
    console.log("subscribe success!!");
})

