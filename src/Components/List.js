import { BsCircle, BsCircleFill, BsPencil, BsFillTrashFill } from 'react-icons/bs'
import styles from './List.module.css'

function List({ items, onDeleteItem, onDoneItem, onShowModal }) {

  return (
  
      <ul>
        {        
          items.map((item) => <li className={item.done ? `${styles.done}` : ""} key={item.id}>
            <div className={styles.description}>
            {!item.done ?
                <BsCircle onClick={() => onDoneItem(item)} className={styles.button} /> :
                <BsCircleFill onClick={() => onDoneItem(item)} className={styles.button} />}
              {item.text}
              </div>
              
            <div>
              <BsPencil onClick={() => onShowModal(item)} className={styles.button}/>
              <BsFillTrashFill onClick={() => { onDeleteItem(item) }} className={styles.button}/>
            </div>
          
          </li>)
          }
         
      </ul >


  
    )
}

export default List;