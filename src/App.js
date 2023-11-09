/* eslint-disable no-useless-constructor */
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
  super();

  this.state = {
    remainingMoney : 100,
    percentageOfMoney : 0,
    income : 0,
    expense : 0,
    transactionIN: 0,
    transactionOUT: 0,
    summaryIN: 0,
    summaryOUT: 0,
    summary: [
      {
        description:'Receives salary',
        date: 'November 1st, 2023',
        nominal: 6500000,
        category: 'IN',
      },
      {
        description:'Buys Shihlin',
        date: 'November 3rd, 2023',
        nominal: 45000,
        category: 'OUT',
      }
    ]
  }
}
  render() {
    return (
      <>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className='fw-bold'>MoneyMe Apps</h1>
              <hr className='w-75 mx-auto' />
              <h2 className='fw-bold'>Rp. {this.state.remainingMoney}</h2>
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
              <h3 className='fw-bold '>Rp. {this.state.income} </h3>
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
                Expense
              </span>
              <h3 className='fw-bold '>Rp. {this.state.expense},</h3>
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
              {this.state.summary.map((summary)=> {
                return(
                  <div className='mb-3 col-12 d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className={summary.category === 'IN' ? 'icon-wrapper-IN':'icon-wrapper-OUT'}>
                      <i class={summary.category === 'IN' ? 'bi bi-wallet2':'bi bi-bag-dash'}></i>
                    </div>

                    <div className="transaction ms-3 d-flex flex-column">
                      <h6>{summary.description}</h6>
                      <span className='title-sm'>{summary.date}</span>
                  </div>
                  </div>
                  <h5 className={summary.category === 'IN' ? 'text-money-in':'text-money-out'}>Rp. {summary.nominal}</h5>
                </div>
                )
              }) }
            </div>
          </div>
      </>
    )
  }
}

export default App;