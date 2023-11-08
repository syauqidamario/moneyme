/* eslint-disable no-useless-constructor */
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(){
    super();
  }
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
            <div className='col-6'>
              <div className='icon-wrapper'>
                <i class="bi bi-wallet2"></i>
              </div>
              <span className="title">
                Income
              </span>
              <h3>Rp. 2.500.000</h3>
              <span className='title'>50</span><span className='title'>Transactions</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;