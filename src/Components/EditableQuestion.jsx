import EditableLabel from './EditableLabel'
import '../Styles/editable-question.css'
function updateArray(arr, idx, value){
    arr[idx] = value;
    console.log(arr);
    return arr;
}
function EditableQuestion(props) {
    const {updateQuestion, question,nextClick} = props;
    console.log(updateQuestion)
  return (
    <div className='question-container'>
        <div className="question-number">Question {props.idx+1}</div>
        <div className="question-maxmarks">
            <EditableLabel labelClass='maxmarks-label' inputClass="maxmarks-input" initialValue={'' + question.maxMarks} value={''+question.maxMarks} save={value=>{
                console.log(value)
                updateQuestion({...question, maxMarks:Number.isNaN(+value) ? 0 : +value})
            }} /> marks</div>
        <div className="question">
            <EditableLabel labelClass='question-label' inputClass="question-input" initialValue={question.question} value={question.question} save={value=>{
                updateQuestion({...question, question:value})
            }} />
        </div>
        {question.options && question.type === 'mcq' && <div className='options'>
            {
            question.options.map((option, idx)=><div key={Math.random()} className='question-option'>
                <input name={question.id} type="radio"  value={option} />
                <EditableLabel labelClass='answer-label' value={option} inputClass='answer-input' initialValue={option} save={value=>{
                    // console.log(value)
                updateQuestion({...question, options:updateArray(question.options,idx, value)})
            }}/>
            </div>)
            }
        </div>
        }
        <button className='save-prev' onClick={nextClick}>Save & Previous</button>
        <button className='save-next' onClick={nextClick}>Save & Next</button>
    </div>
  )
}

export default EditableQuestion