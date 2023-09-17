import { MdDeleteSweep } from "react-icons/md"
import "../style/completed.css"
import { GoDotFill } from "react-icons/go"

export default function Completed({ completedTasks }) {
    return (
        <div className="completed">
            <div className="completed-title"> Completed </div>
            <div className="completed-tasks">
                {completedTasks.map((completedTask, index) => (
                    <div className='completed-task' key={index}>
                        <div className="completed-task-main">
                            <GoDotFill className='dot' />
                            <span className="completed-task-text"> {completedTask} </span>
                        </div>

                        <MdDeleteSweep className="delete" />
                    </div>
                ))}
            </div>
        </div>
    )
}