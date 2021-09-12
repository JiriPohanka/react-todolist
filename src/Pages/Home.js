import Header from "../Components/Header"
import TaskList from "../Components/TaskList"
import ShowSettingsPanel from "../Components/ShowSettingsPanel"
import { useRef, useState } from "react"
import { v4 } from "uuid"

const Home = () => {
    console.log("home")

    const inputEl = useRef()
    const [taskList, setTaskList] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        const inputVal = e.target[0].value
        const id = v4()
        const newTask = { id, title: inputVal, isFinished: false }
        setTaskList((prevTasks) => [...prevTasks, newTask])
        inputEl.current.value = ""
    }

    function toggleTaskStatus(taskId) {
        console.log("toggleTaskStatus")
        const i = taskList.findIndex(task => task.id === taskId)
        console.log(i)
        setTaskList(taskList.map((task, index) => {
            if (index === i) {
                task.isFinished = !task.isFinished
            }
            return task
        }))
        console.log(taskList)
    }

    function clearFinished() {
        setTaskList(taskList.filter( item => item.isFinished === false)  )
    }

    console.log("home-----")
    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <input ref={inputEl} type="text" placeholder="Create a new TODO" />
            </form>
            <TaskList taskList={taskList} toggleTaskStatus={toggleTaskStatus} />
            <ShowSettingsPanel taskList={taskList} clearFinished={clearFinished}/>
        </div>
    )
}

export default Home