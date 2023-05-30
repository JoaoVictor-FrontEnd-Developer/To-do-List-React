import React, {useEffect, useState} from "react";
import styles from './Message.module.css'
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../actions/messageActions";

function Message() {
    
    const message = useSelector(state => { return state.message })
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    
    
    useEffect(() => {
        if (!message) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
            dispatch(clearMessage())
        }, 1000)
        
        return () => clearTimeout(timer)

    }, [message])

    

    return (
    <>
        {visible && (
            <div className={`${styles.message_container} ${styles[message.custom]}`}>
            <p>{message.text}</p>
            </div >
        )
            }
    </>
    )
           
}

export default Message;