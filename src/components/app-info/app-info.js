import './app-info.css';

const AppInfo = ({increaseCounter, totalCounter}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании ТАКНЕЛЬЗЯ INC.</h1>
            <h2>Общее число сотрудников: {totalCounter} </h2>
            <h2>Премию получат: {increaseCounter} </h2>
        </div>
    )
}   

export default AppInfo;