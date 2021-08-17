import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'departamento',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                idDepartamento:null,
                nombre:event.target.nombre.value,
                noEmpleado:event.target.noEmpleado.value,
                idGerente:event.target.idGerente.value
                
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Department
        </Modal.Title>
    </Modal.Header>
    

        <Form onSubmit={this.handleSubmit}>
        <Modal.Body>
        <div className="form-group">
            <label>Nombre: </label>
            <br />
            <input type="text" className="form-control" name="nombre" />
            <br/>
            <label>Numero de empleados: </label>
            <br />
            <input type="text" className="form-control"name="noEmpleados" />
            <br/>
            <label>IdGerente: </label>
            <br />
            <input type="text" className="form-control" name="idGerente"/>
            <br/>
          </div>
         
             </Modal.Body>
    
        <Modal.Footer>
          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                                Add Department
                        </Button>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>


        </Form>
        </Modal>

            </div>
        )
    }

}