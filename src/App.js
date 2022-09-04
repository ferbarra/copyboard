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
        this.handleChange = this.handleChange.bind(this)
    }

    setClipboard() {
        navigator.clipboard.writeText(this.state.copyValue)
    }

    handleChange(event) {
        this.setState({copyValue: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.copyValue} onChange={this.handleChange}/> <button onClick={this.setClipboard}>Copy</button>
            </div>
        )
    }
}

export default App;
