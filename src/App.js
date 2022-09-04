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

        this.addEntry = this.addEntry.bind(this)
    }

    addEntry() {
        this.setState((state) => ({
            copyValues: state.copyValues.concat(["new value"])
        }))
    }

    render() {
        let x = this.state.copyValues.map((value, index) => <Entry key={index} copyValue={value}/>)
        return (
            <div>
                {x}
                <button onClick={this.addEntry}>Add more</button>
            </div>
        )
    }
}
class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = { copyValue: props.copyValue }
        this.setClipboard = this.setClipboard.bind(this)
    }

    setClipboard() {
        navigator.clipboard.writeText(this.state.copyValue)
    }
    render() {
        return (
            <div>
                {this.state.copyValue} <button onClick={this.setClipboard}>Copy</button>
            </div>
        )
    }
}

export default App;
