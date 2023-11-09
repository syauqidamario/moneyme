/* eslint-disable no-useless-constructor */
import './App.css';
import React from 'react';

class App extends React.Component{
  // constructor(){
  //   super();
  // }
  render() {
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>MoneyMe Apps</h1>
              <hr />
              <>
              <h4>Rp. 2.500.000,-</h4>
              <span className='title'>You have 75% money left</span>
              </>
            </div>
          </div>

          <div className="row">
            <div className='row'>
              <div className='card-wrapper'>
              <div className='icon-wrapper'>
                <i class="bi bi-wallet2"></i>
              </div>
              <span className="title">
                Income
              </span>
              <h3>Rp. 2.500.000</h3>
              <div>
                <span className='title'>50</span><span className='title'> Transactions</span>
              </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-12 d-flex justify-content-between align-items-center'>
                <h2>Summary of Transactions</h2>
                <div className='wrapper-button d-flex'></div>
                  <button>Income <i class="bi bi-plus-circle-fill"></i></button>
                  <button>Expenses <i class="bi bi-dash-circle-fill"></i></button>
              </div>
            </div>

            <div className='row'>
              <div className='col-12 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <div className='icon-wrapper'>
                    <i class="bi bi-wallet2"></i>
                  </div>

                  <div className="transaction">
                    <h6>Pay day</h6>
                    <span className='title'>October 25 2023</span>
                </div>
                </div>

                <h5 className='money'>Rp.6.000.000</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;