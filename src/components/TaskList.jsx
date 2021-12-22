import {Table, Container,Button, Stack,} from "react-bootstrap"
import {FaRegTrashAlt} from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import {useState} from "react"



function TaskList(){
    const [show, setShow] = useState(false)
    const dispach = useDispatch()
    const data = useSelector(state=>state)
    return(
        <Container className="bg-light mt-5  p-4">
        <Table >
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Echo</th>
                </tr>
            </thead>
            <tbody>
            {data.filter(date => !date.isDone).map((date,index)=>
                <tr key={index}>
                    <td className="text-break"> {date.title}</td>
                    <td> <input type="checkbox" checked={date.isDone} onChange={()=>dispach({type:"toggle", content:date}) }/></td>
                    </tr>
            )}

            </tbody>
            
        </Table>
        <Stack direction="horizontal" gap={3} className="my-4">
            
            <input type="checkbox" checked={show} onChange={()=> setShow(state => !state)}/>
            <label>ocultar tareas realizadas</label>
            <Button variant="danger" className="ms-auto" onClick={()=>dispach({type:"remove"})}><FaRegTrashAlt/></Button>
        
        
        
        
        
        </Stack>
        {!show ?(<Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Echo</th>
                </tr>
            </thead>
            <tbody>
            {data.filter(date => date.isDone).map((date,index)=>
                <tr key={index}>
                    <td className="text-break"> {date.title}</td>
                    <td> <input type="checkbox" checked={date.isDone} onChange={()=>dispach({type:"toggle", content:date}) }/></td>
                    </tr>
            )}

            </tbody>
            
        </Table>): null}

        </Container>

    )
}



export default TaskList