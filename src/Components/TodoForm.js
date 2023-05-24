import React, { useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import styles from './TodoForm.module.css'

function TodoForm({onAddItem, showMessageContainer, onClearMessage }) {
  
    const [text, setText] = useState();
  
    const Change = (e) => {
      setText(e.target.value);
    }
  
    const addItem = (e) => {
        e.preventDefault();
        if (!text) {
          showMessageContainer('Nenhum texto adicionado', 'remove')
          onClearMessage()
          return
      }
        onAddItem(text)
        setText('');
  }
  
  
    return (
      <form className={styles.form}>
        <input className={styles.input_form} onChange={Change} type="text" value={text} placeholder="Nova tarefa..." />
        <button className={styles.input_form } onClick={addItem}>Adicionar<AiOutlinePlus className={styles.plus}/></button>
      </form>
      )
    }

export default TodoForm;