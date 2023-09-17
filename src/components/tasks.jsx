import { GoDot } from 'react-icons/go'
import "../style/tasks.css"

export default function Tasks() {
    return (
        <div className="tasks">
            <div className='task'>
                <GoDot className='dot' /> Go Shopping
            </div>
            <div className='task'>
                <GoDot className='dot' /> Go Shopping
            </div>
            <div className='task'>
                <GoDot className='dot' /> Go Shopping
            </div>
            <div className='task'>
                <GoDot className='dot' /> Go Shopping
            </div>
        </div>
    )
}