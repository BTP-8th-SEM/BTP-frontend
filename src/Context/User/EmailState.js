import { useState } from 'react'
import EmailContext from './EmailContext'

const EmailState = (props) => {
    const s1 = {
        "email": ""
    }
    const [state, setState] = useState(s1);

    const update = (email) => {
        setState({
            "email": email
        })
    }
    return (
        <EmailContext.Provider value={{state, update}}>
            {props.children}
        </EmailContext.Provider>
    )
}

export default EmailState;