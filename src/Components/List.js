import { BsCircle, BsCircleFill, BsPencil, BsFillTrashFill } from 'react-icons/bs'
import styles from './List.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { removeItem, doneItem } from '../actions/listActions'
import { deletedMessage } from '../actions/messageActions'

function List({ onShowModal }) {

  const items = useSelector(state => { return state.list }) 
  const dispatch = useDispatch();

  return (
    <>
      {items.length === 0 && <p>Nenhuma tarefa adicionada</p>}

    <ul>
      
        {        
          items.map((item) => <li className={item.done ? `${styles.done}` : ""} key={item.id}>
            <div className={styles.description}>
            {!item.done ?
                <BsCircle onClick={() => dispatch(doneItem(item.id))} className={styles.button} /> :
                <BsCircleFill onClick={() => dispatch(doneItem(item.id))} className={styles.button} />}
              {item.text}
              </div>
              
            <div>
              <BsPencil onClick={() => onShowModal(item)} className={styles.button}/>
              <BsFillTrashFill onClick={() => {
                dispatch(removeItem(item.id))
                dispatch(deletedMessage())
              }} className={styles.button} />
            </div>
          
          </li>)
          }
         
      </ul >


  </>
    )
}

export default List;