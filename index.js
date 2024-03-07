let tasks = []

function addTask(task) {
    if (typeof(task) == "object") {
        tasks.push(task);
    } else {
        console.log(`Task object olmalidir: {task: "${task}", priority: "high", time: 30}`);
    }
}

function completeTask(index) {
    tasks.splice(index, 1);
}

function listTasks() {
    tasks.forEach((item) => {
        console.log(`Task: ${item.task} | Priority: ${item.priority} | Time: ${item.time}`);
    })
}

function priorityTasks() {
    tasks.filter(item => item.priority == "high").forEach((item) => {
        console.log(`Task: ${item.task} | Time: ${item.time}`);
    })
}

function totalTime() {
    console.log(tasks.reduce((acc, cur) => {
        return acc + cur.time        
    }, 0))
}

function extensionTasks(newTasks) {
    tasks = tasks.concat(newTasks)
}

function sliceTasks(start, end) {
    tasks = tasks.slice(start,end)
}