import './App.css';
import { useState } from 'react'
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setTodo] = useState('')
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date();
  const day = dayNames[date.getDay()];
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) =>{ setTodo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        
        <i onClick={() =>{if(toDo!==''){setToDos([...toDos, { id: Date.now(), text: toDo, status: false,statusDrop: false }]);setTodo('') }}} className="fas fa-plus"></i>
      </div>
      
      <div className="todos">
        <div>

        </div>
      <h1>Active Tasks</h1>
        {toDos.map((obj) => {
  if (!obj.statusDrop) {
          return (
            
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                 
                  setToDos(toDos.filter(obj2 => {
                    console.log("obj2", obj2)
                    
                    if (obj2.id === obj.id ) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              
              <div className="right">
                
                <i onClick={(e) => {
                  e.target.value = true;
                  setToDos(toDos.filter((obj2) => {
                    if (obj2.id === obj.id) {
                      obj2.statusDrop = e.target.value;
                    }
                    return obj2;
                  }));
                }} value={obj.statusDrop} className="fas fa-times" title="Drop"></i>
              </div>
            </div>
          )
              }
        })
        }
        <div>
        
        {toDos.map((obj) => {
       
          if (obj.status && !obj.statusDrop) {
            return ( <h2>{obj.text}</h2>)
          }
          return null
        })}
        </div>
        
      </div>
    </div>

  );
}
export default App;
