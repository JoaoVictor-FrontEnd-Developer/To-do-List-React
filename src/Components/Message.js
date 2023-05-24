import React, {useEffect, useState} from "react";
import styles from './Message.module.css'

function Message({ message, customClass, onClearMessage }) {
    
    const [visible, setVisible] = useState(false);
    

    useEffect(() => {
        if (!message) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 1000)
        
        return () => clearTimeout(timer)

    }, [message])

    return (
    <>
        {visible && (
            <div className={`${styles.message_container} ${styles[customClass]}`}>
            <p>{message}</p>
            </div >
        )
            }
    </>
    )
           
}

export default Message;