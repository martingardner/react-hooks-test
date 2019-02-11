import React, { useState , useEffect } from 'react';


function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('Enter Text');

  useEffect( ()=> {
    document.title = `You clicked ${count} times`;
  }, [count] );

  return (
    <div>
      <div>
        <label>{text}</label>
      </div>
      <input id="enterText" value={text} onChange={ (e)=> setText(e.target.value)}></input>
      <p>You clicked {count} times</p>
      <button onClick={ ()=> setCount(count + 1)}>
        Click
      </button>
      
    </div>
  )
}


export default App;
