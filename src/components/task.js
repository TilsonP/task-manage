import TaskIcon from "../assets/icons/Task";
import Delete from "../assets/icons/Delete";
import {TaskAction} from "../services/Actions/taskAction";
import 'moment/locale/es'
import {toast} from "react-toastify";

const Task = (props) => {

    const servicesTask = new TaskAction()

    const moment = require('moment');

    async function deleteTask() {
        const res = await servicesTask.delete(props.task.title)

        if (res === 200){
            toast.info('La tarea a sido eliminada', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }

        props.findAllTasks()
    }

    return(
        <div className="flex justify-around" key={props.task}>
            <div className="flex flex-row bg-white w-[85%] h-36 rounded-xl py-6 mb-5 pr-10 shadow-general">
                <div className="flex justify-center items-center w-[20%] pl-8 mr-6">
                    <TaskIcon/>
                </div>
                <div className="w-full">
                    <div className="flex flex-row justify-between w-full text-principal">
                        <div className="text-base">{props.task.title}</div>
                        <div className="text-xl font-semibold">{moment(props.task.date).format('LL')}</div>
                    </div>
                    <div className="h-[2px] w-full bg-second" />
                    <div className="text-principal text-sm">
                        {props.task.description ?
                            props.task.description :
                            "No hay descripcion o detalles para esta tarea"}
                    </div>
                </div>
            </div>
            <div onClick={deleteTask} className="flex justify-center items-center px-5 cursor-pointer bg-white w-16 hover:bg-invalidSecond transition-all rounded-xl py-6 mb-5 shadow-general">
                <Delete name={props.task.title}/>
            </div>
        </div>
    )

}

export default Task