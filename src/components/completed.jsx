import { MdDeleteSweep } from "react-icons/md"
import "../style/completed.css"
import { GoDotFill } from "react-icons/go"

export default function Completed({ completedTasks, returnTask, deleteCompletedTask }) {
    return (
        <div className="completed">
            {completedTasks.map((completedTask, index) => (
                <>
                    <div className="completed-title"> Completed </div>
                    <div className="completed-tasks">

                        <div className='completed-task' key={index}>
                            <div className="completed-task-main" onClick={() => returnTask(completedTask, index)}>
                                <GoDotFill className='dot' />
                                <span className="completed-task-text"> {completedTask} </span>
                            </div>

                            <MdDeleteSweep className="delete" onClick={() => deleteCompletedTask(index)} />
                        </div>

                    </div>
                </>
            ))}
        </div>
    )
}