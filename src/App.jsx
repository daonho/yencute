import "./app.css";
import {useState, useEffect} from "react";
import Start from "./component/Start";
import Trivia from "./component/Trivia";
import moneyPyramid from "./data";
import questions from "./questions";
import Timer from "./component/Timer";

function App() {
  const [timeStop, setTimeStop] = useState(false);
  const [questionNumber, setQuestionNumber]= useState(1);
  const [userName, setUserName] = useState(null);  
  const [stop, setStop]  = useState(false);  
  const [earned, setEearned] = useState(0);
  
useEffect(() => {
  questionNumber>1 && 
  setEearned(moneyPyramid.find((m)=> m.id === questionNumber -1).amount);
  }, [moneyPyramid, questionNumber]);

  return (

    (userName) ? ( <>
      <div className="app">
        <div className="main"> 
        {stop?( <h1 className="endText" >You earned: $ {earned}</h1>):(
          <>
          <div className="top">
          <div className="timer"><Timer
     
            timeStop={timeStop}
            setStop={setStop}
            questionNumber={questionNumber}
          ></Timer></div>
         </div>
        <div className="bottom">
        <Trivia
        setTimeStop = {setTimeStop}
        data={questions}
        setStop={setStop}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        />
        </div>
          </> )}
          
        </div>
        <div className="pyramid">
          <ul className="moneyList"> 
            {moneyPyramid.map(list=><li className={questionNumber===list.id ?"moneyListItem active" :"moneyListItem"}>
              <span className="moneyListItemNumber">{list.id}</span>
              <span className="moneyListItemAmount">$ {list.amount}</span>
            </li>)}
            
          </ul>
        </div>
      </div>
      </>): <div className="app"> 
      <Start
        setName={setUserName}
          />
        </div>
   
  );
}

export default App;
