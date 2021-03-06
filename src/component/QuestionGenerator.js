import React, {useState, useEffect} from 'react'

const QuestionGenerator = () => {
    const [firstNum, setFirstNum] = useState(GenerateNumber(1,10));
    const [secondNum, setSecondNum] = useState(GenerateNumber(1,10));
    const [answer, setAnswer] = useState(0);
    const [sysInfo, setSysInfo] = useState("");

    const handleAnswerSubmit = (event) =>{
        event.preventDefault();
        if(firstNum+secondNum==answer){
            setSysInfo("Correct!");
        } else {
            setSysInfo("Incorrect Try again!");
        }
    }

    const handleAnswerOnChange = (event)=>{
        setAnswer(event.target.value);
    }

    const handleRefreshOnclick = ()=>{
      let tmpFirst = GenerateNumber(1,10);
      let tmpSecond = GenerateNumber(1,10)
      setFirstNum(tmpFirst);
      setSecondNum(tmpSecond);
      setAnswer(0);
      setSysInfo("");
    }



    return (
        <div>
            <h1>{firstNum} + {secondNum} =</h1>
            <form onSubmit={handleAnswerSubmit}>
            <input type="number" value={answer} placeholder="0" onChange={handleAnswerOnChange}/>
            <h1>{sysInfo}</h1>
            </form>

            <button onClick={handleRefreshOnclick}>Next Question</button>

        </div>
    )
}


const GenerateNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}

export default QuestionGenerator
