// import logo from './logo.svg';
import Component1 from './components/component1';
import Component2 from './components/component2';

function App() {
  return (
    <div className="App">
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
      <Component1/>
      <Component2/>
    </div>
  );
}

export default App;
