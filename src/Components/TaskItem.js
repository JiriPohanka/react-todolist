import { useState } from "react"

const TaskItem = (props) => {
    const task = props.task
    const toggleTaskStatus = props.toggleTaskStatus

    let [isTaskFinished, setIsTaskFinished] = useState(props.task.isFinished)

    function handleChange() {
        setIsTaskFinished(!isTaskFinished)
        document.querySelector(`label[for="is-${task.id}-finished"]`).classList.toggle('finished-task')
        document.querySelector(`label[for="is-${task.id}-finished"]`).parentNode.classList.toggle('finished')
        toggleTaskStatus(task.id)
    }

    return (
        <div className="task-item" id={task.id}>
            <input type="checkbox" id={`is-${task.id}-finished`} value={task.isFinished} onChange={handleChange} />
            <label className={`is-${task.id}-finished`} htmlFor={`is-${task.id}-finished`}>{task.title}</label>
        </div>
    )
}

export default TaskItem
