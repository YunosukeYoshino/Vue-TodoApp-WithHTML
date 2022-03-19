  new Vue({
    el: "#app",
    data: {
      title: "My Todo App",
      tasks: [],
      newTask: ""
    },
    mounted() {
      this.getLocalStorageData()
    },
    methods: {
      addTask() {
        const task = {
          name: this.newTask,
          isComplete: false
        }

        this.tasks.push(task)
        localStorage.setItem('todo', JSON.stringify(this.tasks));
        this.newTask = ""
      },
      deleteTask(index) {
        this.tasks.forEach((task, loopIndex) => {
          if (index === loopIndex) {
            this.tasks.splice(index, 1);
          }
        })
        localStorage.setItem('todo', JSON.stringify(this.tasks));
      },
      completeTask(index) {
        this.tasks.forEach((task, loopIndex) => {
          if (index === loopIndex) {
            task.isComplete = !task.isComplete
          }
        })
        localStorage.setItem('todo', JSON.stringify(this.tasks));
      },
      getLocalStorageData() {
        const todo = localStorage.getItem('todo')

        if (todo) {
          this.tasks = JSON.parse(todo)
        }
      }
    }
  })
