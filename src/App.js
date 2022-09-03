import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Copyboard</h1>
      </header>
        <Entries/>
    </div>
  );
}
class Entries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            copyValues: ["Caca", "Tua"]
        }
    }

    render() {
        let x = this.state.copyValues.map((value, index) => <Entry key={index} copyValue={value}/>)
        return <div>{x}</div>
    }
}
class Entry extends React.Component {
    render() {
        return <p>{this.props.copyValue}</p>
    }
}

export default App;
