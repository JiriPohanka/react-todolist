import TaskItem from "./TaskItem"

const TaskList = (props) => {

    return (
        props.taskList.map(task => <TaskItem key={task.id} task={task} toggleTaskStatus={props.toggleTaskStatus}/> )
    )
}

export default TaskList
