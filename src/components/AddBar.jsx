import { useState } from 'react'
import '../style/addBar.css'
import { BiSolidAddToQueue } from 'react-icons/bi'

export default function AddBar({ addTask }) {

    const [task, setTask] = useState('')

    const handleAddTask = () => {
        addTask(task)
        setTask('')
    }

    return (
        <div className="addBar">
            <input 
                type='text' 
                className='addInput' 
                placeholder='Add new task' 
                value={task} 
                onChange={(e) => setTask(e.target.value)} />
            <BiSolidAddToQueue 
                className='add-icon' 
                onClick={handleAddTask} />
        </div>
    )
}