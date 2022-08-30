class TodoItem {
    constructor({ id, title, description, status }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
    changeStatusTodo() {
        this.status = "todo";
    }
    changeStatusProgress() {
        this.status = "progress";
    }
    changeStatusComplete() {
        this.status = "complete";
    }
}

export default TodoItem;
