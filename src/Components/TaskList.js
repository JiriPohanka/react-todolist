import TaskItem from "./TaskItem"


const TaskList = (props) => {

    const taskList = props.taskList
    console.log("TaskList: " + taskList)

    return (
        taskList.map( task => <TaskItem key={task.id} task={task} /> )
    )
}

export default TaskList
