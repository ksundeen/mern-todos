import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

export default class ViewTodoComponent extends Component {
    
    // class objects
    taskObj = {
        _id: '',
        task: ''
    }

    // local state
    state = {
        modalIsOpen: false,
        secondModalIsOpen: false
      };
    
      openModal = (data) => {
        this.setState({ 
            modalIsOpen: true 
        });

        this.setTodoVal(data);
      };

      setTodoVal = (data) => {
         this.taskObj = {
            _id: data._id,
            task: data.task
        }
      }
    
      closeModal = () => {
        this.setState({ modalIsOpen: false });
      };
    
      openSecondModal = () => {
        this.setState({ secondModalIsOpen: true });
      };
    
      closeSecondModal = () => {
        this.setState({ secondModalIsOpen: false });
      };
      
      

    constructor(props) {
        super(props)

        this.state = {
            todos: []
        };

        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
      this.getTodos();
    }

    getTodos() {
        const headers = { 'Content-Type': 'application/json' }

        const endpoint = 'http://localhost:5050/api';

        axios.get(endpoint, { headers })
        .then(response => {
            this.setState({
                todos: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })        
    }

    deleteTodo(id) {
        axios.delete('http://localhost:5050/api/delete-todo/' + id)
            .then((res) => {
                alert('Todo deleted!')
                this.getTodos();
            }).catch((error) => {
                console.log(error)
           })
    }

    
    onTaskChange(e) {
        this.taskObj = {
            _id: this.taskObj._id,
            task: e.target.value
        }        

        var e = new Event('input', { bubbles: true });
        this.myinput.dispatchEvent(e);
    } 
    

    
    refreshPage() {
        window.location.reload(false);
    }

    onUpdate = () => {
        axios.put('http://localhost:5050/api/update-todo/' + this.taskObj._id, this.taskObj)
        .then((res) => {
          console.log('Todo updated' + res)
          this.refreshPage()
        }).catch((error) => {
          console.log(error)
        })
    }
  


    render() {
        const { todos } = this.state;
        return (
            <>
                <ul className="list-group mt-3">
                    {todos.map((data) => (
                        <li key={data._id} className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                               <div className="fw-bold">{data.task}</div>
                            </div>

                            <span className="badge bg-success rounded-pill" onClick={this.openModal.bind(this, data)}>Update</span> 
                            &nbsp;
                            <span className="badge bg-danger rounded-pill" onClick={this.deleteTodo.bind(this, data._id)}>Delete</span>
                        </li>
                    ))}
                </ul>

                {/* Edit */}
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} ariaHideApp={false}>
                    
                    <div className="container">
                            <div className="form-group">
                                <label className="mb-2"><strong>Update Task</strong></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    defaultValue={this.taskObj.task} 
                                    onChange={(e) => {this.onTaskChange(e)}} ref={(input)=> this.myinput = input}
                                />
                            </div>

                            <div className="d-grid mt-3 gap-2">
                                <input type="button" onClick={this.onUpdate} value="Update" className="btn btn-success"/>
                                <button onClick={this.closeModal} className="btn btn-warning">close</button>
                            </div>
                    </div>
                </Modal>                
            </>    
        )
    }

}