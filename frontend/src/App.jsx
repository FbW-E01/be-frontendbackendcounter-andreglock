import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(result => setCounter(`${result.counter}`))
      .catch(err => console.warn(err))
  }, [])

  const handleGet = async () => {
    try {
      const responseAwait = await fetch('http://localhost:3000/')
      //  .then(response => response.json())
      //  .then(result => setCounter(`${result.counter}`))
      //  .catch(err => console.warn(err));
      const data = await responseAwait.json()
      setCounter(`${data.counter}`)
    } catch (error) {
      console.warn(error);
    }
    console.log(counter);
  }

  const upPost = () => {
    fetch('http://localhost:3000/', { 
      method: "POST",
      body: JSON.stringify({ do: 'add to counter' }),
      headers: { 'Content-Type': 'application/json'}
    });
  }

  const downPost = () => {
    fetch('http://localhost:3000/dec', { 
      method: "POST",
      body: JSON.stringify({ do: 'take from counter' }),
      headers: { 'Content-Type': 'application/json'}
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGet}>Get number!</button>
        <button onClick={upPost}>Increase number!</button>
        <button onClick={downPost}>Decrease number!</button>
      </header>
      { counter ? 
      <main>
        <div>The counter is {counter}</div>
      </main> :
      <></>}
    </div>
  );
}

export default App;
