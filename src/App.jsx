import { useEffect, useMemo, useState } from 'react'
import Questions from './component/Questions';
import Timer from './component/Timer';
import Start from './component/Start';

import './style/App.scss'
import './style/Questions.scss'
import './style/start.scss'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("$0");
  const [username, setUsername] = useState(null);


  const data = [
    {
      id: 1,
      question: "Which of the following keywords is used to define a variable in Javascript?",
      answers: [
        {
          text: "Var",
          correct: false,
        },
        {
          text: "Let",
          correct: false,
        },
        {
          text: "Both",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following methods is used to access HTML elements using Javascript?",
      answers: [
        {
          text: "getElementById",
          correct: false,
        },
        {
          text: "getElementsByClassName",
          correct: false,
        },
        {
          text: "Both",
          correct: true,
        },
        {
          text: "None of th above",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Where is Client-side JavaScript code is embedded within HTML documents?",
      answers: [
        {
          text: " A URL that uses the special javascript:code",
          correct:false,
        },
        {
          text: "A URL that uses the special javascript:protocol",
          correct: true,
        },
        {
          text: "A URL that uses the special javascript:encoding",
          correct: false,
        },
        {
          text: "A URL that uses the special javascript:stack",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which type of JavaScript language is?",
      answers: [
        {
          text: "Object-Oriented",
          correct:true,
        },
        {
          text: "Object-Based",
          correct: false,
        },
        {
          text: "Assembly-language",
          correct: false,
        },
        {
          text: "High-level",
          correct: false,
        },
      ],
    },
  ]
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1.000" },
      { id: 6, amount: "$ 2.000" },
      { id: 7, amount: "$ 4.000" },
      { id: 8, amount: "$ 8.000" },
      { id: 9, amount: "$ 16.000" },
      { id: 10, amount: "$ 32.000" },
      { id: 11, amount: "$ 64.000" },
      { id: 12, amount: "$ 125.000" },
      { id: 13, amount: "$ 250.000" },
      { id: 14, amount: "$ 500.000" },
      { id: 15, amount: "$ 1.000.000" },
    ].reverse(),
    []);


  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      {!username ? (<Start setUsername={setUsername}/>) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer"><Timer setTimeOut={setTimeOut} questionNumber={questionNumber} /></div>
                </div>
                <div className="bottom">
                  <Questions
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyItemNum">{m.id}</span>
                  <span className="moneyItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )

      }

    </div>
  );
}
export default App
