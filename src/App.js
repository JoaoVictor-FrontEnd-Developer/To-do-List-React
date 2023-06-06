import React, {useState, useEffect} from "react";
import styles from './App.module.css'


import TodoForm from './Components/TodoForm'
import List from './Components/List'
import EditModal from './Components/EditModal'
import listReducer from "./reducers/listReducer";
import messageReducer from "./reducers/messageReducer";
import Message from "./Components/Message";

import Aos from 'aos';
import 'aos/dist/aos.css'


import { createStore, combineReducers } from 'redux'
import { Provider} from 'react-redux'


function saveState(state) {
  localStorage.setItem('savedItems', JSON.stringify(state))
}

function loadState() {

  const actualState = localStorage.getItem('savedItems');
  
  if (actualState)
    return JSON.parse(actualState)
  else
    return {list: [], message: {}}
}

const allReducers = combineReducers({list: listReducer, message: messageReducer})

const store = createStore(allReducers, loadState());


store.subscribe(() => {
  saveState(store.getState());
})


function App() {

  useEffect(() => {
    Aos.init({duration: 500,});
  }, [])

  
  const [showModal, setShowModal] = useState(false)
  const [item, setItem] = useState()


  function onShowModal(item) {
    setItem(item);
    setShowModal(!showModal);
    
  }


  return (
    <div className={styles.container}>
      <h1 data-aos="fade-right">To-do List</h1>
      <Provider store={store}>
        <TodoForm/>
        
          <List
            onShowModal={onShowModal}
        />
        
        <Message/>
            
        {showModal && (
          <EditModal
            onShowModal = {onShowModal}
            item={item} />
        )
          
          }
        </Provider>
    </div>
  );

}


export default App;
