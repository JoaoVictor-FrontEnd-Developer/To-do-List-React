import { useState } from "react";
import styles from './EditModal.module.css'
import { updateItem } from "../actions/listActions";
import { useDispatch } from "react-redux";
import { updateItemMessage } from "../actions/messageActions";

function EditModal({item, onShowModal}) {

    const [text, setText] = useState();
    const dispatch = useDispatch();

  
    const Change = (e) => {
      setText(e.target.value);
    }
  
    const showModal = (e) => {
        let target = e.target;
        if (target.id === 'modal') {
            onShowModal()
        }
        
    }

    const UpdatedItem = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(updateItem(item.id, text))
            dispatch(updateItemMessage())
            onShowModal()
        }
    }
  
    return (
        <div id="modal" onClick={showModal} className={styles.container_edit}>
            <div className={styles.modal_container}>
                <p>Tarefa: {item.text}</p>
                <form>
                    <input className={styles.input_edit} onChange={Change} type="text" placeholder="Novo título..."  />
                    <button className={styles.input_edit} onClick={UpdatedItem}>Atualizar</button>
                    </form>
                </div>
            </div>
      )
}

export default EditModal;