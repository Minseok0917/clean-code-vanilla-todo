import TodoItem from "./todoItem.js";

class TodoGroup {
    constructor() {
        this.id = 0;
        this.todolist = [];
    }

    getId() {
        return this.id++;
    }

    addTodoItem(todoData) {
        const id = this.getId();
        const todoInstance = new TodoItem({ id, ...todoData });
        this.todolist.push(todoInstance);
    }

    deleteTodoItem(todoId) {
        this.validExistID(todoId);
        const notSameId = ({ id }) => id !== todoId;
        this.todolist = this.todolist.filter(notSameId);
    }

    findTodoItem(todoId) {
        this.validExistID(todoId);
        const sameId = ({ id }) => id === todoId;
        return this.todolist.find(sameId);
    }

    isExistID(todoId) {
        const sameId = ({ id }) => id === todoId;
        return this.todolist.some(sameId);
    }

    validExistID(todoId) {
        if (!this.isExistID(todoId)) {
            throw new Error("todoitem id is not exist");
        }
    }
}

export default TodoGroup;
