/* eslint-disable no-useless-constructor */
import './App.css';
import React from 'react';
import ModalCreate from './component/ModalCreate';

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
        nominal: 90000,
        category: 'OUT',
      },
      {
        description:'Buys Makaroni Ngehe',
        date: 'November 4rd, 2023',
        nominal: 35000,
        category: 'OUT',
      },
    ]
  }

  this.addItem = this.addItem.bind(this);
}

addItem(object){
  let newData = [...this.state.summary, object]
  let cashDataIN = this.state.summary.filter((item) => item.category === 'IN' );
  let cashAmount = cashDataIN.map((item) => item.nominal);
  let totalCashIn = cashAmount.reduce((sum, amount) => sum + amount, 0);
  let cashDataOUT = this.state.summary.filter( (item) => item.category === 'OUT');
  let cashAmountOUT = cashDataOUT.map((item) => item.nominal);
  let totalCashOut = cashAmountOUT.reduce((sum, amount) => sum + amount, 0)
  
  this.setState({
    cashIncome: totalCashIn,
    transactionIN: cashAmount.length,
    cashExpense: totalCashOut,
    transactionOUT: cashAmountOUT.length,
    remainingCash: cashAmount - cashAmountOUT,
    cashPercentage: (cashAmount - cashAmountOUT)/cashAmount * 100,
    summary: newData
  })
}

funcCalculate()
{
  let cashDataIN = this.state.summary.filter((item) => item.category === 'IN' );
  let cashAmount = cashDataIN.map((item) => item.nominal);
  let totalCashIn = cashAmount.reduce((sum, amount) => sum + amount);
  let cashDataOUT = this.state.summary.filter( (item) => item.category === 'OUT');
  let cashAmountOUT = cashDataOUT.map((item) => item.nominal);
  let totalCashOut = cashAmountOUT.reduce((sum, amount) => sum + amount)
  this.setState({
    cashIncome: totalCashIn,
    transactionIN: cashAmount.length,
    cashExpense: totalCashOut,
    transactionOUT: cashAmountOUT.length,
    remainingCash: cashAmount - cashAmountOUT,
    cashPercentage: (cashAmount - cashAmountOUT)/cashAmount * 100,
  })
}

componentDidMount(){
  if(this.state.summary.length < 1){
    console.log('OK')
  }
  else{
    this.funcCalculate()
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
              <span className='title'>You have {this.state.percentageOfMoney} % of money left</span>
            </div>
          </div>

          <div className="row mt-4">
            <div className='col-6'>
              <div className='card-wrapper p-4'>
              <div className='icon-wrapper-IN mb-1'>
                <i className="bi bi-wallet2"></i>
              </div>
              <span className="title-sm">
                Income
              </span>
              <h3 className='fw-bold '>Rp. {this.state.income},- </h3>
              <div>
                <span className='title-sm text-indigo fw-bold'>{this.state.transactionIN}</span><span className='title-sm'> Transactions</span>
              </div>
              </div>
            </div>

            </div>

            <div className='row mt-5'>
              <div className='col-12 d-flex justify-content-between align-items-center'>
                <h4>Summary of Transactions</h4>
                <div className='wrapper-button d-flex'>
                  <ModalCreate action={this.addItem} category="IN" variant="button btn-indigo px-3 py-2 me-2" text="Income" icon="bi bi-plus-circle-fill" modalheading="Add Income"/>
                  <ModalCreate action={this.addItem} category="OUT" variant="button btn-red px-3 py-2 me-2" text="Expenses" icon="bi bi-plus-circle-fill" modalheading="Add Expenses"/>
                </div>
              </div>
            </div>

            <div className='row mt-4'>
              {this.state.summary.map((summary, index)=> {
                return(
                  <div key={index} className='mb-3 col-12 d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className={summary.category === 'IN' ? 'icon-wrapper-IN':'icon-wrapper-OUT'}>
                      <i className={summary.category === 'IN' ? 'bi bi-wallet2':'bi bi-bag-dash'}></i>
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

class Alert extends React.Component{

  constructor() {
    super()
  }

  render(){
    return (
      <h1>Still no data.</h1>
    )
  } 

}

export default App;