import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import { Button,ButtonToolbar } from 'react-bootstrap';


export class Department extends Component{
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'departamento')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    deleteDep(depid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'departamento/'+depid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {deps, depid,depname}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        //let addModalClose()=>this.setState(addModalShow:false); 
        return(
            <div>
                <button onClick={()=>this.setState({addModalShow:true})} className="btn btn-primary">Insertar Nuevo Departamento</button>
                <AddDepModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Numero Empleados</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                        <tr key={dep.idDepartamento}>
                            <td>{dep.idDepartamento}</td>
                            <td>{dep.nombre}</td>
                            <td>{dep.noEmpleados}</td>
                            <td>
                <button className="btn btn-primary" >Editar</button> {" "}
                <button className="btn btn-primary" onClick={()=>this.deleteDep(dep.idDepartamento)}>Eliminar</button>
              </td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}