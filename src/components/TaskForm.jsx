import {Form, Button, Container, Alert} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {useState} from "react"

function Alerta(props){
  
  if(props.show){
    return(
      <Alert variant="danger" className="mt-2">
        No se puede agregar una tarea vacia o con el mismo nombre que una ya existente
      </Alert>

    )

  }
  return (<></>)
}





function TaskForm(){
  const [show,setShow] = useState(false)
  const dispach = useDispatch()
  const data = useSelector(state=>state)
  const addItem=(e)=>{
    e.preventDefault()
    const taskname= e.target.name.value;
    
    
    if(!data.find(t=> t.title === taskname) && taskname !== ""){
      if(show){
        setShow(false)
      }
      dispach({type:"add", content:{title:taskname, isDone:false}})
    }else{
      setShow(true)
    }

  }
    return(
      <Container className="mt-5">
        <Alerta show={show}/>
        <Form onSubmit={addItem}>
          <Form.Group className="mb-3" controlId="name">
            
            <Form.Control type="text" placeholder="Nombre de la tarea" />
    
          </Form.Group>
          <Button variant="primary" type="submit">
            Agregar tarea
          </Button>
      </Form>
      
      </Container>
    )
}



export default TaskForm;