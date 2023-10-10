import { Component } from 'react';
import './app-filter.css';


class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeButton: 'all'
        }
    }

    buttonToggle = (e) => {
        const activeButton = e.target.getAttribute('data-button');
        this.setState({activeButton})
        this.props.onUbdateBtn(activeButton);
    }
    
    
    
    render() {
        return(
            <div className="btn-group">
                <button
                    className={("btn" )+ (this.state.activeButton === ('all'||'') ? " btn-light" : " btn-outline-light")} 
                    type="button"
                    data-button="all"
                    onClick={this.buttonToggle}
                >
                    Все сотрудники
                </button>
                <button
                    className={("btn" )+ (this.state.activeButton === "rise" ? " btn-light" : " btn-outline-light")}
                    type="button"
                    data-button="rise"
                    onClick={this.buttonToggle}
                >
                    Сотрудники на повышение
                </button>
                <button
                    className={("btn" )+ (this.state.activeButton === "bigSalary" ? " btn-light" : " btn-outline-light")}
                    type="button"
                    data-button="bigSalary"
                    onClick={this.buttonToggle}
                >
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;