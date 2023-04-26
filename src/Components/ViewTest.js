import {useState, useEffect} from 'react'
import Question from './Question';
function TakeTest() {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [questions, setQuestions] = useState(
      [
        {
            "id": 0.05204342462500566,
            "question": "question 1\n",
            "type": "mcq",
            "options": [
                "option",
                "option2",
                "option",
                "option"
            ],
            "answers": [],
            "maxMarks": 0
        },
        {
            "id": 0.9318692907735033,
            "question": "question 2",
            "type": "mcq",
            "options": [
                "option1\n",
                "option",
                "option",
                "option"
            ],
            "answers": [],
            "maxMarks": 0
        }
    ]
    );
      useEffect(()=>{
        console.log(questions);
      },[questions])
      const question = questions[currentQuestionIdx];
  return (
    <div className='create-test'>
    <div className='question-editor'>
        {question && <Question key={question.id} question={question} idx={currentQuestionIdx} updateQuestion={(question)=>
        {
          setQuestions(questions=>{
            let newQuestions = [...questions];
            newQuestions[currentQuestionIdx] = question;
            console.log(newQuestions)
            return newQuestions;

          })
        }
        }
        prevClick={()=>{
            if (currentQuestionIdx>0){
                    setCurrentQuestionIdx(idx=> idx-1);
            }
            }}
        nextClick={()=>{
            if (currentQuestionIdx<questions.length-1){
                    setCurrentQuestionIdx(idx=> idx+1);
            }
            }}
        />}
        
    </div>
    <div className="question-navigator">
            {questions && questions.map((_,idx)=><div className={`question-number ${idx==currentQuestionIdx && 'active'}`} key={idx} onClick={()=>setCurrentQuestionIdx(idx)}>{idx+1}</div>)}
        </div>
    </div>
  )
}

export default TakeTest