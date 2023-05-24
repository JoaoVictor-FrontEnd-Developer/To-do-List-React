import { useState } from "react";
import styles from './EditModal.module.css'

function EditModal({item, onUpdateItem, onShowModal}) {

    const [text, setText] = useState();

  
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
            onUpdateItem(text)
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