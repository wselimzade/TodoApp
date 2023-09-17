import { useState } from 'react'
import '../style/addBar.css'
import { BiSolidAddToQueue } from 'react-icons/bi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddBar({ addTask }) {

    const [task, setTask] = useState('')

    const handleAddTask = () => {

        if (task.length > 30) {
            toast.error('Maximum 30 characters allowed', {
                theme: 'dark',
                autoClose: 1000,
                position: "top-center"
            })
            return;
        } else if (task === '') {
            toast.error('this field cannot be left blank', {
                theme: 'dark',
                autoClose: 1000,
                position: "top-center"
            })
            return;
        }

        addTask(task)
        setTask('')
        toast.info('Task added!', {
            autoClose: 500,
            theme: "colored",
        })
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