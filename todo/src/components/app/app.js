import React, { Component }from 'react';

import Header from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import SearchPanel from '../search-panel/search-panel';
import Todo from '../todo-list/todo-list';
import AddBtn from '../add-btn/add-btn';
import './app.css';

export default class App extends Component{
    
    state = {
        data: [
            this.createTodoItem('Task 111'),
            this.createTodoItem('Second'),
            this.createTodoItem('tHIRD')
        ],
        term: ''
    }

    createTodoItem(label){
        return {
            id: Math.round(Math.random()* 100),
            label: label,
            important: false,
            done: false
        }
    }
    deleteItem = (id)=>{
        this.setState(({data})=>{
            const idx = data.findIndex(el => el.id === id);
            const before = data.slice(0, idx);
            const after = data.slice(idx+1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem = (label) =>{
        const obj = this.createTodoItem(label)

        this.setState(({data}) => {
            return {
                data: [...data, obj]
            }
        });
    }

    toggleImportant=(id) =>{
        this.setState(({data})=>{
            return {
                data: this.toggleProp(data, id, 'important')
            }
        });
    };

    toggleProp = (arr, id, propName) =>{
        const idx = arr.findIndex(el => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        const before = arr.slice(0, idx);
        const after = arr.slice(idx+1);
        const newArr = [...before, newItem, ...after];
        
        return newArr;
    }

    toggleDone= (id) =>{
        this.setState(({data})=>{
            return {
                data: this.toggleProp(data, id, 'done')
            }
        });
    }

    onSearch(items, term){
        
        if(!term.length){
            return items;
        }

        return items.filter((el) =>{
            return el.label.toLowerCase().includes(term);
        });
    }

    onSearchChange = (val) =>{
        this.setState({term: val});
    }

    render(){
        const {data, term} = this.state;
        const visibleItems = this.onSearch(data, term);

        const doneCount = data.filter(el =>el.done).length;
        const toDoCount = data.length - doneCount;

        return (
            <div className='todo-app w-50'>
                <Header todo={toDoCount} done={doneCount}/>
                <div className='top-panel d-flex'>
                  <SearchPanel onSearchChange={this.onSearchChange}/>
                  <ItemStatusFilter/>
                </div>
                <Todo 
                todos={visibleItems} 
                onDeleted={this.deleteItem}
                onToggleImportant={this.toggleImportant}
                onToggleDone={this.toggleDone}
                />
                <AddBtn onAddItem={this.addItem}/>
            </div>
        );
    }
}