class TodoList extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.setAttribute('role', 'listbox');
        const template = `<style>
        :host{
        display:block;
            overflow-x: hidden;
            overflow-y: auto;
        }
        </style>
        <slot>
            <p>
                Yeah! Nothing to do.
            </p>
        </slot>
        `;
        this.shadow.innerHTML = template;

    }
}

window.customElements.define("todo-list", TodoList);

class TodoLi extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.setAttribute("role", "option");
        const template = `
        <style>
        :host{
            display:flex;
        }
        label{
            display:contents;
            cursor:inherit;
        }
        input{
            margin-right: 8px;
        }
        </style>
        <input id="input" type="checkbox" />
        <label for="input"><slot></slot></label>
        `;

        this.shadow.innerHTML = template;
    }
}

window.customElements.define('todo-li', TodoLi);