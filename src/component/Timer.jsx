import {useState, useEffect} from 'react';



export default function Timer({setStop, questionNumber, timeStop}) {
    const [timer, setTimer] = useState(30);
    useEffect(()=>{
        if(timer === 0) return setStop(true);
        const interval = setInterval(() => {
        if(timeStop) { clearInterval(interval);}
        else{
            setTimer(pre => pre - 1);
        }
            
        }, 1000);
        return () => clearInterval(interval);
    });
    useEffect(() => {
        setTimer(30);
      }, [questionNumber]);
    return timer;
} 
