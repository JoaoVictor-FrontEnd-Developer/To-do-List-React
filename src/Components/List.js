import { BsCircle, BsCircleFill, BsPencil, BsFillTrashFill } from 'react-icons/bs'
import styles from './List.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { removeItem, doneItem, changeAnimation } from '../actions/listActions'
import { deletedMessage } from '../actions/messageActions'
import { useEffect} from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css'

function List({ onShowModal }) {

  const items = useSelector(state => { return state.list }) 

 
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.refresh();

  }, [items])


  return (
    <>
      {items.length === 0 && <p data-aos="fade-up">Nenhuma tarefa adicionada</p>}

    <ul >
      
        {        
          items.map((item) => <li data-aos={item.animation ? `animation-in` : 'animation-out'}  className={item.done ? `${styles.done}` : ""} key={item.id}>
            <div className={styles.description}>
            {!item.done ?
                <BsCircle onClick={() => dispatch(doneItem(item.id))} className={styles.button} /> :
                <BsCircleFill onClick={() => dispatch(doneItem(item.id))} className={styles.button} />}
              {item.text}
              </div>
              
            <div>
              <BsPencil onClick={() => onShowModal(item)} className={styles.button}/>
              <BsFillTrashFill onClick={() => {
                dispatch(changeAnimation(item.id))
                setTimeout(() => {
                  dispatch(removeItem(item.id))
                }, 500)
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