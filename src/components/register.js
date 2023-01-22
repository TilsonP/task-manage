import Check from "../assets/icons/Check";
import Close from "../assets/icons/Close";
import {useState} from "react";
import {TaskAction} from "../services/Actions/taskAction"
import { toast } from 'react-toastify';

const RegisterTask = (props) => {

    const [task, setTask] = useState({
        title: "",
        date: "",
        description: "",
    })

    function onChange(event) {
        setTask({
            ...task,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event) {
        event.preventDefault()

        const service = new TaskAction()
        let res = await service.register(task)

        if (res === 200){
            toast.success('La tarea se ha registrada', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            props.findAllTasks()
            close()
        } else {
            toast.error('El titulo y la fecha son obligatorios', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    function close() {
        props.setSeeForm(false)
    }

    return(
        <div className="fixed w-full flex justify-center">
            <div className="fixed -z-10 top-0 left-0 h-screen w-screen bg-black opacity-50 backdrop-blur"></div>
            <div className="relative flex flex-col items-center w-[500px] bg-white z-10 p-8 rounded-xl">
                <div onClick={close} className="absolute right-4 top-4 h-8 w-8 cursor-pointer hover:fill-invalid">
                    <Close/>
                </div>
                <div className="text-principal font-bold text-2xl">Agregar tarea</div>
                <div className="h-[2px] w-[300px] my-2 bg-second"/>
                <form className="text-principal w-[300px]" onChange={onChange}>
                    <div className="mt-2">Titulo</div>
                    <input name="title" required
                        className="bg-inputBackground border-none rounded-md w-[300px]" type="text"/>
                    <div className="mt-2">Fecha</div>
                    <input name="date" required
                        className="bg-inputBackground border-none rounded-md w-[300px]" type="date"/>
                    <div className="mt-2">Descripcion</div>
                    <textarea name="description"
                        className="bg-inputBackground border-none rounded-md w-[300px] text-start"/>
                    <button onClick={onSubmit} className="flex justify-center items-center hover:bg-[#D0FFC7] transition-all w-[300px] h-12 border-2 border-valid rounded-md mt-4">
                        <Check/>
                    </button>
                </form>
            </div>
        </div>
    )

}

export default RegisterTask