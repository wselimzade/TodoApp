import '../style/addBar.css'
import { BiSolidAddToQueue } from 'react-icons/bi'

export default function AddBar() {
    return (
        <div className="addBar">
            <input type='text' className='addInput' placeholder='Add new task' />
            <BiSolidAddToQueue className='add-icon' />
        </div>
    )
}