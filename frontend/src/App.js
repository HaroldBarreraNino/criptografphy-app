import logo from './logo.svg';
import './App.css';

const Parse = require('parse');

function App() {

  const insertParseObject = () => {
    let GameScore = Parse.Object.extend("GameScore");
    let gameScore = new GameScore();

    gameScore.set("score", 1337);
    gameScore.set("playerName", "Sean Plott");
    gameScore.set("cheatMode", false);

    gameScore.save()
      .then((gameScore) => {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + gameScore.id);
      }, (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <button onClick={() => {insertParseObject()}} className="btn btn-primary">Parse Test</button>
    </div>
  );
}

export default App;
