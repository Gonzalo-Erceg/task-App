import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from "./components/TaskForm.jsx"
import TaskList from "./components/TaskList.jsx"
import Footer from "./components/Footer.jsx"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

function TaksApp(){
    const datos = useSelector(state=>state)
    const dispach = useDispatch()
    useEffect(()=>{
         let data = localStorage.getItem("task")
         if(data !== null){
            dispach({type:"add", content: JSON.parse(data)})
         }
    },[])
    useEffect(()=>{
        localStorage.setItem("task", JSON.stringify(datos))
    },[datos])
    return(
        <>
        <TaskForm />
        <TaskList/>
        <Footer/>
        </>
    )
}


export default TaksApp