import "../style/completed.css"
import { GoDotFill } from "react-icons/go"

export default function Completed() {
    return (
        <div className="completed">
            <div className="completed-title"> Completed </div>
            <div className="completed-tasks">
                <div className='completed-task'>
                    <GoDotFill className='dot' />
                    <span className="completed-task-text"> Go Shopping </span>
                </div>
                <div className='completed-task'>
                    <GoDotFill className='dot' />
                    <span className="completed-task-text"> Go Shopping </span>
                </div>
                <div className='completed-task'>
                    <GoDotFill className='dot' />
                    <span className="completed-task-text"> Go Shopping </span>
                </div>
                <div className='completed-task'>
                    <GoDotFill className='dot' />
                    <span className="completed-task-text"> Go Shopping </span>
                </div>
            </div>
        </div>
    )
}