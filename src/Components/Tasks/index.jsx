
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { FaPlus, FaRegCircle, FaCheckCircle, FaCheck } from "react-icons/fa"
import { AddContainer, TodaysTasks, TasksContainer, ItemsToDo, NoTasks } from './styles'
import { FaTrashAlt } from 'react-icons/fa'

export function Tasks() {
    const [list, setList] = useState([])
    const [task, setTask] = useState("")

    function inputChange(event) {
        setTask(event.target.value)
    }

    function buttonClick() {
        if (task) {
            setList([...list, { id: uuid(), task, finished: false }])
            setTask("")
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            buttonClick();
        }
    }

    function finishTask(id) {
        const newList = list.map((item) => {
            if (item.id === id) {
                return { ...item, finished: !item.finished }
            }
            return item
        })
        const finishedItem = newList.find((item) => item.id === id)
        const unfinishedItems = newList.filter((item) => item.id !== id)
        setList([...unfinishedItems, finishedItem])
    }
    function deleteItem(id) {
        const newList = list.filter(item => item.id !== id)
        setList(newList)
    }

    return (
        <>
            <AddContainer>
                <input type="text" value={task} onChange={inputChange} onKeyDown={handleKeyDown} placeholder="What do I have to do?" />
                <button className='add-button' onClick={buttonClick}><FaPlus size={25} /></button>
            </AddContainer>
            <TodaysTasks>Today&apos;s Tasks</TodaysTasks>
            <TasksContainer>
                <ul>
                    {
                        list.length > 0 ? (
                            list.map((item) => (
                                <ItemsToDo isFinished={item.finished} key={item.id}>
                                    <button className="check-box" onClick={() => finishTask(item.id)}>{!item.finished ? <FaRegCircle size={20} /> : <FaCheckCircle size={20} />}
                                    </button>
                                    <p>{item.task}</p>
                                    <button className="trash-button" onClick={() => deleteItem(item.id)}><FaTrashAlt size={20} /></button>
                                </ItemsToDo>
                            )
                            )
                        ) : (
                            <NoTasks>
                                <FaCheck size={70} />
                                <p>No tasks for today</p>
                                <p>Enjoy your day</p>
                            </NoTasks>
                        )
                    }
                </ul>
            </TasksContainer>
        </>
    )
}