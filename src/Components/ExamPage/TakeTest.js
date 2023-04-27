import {useState, useEffect} from 'react'
import Question from '../Question';
import { Navigate, useNavigate, useParams } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../../Context/User/AuthContext';
import axios from 'axios';
function TakeTest() {
  const {testId} = useParams();
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate()
  const {email} = auth;
   const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [questions, setQuestions] = useState([] );
    const EmptyQuestion = {
      id: (()=>Math.random())(),
      question:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eligendi excepturi qui fuga eaque, quia sapiente odit earum amet error quam fugiat. Dicta quo quasi corporis veritatis quas, ea autem!",
      type:'MCQ',
      options:['option','option','option','option'],
      answer:5,
      maxMarks:0
    }
    useEffect(()=>{
      console.log(JSON.parse(window.localStorage.getItem('questions')))
      // window.localStorage.setItem('questions',JSON.stringify({}))
    
      let emptyquestions = {};
      emptyquestions[`test/${testId}`] = [{...EmptyQuestion}]
      emptyquestions[`test/1`] = [
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
          "question" : "What is the capital of India?",
          "topic" : "Cities",
          "type" : "MCQ"
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
          "question" : "Who is the current Prime Minister of India?",
          "topic" : "Government",
          "type" : "MCQ"
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
          "question" : "What is the national animal of India?",
          "topic" : "Animals",
          "type" : "MCQ"
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
      console.log(localquestions)
      setQuestions(localquestions);
    },[]);
    
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
            saveClick={()=>{
              axios.get(`http://localhost:8000/setResponses/${email}`)
              navigate('/')
            }
            }
        nextClick={()=>{
            if (currentQuestionIdx<questions.length-1){
                    setCurrentQuestionIdx(idx=> idx+1);
            }
            }}
        />}
        
    </div>
    <div className="question-navigator">
            {questions && questions.map((_,idx)=><div className={`question-number ${idx===currentQuestionIdx && 'active'}`} key={idx} onClick={()=>setCurrentQuestionIdx(idx)}>{idx+1}</div>)}
        </div>
    </div>
  )
}

export default TakeTest