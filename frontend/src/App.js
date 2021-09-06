import './App.css';

function App() {
  const handleGet = () => {
    fetch('http://localhost:3000/'/* , { 
      method: "GET",
      body: JSON.stringify({ do: 'get counter' }),
      headers: { 'Content-Type': 'application/json'}
    } */);
  }

  const handlePost = () => {
    fetch('http://localhost:3000/', { 
      method: "POST",
      body: JSON.stringify({ do: 'add to counter' }),
      headers: { 'Content-Type': 'application/json'}
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGet}>Get number!</button>
        <button onClick={handlePost}>Increase number!</button>
      </header>
    </div>
  );
}

export default App;
