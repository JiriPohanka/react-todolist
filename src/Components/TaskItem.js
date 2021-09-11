import { useState } from "react"

const TaskItem = (props) => {
    const task = props.task

    let [isTaskFinished, setIsTaskFinished] = useState(props.task.isFinished)

    function handleChange() {
        setIsTaskFinished(!isTaskFinished)
        document.querySelector(`.is-${task.id}-finished`).classList.toggle('finished-task')
    }

    return (
        <div className="task-item">
            <input type="checkbox" id={`is-${task.id}-finished`} value={task.isFinished} onChange={handleChange} />
            <label className={`is-${task.id}-finished`} htmlFor={`is-${task.id}-finished`}>{task.title}</label>
        </div>
    )
}

export default TaskItem
