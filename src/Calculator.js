import {useState} from "react";

export const Calculator = ({passDataFromChild}) => {
    //myNum is a variable (state), setMyNum is a fun to update myNum
    const [myNum, setMyNum] = useState('')

    const inputText = (e) => {
        // setMyNum(myNum)
        // previous state => updated state
        // good to solve issue when updating state
        // setMyNum(myB => myB +1)
        (setMyNum(e.currentTarget.value))

        passDataFromChild(e.currentTarget.value)
        // passDataFromChild(setMyNum(e))
        // console.log(setMyNum(e.currentTarget.value))
    }

    return (
        <div className= "container">
            <h2>
                <p>{myNum}</p>
                <input onChange={inputText} />
                <p style={{color:'red'}}> ^ my Input (Son 2) ^</p>
            </h2>

        </div>
    )
}
