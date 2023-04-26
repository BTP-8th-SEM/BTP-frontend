import '../Styles/editable-question.css'
function updateArray(arr, idx, value){
    arr[idx] = value;
    console.log(arr);
    return arr;
}
function Question(props) {
    const {updateQuestion, question,nextClick,prevClick} = props;
    console.log(updateQuestion)
  return (
    <div className='question-container'>
        <div className="question-number">Question {props.idx+1}</div>
        <div className="question-maxmarks">
            {question.maxMarks} marks</div>
        <div className="question">
           {question.question}
        </div>
        {question.options && question.type === 'mcq' && <div className='options'>
            {
            question.options.map((option, idx)=><div key={Math.random()} className='question-option'>
                <input name={question.id} type="radio"  value={option} />
                {option}
            </div>)
            }
        </div>
        }
        <button className='save-prev' onClick={prevClick}>Save & Previous</button>
        <button className='save-next' onClick={nextClick}>Save & Next</button>
    </div>
  )
}

export default Question