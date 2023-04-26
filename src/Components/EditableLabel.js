import React, { useState, useEffect, useRef } from 'react';
import render from 'react-dom';
import PropTypes from 'prop-types';

const EditableLabel = ({
	initialValue,
	save,
	disableKeys,
	inputClass,
	labelClass,
	inputName,
	inputId,
}) => {
	const [view, setView] = useState('label');
	const [value, setValue] = useState(initialValue);
	const [previous, setPrevious] = useState(initialValue);
	const textInput = useRef(null);

	useEffect(() => {
		if (view === 'text') {
			textInput.current.focus();
		}
	}, [view, textInput]);

	const keyUp = (e) => {
		if (disableKeys === true) {
			return;
		}

		if (e.key === 'Escape') {
			setValue(previous);
			setView('label');
		} else if (e.key === 'Enter') {
			setValue(e.target.value);
			setPrevious(e.target.value);
			setView('label');

			save(e.target.value);
		}
	};

	const renderLabel = () => {
		return (
			<div
				className={labelClass !== undefined ? labelClass : ''}
				onClick={(e) => {
					setView('text');
				}}
			>
				{value}
			</div>
		);
	};

	const renderInput = () => {
		return (
			<>
				<textarea
					type='text'
					value={value}
					ref={textInput}
					className={inputClass !== undefined ? inputClass : ''}
					id={inputId !== undefined ? inputId : ''}
					name={inputName !== undefined ? inputName : ''}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					onBlur={(e) => {
						setView('label');
						setPrevious(e.target.value);

						save(e.target.value);
					}}
					onKeyUp={keyUp}
				/>
			</>
		);
	};

	return view === 'label' ? renderLabel() : renderInput();
};

EditableLabel.propTypes = {
	initialValue: PropTypes.string.isRequired,
	save: PropTypes.func.isRequired,
	labelClass: PropTypes.string,
	inputClass: PropTypes.string,
	inputName: PropTypes.string,
	inputId: PropTypes.string,
	disableKeys: PropTypes.bool,
};

export default EditableLabel;
// import React, { useState } from "react";
// import PropTypes from "prop-types";

// const ENTER_KEY_CODE = 13;
// const DEFAULT_LABEL_PLACEHOLDER = "Click To Edit";

// const EditableLabel = props => {
//   const [isEditing, setEditing] = useState(false);
//   const [value, setValue] = useState(props.value);
//   const [inputRef, setInputRef] = useState(null);
//   const { 
//     inputClassName, 
//     labelClassName, 
//     labelFontSize, 
//     labelFontWeight, 
//     labelPlaceHolder, 
    
//     inputFontSize,
//     inputMaxLength,
//     inputPlaceHolder,
//     inputTabIndex,
//     inputWidth,
//     inputHeight,
//     inputFontWeight,
//     inputBorderWidth,  } = props;

//   const isTextValueValid = () =>
//     typeof value !== "undefined" && value.trim().length > 0;

//   const handleFocus = () => {
//     if (isEditing) {
//       if (typeof props.onFocusOut === "function") {
//         props.onFocusOut(value);
//       }
//     } else {
//       if (typeof props.onFocus === "function") {
//         props.onFocus(value);
//       }
//     }

//     if (isTextValueValid()) {
//       setEditing(prev => !prev);
//     } else {
//       if (isEditing) {
//         setEditing(props.emptyEdit || false);
//       } else {
//         setEditing(true);
//       }
//     }
//   };

//   const handleChange = e => {
//     setValue(inputRef.value);
//     props?.onChange(e);
//   };
//   const handleInput = e => {
//     e.target.size = e.target.value.length
//   };
//   const handleKeyDown = e => {
//     if (e.keyCode === ENTER_KEY_CODE) {
//       handleEnterKey();
//     }
//   };

//   const handleEnterKey = () => {
//     handleFocus();
//   };

//   if (isEditing) {
//     return (
//       <>
//         <textarea
//           ref={setInputRef}
//           value={value}
//           onChange={handleChange}
//           onInput={handleInput}
//           onBlur={handleFocus}
//           onKeyDown={handleKeyDown}
//           className={inputClassName}
//           style={{
//             fontSize: inputFontSize,
//             maxLength: inputMaxLength,
//             placeHolder: inputPlaceHolder,
//             tabIndex: inputTabIndex,
//             width: inputWidth,
//             height: inputHeight,
//             fontWeight: inputFontWeight,
//             borderWidth: inputBorderWidth,
//           }}
//           autoFocus
//         />
//       </>
//     );
//   }

//   const labelText = isTextValueValid()
//     ? value
//     : props.labelPlaceHolder || DEFAULT_LABEL_PLACEHOLDER;

//   return (
//     <>
//       <div onClick={handleFocus} className={labelClassName} style={{
//         fontSize: labelFontSize,
//         fontWeight: labelFontWeight,
//         placeHolder: labelPlaceHolder
//       }}>
//         {labelText}
//       </div>
//     </>
//   );
// };

// EditableLabel.propTypes = {
//   value: PropTypes.string.isRequired,
//   isEditing: PropTypes.bool,
//   emptyEdit: PropTypes.bool,

//   labelClassName: PropTypes.string,
//   labelFontSize: PropTypes.string,
//   labelFontWeight: PropTypes.string,
//   labelPlaceHolder: PropTypes.string,

//   inputMaxLength: PropTypes.number,
//   inputPlaceHolder: PropTypes.string,
//   inputTabIndex: PropTypes.number,
//   inputWidth: PropTypes.string,
//   inputHeight: PropTypes.string,
//   inputFontSize: PropTypes.string,
//   inputFontWeight: PropTypes.string,
//   inputClassName: PropTypes.string,
//   inputBorderWidth: PropTypes.string,

//   onChange: PropTypes.func,
//   onFocus: PropTypes.func,
//   onFocusOut: PropTypes.func
// };

// export default EditableLabel;