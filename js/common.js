import TodoGroup from "./todolist/todoGroup.js";

const todos = new TodoGroup();

const $todoList = document.getElementById("todo-list");
const $todoInput = document.getElementById("todo-input");
$todoInput.addEventListener("keydown", function (event) {
    const isAdd = ["Enter", "Tab"].includes(event.code);
    if (isAdd) {
        const title = this.value;
        todos.addTodoItem({ title });
        renderTodoList();
    }
});

function renderTodoList() {
    $todoInput.value = "";
    $todoList.innerHTML = "";

    todos.todolist
        .map(({ id, title }) => {
            const $li = document.createElement("li");
            const $span = document.createElement("span");
            const $button = document.createElement("button");
            $span.textContent = title;
            $button.textContent = "X";

            $button.addEventListener("click", function () {
                todos.deleteTodoItem(id);
                renderTodoList();
            });

            $li.append($span);
            $li.append($button);
            return $li;
        })
        .forEach(($li) => $todoList.append($li));
}
