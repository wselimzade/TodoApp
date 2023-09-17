import { GoDot } from 'react-icons/go'
import "../style/tasks.css"

export default function Tasks() {
    return (
        <div className="tasks">
            <div className='task'>
                <GoDot className='dot' />
                <span className='task-text'> Go Shopping </span>
            </div>
            <div className='task'>
                <GoDot className='dot' />
                <span className='task-text'> Go Shopping </span>
            </div>
            <div className='task'>
                <GoDot className='dot' />
                <span className='task-text'> Go Shopping </span>
            </div>
            <div className='task'>
                <GoDot className='dot' />
                <span className='task-text'> Go Shopping </span>
            </div>
        </div>
    )
}