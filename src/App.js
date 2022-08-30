import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Copyboard</h1>
      </header>
        <Entry copyValue="Hello, World!"></Entry>
        <Entry copyValue="awijdiqjhdf"></Entry>
    </div>
  );
}
class Entries extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <ul></ul>
    }
}
class Entry extends React.Component {
    render() {
        return <p>{this.props.copyValue}</p>
    }
}

export default App;
