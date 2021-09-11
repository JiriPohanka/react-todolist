import Header from "../Components/Header"
import TaskList from "../Components/TaskList"
import { useRef, useState } from "react"
import { v4 } from "uuid"

const Home = () => {

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

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <input ref={inputEl} type="text" placeholder="Create a new TODO" />
            </form>
            <TaskList taskList={taskList} />
            <ShowSettings />
        </div>
    )
}

const ShowSettings = () => {

    function toggleActive (e) {
        const options = document.querySelectorAll('.visibility-option')
        options.forEach((option) => option.classList.remove('active'))
        const buttonClicked = e.target
        buttonClicked.classList.add('active')
    }

    return (
        <>
            <button className="visibility-option active" onClick={toggleActive}>All</button>
            <button className="visibility-option" onClick={toggleActive}>Active</button>
            <button className="visibility-option" onClick={toggleActive}>Finished</button>
        </>
    )

}

export default Home