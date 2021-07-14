import React,{useState ,useEffect} from "react";
import useSound from "use-sound";
import correct from "../sounds/correct.mp3";
import play from "../sounds/play.mp3";
import wait from "../sounds/wait.mp3";
import wrong from "../sounds/wrong.mp3";
export default function Trivia(
   { data,
    setStop,
    questionNumber,
    setQuestionNumber,
    setTimeStop}
){

    const [question, setQuestion] = useState(null);
    const [selectedAnwser, setSelectedAnwser] = useState(null);
    const [className, setClassName] = useState("anwser");
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);
    const [letsWait] = useSound(wait);
    
    useEffect(() => {
        letsPlay();
    
    },[letsPlay]);
    
    useEffect(() => {
        setQuestion(data[questionNumber-1]);
        
    }, [data, questionNumber]);
    const delay=(duration, callback)=>{
        setTimeout(() => {
            callback();
        }, duration);

    }
    const handleClick = (a)=>{
        setSelectedAnwser(a);
        setTimeStop(true);
        setClassName("anwser active");
        delay(3000,()=>setClassName(a.corect ? "anwser corect": "anwser wrong"));
        delay(4000,()=>{
            if(a.corect){
                correctAnswer();
                delay(3000, ()=>{
                  setQuestionNumber(pre=>pre+1);
                  setSelectedAnwser(null);
                });
                setTimeStop(false);
                
            }else{
                wrongAnswer();
                delay(3000, ()=> {
                    setStop(true);
                });
                
            }
        })
    }
   
    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="anwsers">
                {question?.anwsers.map(a=><div
                className={selectedAnwser===a?className: "anwser"}
                onClick={()=>handleClick(a)}>{a.text}</div>)}
            </div>
        </div>  

    )
}