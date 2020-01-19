var app = new Vue({
    el: '#app',
    data: {
        newName: '',
        list: []
    },
    methods: {
        deleteItem(key) {
            this.list.splice(key, 1);
        },
        addItem() {
            if (this.newName.trim()) {
                this.list.push({
                    name: this.newName,
                    isDone: false,
                    isEdit: false
                });
            }
        }
    },
    created: function () {
        this.list = JSON.parse(localStorage.getItem('todoList')) || [];
    },
    updated: function () {
        localStorage.setItem('todoList', JSON.stringify(this.list));
    }

})