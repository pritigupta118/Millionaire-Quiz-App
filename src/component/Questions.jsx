import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"
import wait from "../assets/wait.mp3"

function Questions({data, setTimeOut, setQuestionNumber, questionNumber}) {

    const [question,setQuestion] = useState(null)
    const [selectedAns,setSelectedAns] = useState(null)
    const [className,setClassName] = useState("answer")
const[letsPlay] = useSound(play);
const[corPlay] = useSound(correct);
const[worPlay] = useSound(wrong);
const[waitPlay] = useSound(wait); 

useEffect(() =>{
  letsPlay()
}, [letsPlay])

useEffect(() =>{
  waitPlay()
}, [waitPlay])



    useEffect(() => {
      setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) =>{
      setTimeout(() =>{
        callback();
      },duration);
    }

    const handleClick = (a) =>{
      setSelectedAns(a);
      setClassName("answer active");
      delay(3000,() => {
        setClassName(a.correct ? "answer correct" : "answer wrong");
      })

      delay(5000, ()=>{
        if(a.correct){
          corPlay();
          delay(4000, () =>{
            setQuestionNumber((prev) => prev + 1);
            setSelectedAns(null);
          });
        } 
        else{
          worPlay();
         delay(4000, () =>{
           setTimeOut(true);
          });
        }
       
      })
    }

  return (
   <div className="contents">
    <div className="question">{question?.question}</div>
    <div className="answers">
      {question?.answers.map((a) => (
        <div className={selectedAns === a ?  className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
      ))}
        
    </div>
   </div>
  )
}

export default Questions
