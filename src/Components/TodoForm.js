import React, { useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import styles from './TodoForm.module.css'
import { useDispatch } from "react-redux";

import { addItem } from "../actions/listActions";
import { newItemMessage, inputError } from "../actions/messageActions";


function TodoForm() {
  
  const [text, setText] = useState();
  const dispatch = useDispatch();
  
    const Change = (e) => {
      setText(e.target.value);
    }
  
    const addItemEvent = (e) => {
        e.preventDefault();
      if (!text) {
          dispatch(inputError())
          return
      }
      dispatch(addItem(text))
      dispatch(newItemMessage())
      setText('');
  }
  
  
    return (
      <form data-aos="fade-up" className={styles.form}>
        <input className={styles.input_form} onChange={Change} type="text" value={text} placeholder="Nova tarefa..." />
        <button className={styles.input_form } onClick={addItemEvent}>Adicionar<AiOutlinePlus className={styles.plus}/></button>
      </form>
      )
    }

export default TodoForm;