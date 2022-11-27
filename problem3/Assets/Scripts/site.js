class Note extends HTMLElement {
    constructor(parentId, id, body) {
        super();
        this.parentId = parentId
        this.id = id;
        this.body = body;
      }
}