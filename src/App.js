//Created by Dattran
import './App.css';
import React, { Component, useState, useEffect, useRef } from 'react';

class App extends Component {
  showRes = () => {
    alert(this.input.value)
  }

  //POST data to server
  onCreateText = () => {
    fetch("/api", {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ "textTrain": this.input.value })

    }).then(r => r.json()).then(res => {
      if (res) {

        return alert(this.dataTrain["textTrain"])
      }
    })
  }

  // //GET data here
  // fetchData = () => {

  //   fetch('/api').then(
  //     response => response.json()
  //   ).then(data => 
  //     console.log(data)
  //   )
  
  // }
  componentDidMount() {
    // GET request using fetch with error handling
    fetch('/api').then(
      response => response.json()
    ).then(data => this.dataTrain = data)
  }
  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-26">
                Dev C For Fun
            </span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font" />
              </span>
              <div>
                <div className="wrap-input100 validate-input">
                  <input ref={(value) => { this.input = value }} className="input100" type="text" name="text" />
                  <span className="focus-input100" data-placeholder="Nhập từ cần train" />
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button onClick={this.onCreateText} className="login100-form-btn" >
                      Bắt đầu
          </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
