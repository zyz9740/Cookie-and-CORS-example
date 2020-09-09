import React, {Component} from 'react';
import './App.css';

class App extends Component {
    handleClick() {
        fetch('http://127.0.0.1:8080',{
            method:'GET'
        })
            .then(res => {
                console.log(res)
                console.log("Meet CORS.")
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>login</button>
            </div>
        );
    }
}

export default App;
