var app = new Vue({
    el: '#app',
    data: {
        newItemName: '',
        newItemCategory: '',
        newCategoryName: '',
        list: [],
        categories: [{
                name: 'new'
            },
            {
                name: 'work'
            },
            {
                name: 'home'
            }
        ]
    },
    methods: {
        deleteItem(key) {
            this.list.splice(key, 1);
        },
        addItem() {
            this.list.push({
                name: this.newItemName,
                category: this.newItemCategory,
                isDone: false,
                isEdit: false
            });
            this.newItemName = null; // очещение поля добавления todo
            this.newItemCategory = '';
        },
        addCategory() {
            this.categories.push({
                name: this.newCategoryName
            });
            this.newCategoryName = null;
        },
        filteredList(categoryName) {
            return this.list.filter(item => item.category === categoryName);
        }
    },

    watch: {
        list: {
            handler: function () {
                localStorage.setItem('todoList', JSON.stringify(this.list));
            },
            deep: true
        },
        categories: function () {
            localStorage.setItem('todoCategories', JSON.stringify(this.categories));
        }
    },
    created: function () {
        this.list = JSON.parse(localStorage.getItem('todoList')) || [];

        const localStorageCategories = localStorage.getItem('todoCategories');
        if (localStorageCategories) {
            this.categories = JSON.parse(localStorage.getItem('todoCategories')) || this.categories;
        }
    },
});