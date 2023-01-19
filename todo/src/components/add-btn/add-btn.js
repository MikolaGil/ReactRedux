import { Component } from "react";

export default class AddBtn extends Component{

    render(){
        const {onAddItem} = this.props;
        
        return (
            <button type="button"
                onClick={()=> onAddItem('ok')}
                className="btn btn-primary">
                Add Task
            </button>
        )
    }
}