import './Weather.css'

// if export, need key word export: 2 ways: 1. add export before each fun, 2. add export in the end.
const Weather = (props) => {
    return (
        <div className= "container">
            <h2>
                <p style={{color:'orange'}}>My Input from App (Son 1)</p>
                <p>{props.dataFromApp}</p>
            </h2>
        </div>
    )
}

const Weather2 = () => {
    return (
        <div className= "container">
            <h2>
                Weather report
            </h2>
        </div>
    )
}

export {Weather, Weather2}