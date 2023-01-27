import { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{
    
    state = {
        term: ''
    }

    onSearch = (ev) =>{
        const term = ev.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }

    render(){
        return (<input className='search-input form-control' 
        onChange={this.onSearch}
        placeholder='Search...'
        value={this.state.term}/>);
    }
}
