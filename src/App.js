import logo from './logo.svg';
import './App.css';
//destruction style
import {Weather, Weather2} from "./Weather";
import {Calculator} from "./Calculator";
import {useState} from "react";



function App() {
  // 定义常量之类的在return上面
  const name = 'JC'
  const myPStyle = {color: 'green', fontsize: '30px'}


  //child to dad
    const [myinput, setMyInput] = useState('')
    const setInputFun = (e) => {
        setMyInput('output: '+e)
    }
  // return can only write 1 div
  return (
    <div className="App">

        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1 className="myH1">
          {/*Hello, {name} */}
            Parent:
            <br/>
            {myinput} <br/>
            ...........................
        </h1>
        <p style={myPStyle}>

        </p>
        {/*进口 Weather or weather 2, closed by /*/}
        {/*传number 到 calculator里面去*/}
        <Weather dataFromApp = {myinput}/>
        {/*<Weather2 />*/}
        <Calculator passDataFromChild = {setInputFun} />
    </div>
  );
}

// export default, import no braces
export default App;
