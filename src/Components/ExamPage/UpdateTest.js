import {useState, useEffect} from 'react'
import EditableQuestion from '../EditableQuestion';
import { useParams } from 'react-router-dom';
function UpdateTest() {
    const {testId} = useParams();
    const EmptyQuestion = {
        id: (()=>Math.random())(),
        question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eligendi excepturi qui fuga eaque, quia sapiente odit earum amet error quam fugiat. Dicta quo quasi corporis veritatis quas, ea autem!",
        type:'MCQ',
        options:['option','option','option','option'],
        answer:5,
        maxMarks:0
      }
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [questions, setQuestions] = useState([{...EmptyQuestion}]);
    useEffect(()=>{
      console.log(JSON.parse(window.localStorage.getItem('questions')))
      // window.localStorage.setItem('questions',JSON.stringify({}))
      let emptyquestions = {};
      emptyquestions[`test/${testId}`] = [{...EmptyQuestion}]
      emptyquestions[`test/2`] = [
          {
            "id" : 1,
            "options": [
              "Mumbai",
              "Kolkata",
              "New Delhi",
              "Chennai"
            ],
            "answer": 2,
            "testId" : 1,
            "maxMarks" : 5,
            "body" : "What is the capital of India?",
            "topic" : "Cities",
            "answerType" : "MCQ"
          },
          {
            "id" : 2,
            "options": [
              "Narendra Modi",
              "Amit Shah",
              "Manmohan Singh",
              "Rahul Gandhi"
            ],
            "answer": 0,
            "testId" : 1,
            "maxMarks" : 5,
            "body" : "Who is the current Prime Minister of India?",
            "topic" : "Government",
            "answerType" : "MCQ"
          },
          {
            "id" : 3,
            "options": [
              "Lion",
              "Tiger",
              "Elephant",
              "Panda"
            ],
            "testId" : 1,
            "maxMarks" : 5,
            "body" : "What is the national animal of India?",
            "topic" : "Animals",
            "answerType" : "MCQ"
          }
        
      ]
      let localtotalquestions = (JSON.parse(window.localStorage.getItem('questions')))
      let localquestions;
      console.log(localtotalquestions)
      if(localtotalquestions===null){
        window.localStorage.setItem('questions',JSON.stringify(emptyquestions))
        localquestions = emptyquestions[`test/${testId}`];
      }else if(localtotalquestions[`test/${testId}`]===undefined){
        localquestions = [{...EmptyQuestion}]
      }else{
        localquestions = localtotalquestions[`test/${testId}`]
      }
      setQuestions(localquestions);
    },[]);
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
        saveClick={()=>{
          const key = `test/${testId}`;
          console.log('save',key)
          const localquestions = JSON.parse(window.localStorage.getItem('questions'))
          localquestions[`test/${testId}`] = questions
          window.localStorage.setItem('questions',JSON.stringify(localquestions))
        }}
        nextClick={()=>{
            if (currentQuestionIdx<questions.length-1){
                    setCurrentQuestionIdx(idx=> idx+1);
            }else{
                setQuestions(questions=>[...questions,{...EmptyQuestion}])
                setCurrentQuestionIdx(idx=> idx+1);
            }
            }}
            prevClick={()=>{
              if (currentQuestionIdx>0){
                      setCurrentQuestionIdx(idx=> idx-1);
              }
              }}
        />
        
    </div>
    <div className="question-navigator">
            {questions.map((_,idx)=><div className={`question-number ${idx===currentQuestionIdx && 'active'}`} key={idx} onClick={()=>setCurrentQuestionIdx(idx)}>{idx+1}</div>)}
        </div>
    </div>
  )
}

export default UpdateTest