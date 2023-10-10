import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "John S.", salary:800, increase: false, up: true, id: 1},
                {name: "Fred A.", salary:3000, increase: true, up: false, id: 2},
                {name: "Eldar K.", salary:4000, increase: false, up: false, id: 3}
            ],
            term: '',
            activeButton: ''
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            up: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data : data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            }) 
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    btnToggle = (items, btn) => {
        if(btn === 'rise'){
            return items.filter(item => item.up);
        } else if(btn === 'bigSalary'){
            return items.filter(item => item.salary > 1000);
        } else {
            return items;
        }
    }
    
    onUbdateBtn = (activeButton) => {
        this.setState({activeButton});
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }
    
    render() {
        const {data, term, activeButton} = this.state;
        const increaseCount = this.state.data.filter(item => item.increase).length,
        totalCount = this.state.data.length;

        const visibleData = this.searchEmp(data, term);
        const buttonsData = this.btnToggle(visibleData, activeButton)
        return (
            <div className="app">
                <AppInfo
                totalCounter = {totalCount}
                increaseCounter = {increaseCount}
                />
        
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUbdateBtn={this.onUbdateBtn}/>
                </div>
                <EmployersList 
                data={buttonsData}
                onDelete={this.deleteItem}
                onToggleProp = {this.onToggleProp}
                />
                <EmployersAddForm
                onAdd ={this.addItem}
                />
            </div>
        
        )
    } 
    
}

export default App;