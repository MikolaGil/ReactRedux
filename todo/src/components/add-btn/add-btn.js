import { Component } from "react";

import './add-btn.css';
export default class AddBtn extends Component{
    
    state = {
        label: ''
    }

    onLabelChange = (ev) => {
        
        this.setState({label: ev.target.value});
    }

    onSubmit = (ev) =>{
        ev.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({label: ''});
    }

    render(){
        
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}
            >
                <input type="text"
                className="form-control"
                onChange={this.onLabelChange}
                placeholder="Need to do..."
                value={this.state.label}
                />
                <button className="btn btn-primary">
                    Add Task
                </button>
            </form>
        )
    }
}