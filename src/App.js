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
        <div className='container py-5'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className='fw-bold'>MoneyMe Apps</h1>
              <hr className='w-75 mx-auto' />
              <h2 className='fw-bold'>Rp. 2.500.000,-</h2>
              <span className='title'>You have 75% money left</span>
            </div>
          </div>

          <div className="row mt-4">
            <div className='col-6'>
              <div className='card-wrapper p-4'>
              <div className='icon-wrapper mb-1'>
                <i class="bi bi-cash-stack"></i>
              </div>
              <span className="title">
                Income
              </span>
              <h3 className='fw-bold '>Rp. 2.500.000</h3>
              <div>
                <span className='title-sm text-indigo fw-bold'>50</span><span className='title-sm'> Transactions</span>
              </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='card-wrapper p-4'>
              <div className='icon-wrapper mb-1'>
                <i class="bi bi-cash-stack"></i>
              </div>
              <span className="title">
                Income
              </span>
              <h3 className='fw-bold '>Rp. 2.500.000</h3>
              <div>
                <span className='title-sm text-indigo fw-bold'>50</span><span className='title-sm'> Transactions</span>
              </div>
              </div>
            </div>
          </div>

            <div className='row mt-5'>
              <div className='col-12 d-flex justify-content-between align-items-center'>
                <h4>Summary of Transactions</h4>
                <div className='wrapper-button d-flex'></div>
                  <button className='button btn-indigo px-3 py-2 me-2'>Income <i class="bi bi-plus-circle-fill"></i></button>
                  <button className='button btn-red px-3 py-2'>Expenses <i class="bi bi-dash-circle-fill"></i></button>
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-12 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <div className='icon-wrapper'>
                    <i class="bi bi-wallet2"></i>
                  </div>

                  <div className="transaction ms-3 d-flex flex-column">
                    <h6>Pay day</h6>
                    <span className='title-sm'>October 25 2023</span>
                </div>
                </div>

                <h5 className='text-money-in'>Rp.6.000.000</h5>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default App;