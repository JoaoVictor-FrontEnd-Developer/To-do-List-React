import React, {useEffect, useState} from "react";
import styles from './App.module.css'


import TodoForm from './Components/TodoForm'
import Item from './Components/Item'
import List from './Components/List'
import EditModal from './Components/EditModal'
import Message from "./Components/Message";


function App() {

  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState('')
  const [customClass, setCustomClass] = useState('')
  const [item, setItem] = useState()

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem('saved_items'))

    if (savedItems) {
      setItems(savedItems)
    }


  }, [])

  useEffect(() => {
    localStorage.setItem('saved_items', JSON.stringify(items))

  
  }, [items])

  function onUpdateItem(text) {
    let updateItems = items.map(it => {
      if (it.id === item.id) {
        it.text = text;
      }

      return it;
    })

    setItems(updateItems)
    setShowModal(!showModal)
    showMessageContainer('Tarefa Atualizada', 'add')
    onClearMessage();
  }

  function onShowModal(item) {
    setItem(item);
    setShowModal(!showModal);
    
  }
  
  function onDeleteItem(item){
    
    let filterItems = items.filter(it => it.id !== item.id)

    setItems(filterItems)

    showMessageContainer('Tarefa Removida', 'remove')
    onClearMessage();

  }

  function onDoneItem(item) {
    
    let updateItem = items.map(it => {
      if (it.id === item.id) {
        it.done = !it.done
      }

      return it
    })

    setItems(updateItem)

  }

  function onAddItem(text) {
    let it = Item(text)
    
    setItems([...items, it])
    showMessageContainer('Tarefa Adionada', 'add')
    onClearMessage();
  
  }

  function showMessageContainer(text, type) {
      setMessage(text)
      setCustomClass(type)
  }

  function onClearMessage() {
    setTimeout(() => {
      setMessage('')
      setCustomClass('')
    }, 1000)
    
  }
  

  return (
    <div className={styles.container}>
      <h1>To-do List</h1>
      <TodoForm
        onAddItem={onAddItem}
        showMessageContainer={showMessageContainer } />

      {message &&
        <Message
          onClearMessage={onClearMessage}
          customClass={customClass}
          message={message} />}
      
        <List
          onShowModal={onShowModal}
          onDeleteItem={onDeleteItem}
          onDoneItem={onDoneItem}
          items={items} />
          
      {items.length === 0 && <p>Nenhuma tarefa adicionada</p>}
      
      {showModal && (
        <EditModal
          onShowModal = {onShowModal}
          onUpdateItem ={onUpdateItem}
          item={item} />
      )
        
      }
    </div>
  );

}


export default App;
