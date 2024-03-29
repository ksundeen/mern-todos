import React, { Component } from 'react';
import axios from 'axios';

export default class AddTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: ''
        }
    }

    refreshPage() {
        window.location.reload(false);
    }

    onTaskChange(e) {
        this.setState({
            task: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const todoObject = {
            task: this.state.task
        };
        axios.post('http://localhost:5050/api/create-todo', todoObject)
        .then((res) => {
            console.log(res.data)
        });

        this.setState({task: ''})
        this.refreshPage()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="mb-2"><strong>Enter Task Description:</strong></label>
                        <input type="text" className="form-control" value={this.state.task} onChange={this.onTaskChange} />
                    </div>
                    <div className="form-group row">
                        <div clasclassNames="col-xs-2">
                            <label ><strong>Enter Latitude:</strong></label>
                            <input type="text" className="form-control" value={this.state.task} onChange={this.onTaskChange} />
                        </div>
                        <div className="col-xs-2">
                            <label ><strong>Enter Longitude:</strong></label>
                            <input type="text" className="form-control" value={this.state.task} onChange={this.onTaskChange} />
                        </div>
                    </div>

                    <div className="mt-3">
                        <input type="submit" value="+ Create" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};