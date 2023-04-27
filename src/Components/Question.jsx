import '../Styles/editable-question.css'
function updateArray(arr, idx, value){
    arr[idx] = value;
    console.log(arr);
    return arr;
}
function Question(props) {
    const {updateQuestion, question,nextClick,prevClick,saveClick} = props;
    console.log(updateQuestion)
  return (
    <div className='question-container'>
        <div className="question-number">Question {props.idx+1}</div>
        <div className="question-maxmarks">
        {'' + question.maxMarks} marks</div>
        <div className="question">
        {question.question}
        </div>
        {question.options && question.type === 'MCQ' && <div className='options'>
            {
            question.options.map((option, idx)=><div key={Math.random()} className={`question-option ${(idx===question?.selectedIdx )&&'active' }`} onClick={(e)=>{
                if(!e.target.classList.contains('answer-label')){
                    updateQuestion({...question, selectedIdx:idx})
                }
            }}>
                <div className="radio"></div>
                {option}
            </div>)
            }
        </div>
        }
        <button className='save-prev' onClick={prevClick}>Previous</button>
        <button className='save' onClick={saveClick}>Save</button>
        <button className='save-next' onClick={nextClick}>Next</button>
    </div>
  )
}

export default Question