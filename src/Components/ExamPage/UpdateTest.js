import {useState, useEffect} from 'react'
import EditableQuestion from '../EditableQuestion';
function UpdateTest() {
    const EmptyQuestion = {
        id: (()=>Math.random())(),
        question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eligendi excepturi qui fuga eaque, quia sapiente odit earum amet error quam fugiat. Dicta quo quasi corporis veritatis quas, ea autem!",
        type:'MCQ',
        options:['option','option','option','option'],
        answers:2,
        maxMarks:0
      }
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [questions, setQuestions] = useState([{...EmptyQuestion}]);
      useEffect(()=>{
        console.log(questions);
      },[questions])
      const question = questions[currentQuestionIdx];
  return (
    <div className='create-test'>
    <div className='question-editor'>
        <EditableQuestion key={question.id} question={question} idx={currentQuestionIdx} updateQuestion={(question)=>
        {
          setQuestions(questions=>{
            let newQuestions = [...questions];
            newQuestions[currentQuestionIdx] = question;
            console.log(newQuestions)
            return newQuestions;

          })
        }
        }
        nextClick={()=>{
            if (currentQuestionIdx<questions.length-1){
                    setCurrentQuestionIdx(idx=> idx+1);
            }else{
                setQuestions(questions=>[...questions,{...EmptyQuestion}])
                setCurrentQuestionIdx(idx=> idx+1);
            }
            }}
        />
        
    </div>
    <div className="question-navigator">
            {questions.map((_,idx)=><div className={`question-number ${idx==currentQuestionIdx && 'active'}`} key={idx} onClick={()=>setCurrentQuestionIdx(idx)}>{idx+1}</div>)}
        </div>
    </div>
  )
}

export default UpdateTest