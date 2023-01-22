import Add from "../assets/icons/Add";
import FilterTask from "../components/filterTask"
import Task from "../components/task";
import RegisterTask from "../components/register";
import {useEffect, useState} from "react";
import {TaskAction} from "../services/Actions/taskAction";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const servicesTask = new TaskAction()

    const [seeForm, setSeeForm] = useState(false)

    const [tasksList, setTaskList] = useState([])

    const [date, setDate] = useState("")

    async function findTasks() {

        if (date === ""){
            const res = await servicesTask.findAll()
            setTaskList(Object(res))
        } else {
            const res = await servicesTask.findByDate(date)
            setTaskList(Object(res))
        }
    }

    useEffect( () => {
        findTasks().then(() => null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect( () => {
        findTasks().then(() => null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])


    return(
        <div className="bg-background h-full min-h-screen flex flex-col items-center p-10">
            <div className="flex flex-row justify-around w-full max-w-2xl">
                <div className="flex justify-center items-center shadow-general rounded-xl bg-white h-16 w-[85%]">
                    <div className="font-bold text-principal text-2xl">Mis tareas</div>
                </div>
                <div onClick={() => setSeeForm(!seeForm)}
                    className="flex justify-center items-center shadow-general rounded-xl bg-white h-16 w-16 p-3 cursor-pointer  hover:bg-[#D0FFC7] transition-all">
                    <Add/>
                </div>
            </div>
            <FilterTask setDate={setDate}/>
            <div className="w-full max-w-2xl">
                {
                    tasksList.map(task => {
                        return(
                            <Task key={task.date} task={task} findAllTasks={findTasks}/>
                        )
                    })
                }
            </div>
            {
                seeForm && <RegisterTask setSeeForm={setSeeForm} findAllTasks={findTasks}/>
            }
            <ToastContainer />
        </div>
    )
  
}

export default Home