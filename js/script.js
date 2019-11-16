var myVue = new Vue({
    // My div element
    el: '#todos',
    data: {
        // Input of the next added to do
        newTodoText: '',
        // Id of the next added to do
        nextTodoId: 6,
        // Boolean if the completed to dos are shown
        hideCompletedTodos: false,
        // The to dos
        todos: [
            { id: 1 , title: 'Pain' , isComplete: false },
            { id: 2 , title: 'Savon' , isComplete: false },
            { id: 3 , title: 'Oeufs' , isComplete: false },
            { id: 4 , title: 'Pomme' , isComplete: false },
            { id: 5 , title: 'Cookies' , isComplete: false }
        ]
    },
    methods: {
        // Function : to add a new to do to the list
        addNewTodo: function () {
            this.todos.push({
                // Increment the id of the new to do
                id: this.nextTodoId++,
                // Get the input
                title: this.newTodoText,
                // Default
                isComplete: false
            })
            // Empty the text of the input
            this.newTodoText = ''
        },
        // Function : to complete the to do
        completeTodo: function (todo) {
            todo.isComplete = true
        },
        // Function : to uncomplete the to do
        uncompleteTodo: function (todo) {
            todo.isComplete = false
        },
        // Function : to show the completed to dos
        showCompletedTodos: function () {
            if(this.hideCompletedTodos) {
                this.hideCompletedTodos = false
                // Change the button's text
                document.getElementById('hide').innerText = 'Show completed to dos!'
            }
            else {
                this.hideCompletedTodos = true
                // Change the button's text
                document.getElementById('hide').innerText = 'Hide completed to dos!'
            }
        },
        // Function : to delete all the completed to dos from the data
        deleteCompletedTodos: function () {
            this.todos = this.todos.filter( todo => !todo.isComplete)
            this.hideCompletedTodos = false
            // Change the button's text
            document.getElementById('hide').innerText = 'Show completed to dos!'
        }
    }
})