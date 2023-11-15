/* eslint-disable no-useless-constructor */
import './App.css';
// import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
  console.log(object)
  this.setState({
    summary:[...this.state.summary, object]
  })
}

componentDidMount(){
  let cashDataIN = this.state.summary.filter((item) => item.category === 'IN' );
  let cashAmount = cashDataIN.map((item) => item.nominal);
  let totalCashIn = cashAmount.reduce((sum, amount) => sum + amount);
  let cashDataOUT = this.state.summary.filter( (item) => item.category === 'OUT');
  let cashAmountOUT = cashDataOUT.map((item) => item.nominal);
  let totalCashOut = cashAmountOUT.reduce((sum, amount) => sum + amount)
  console.log(totalCashOut)

  console.log(totalCashIn)
  this.setState({
    cashIncome: totalCashIn,
    transactionIN: cashAmount.length,
    cashExpense: totalCashOut,
    transactionOUT: cashAmountOUT.length,
    remainingCash: cashAmount - cashAmountOUT,
    cashPercentage: (cashAmount - cashAmountOUT)/cashAmount * 100
  })
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
              <div className='icon-wrapper mb-1'>
                <i className="bi bi-cash-stack"></i>
              </div>
              <span className="title">
                Income
              </span>
              <h3 className='fw-bold '>Rp. {this.state.income} </h3>
              <div>
                <span className='title-sm text-indigo fw-bold'>{this.state.transactionIN}</span><span className='title-sm'> Transactions</span>
              </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='card-wrapper p-4'>
              <div className='icon-wrapper mb-1'>
                <i className="bi bi-cash-stack"></i>
              </div>
              <span className="title">
                Expense
              </span>
              <h3 className='fw-bold '>Rp. {this.state.expense},</h3>
              <div>
                <span className='title-sm text-indigo fw-bold'>{this.state.transactionOUT}</span><span className='title-sm'> Transactions</span>
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

class ModalCreate extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      show : false,
      description: '',
      nominal:0,
      date: '',
      category: ''
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleClose()
  {
    this.setState({ 
      show : false
    })
  }

  handleShow()
  {
    this.setState({ 
      show : true,
      category : this.props.category
    })
  }

  handleChange(evt){ 
    this.setState(
    { 
      [evt.target.name] : evt.target.value,
    })
  }

  addItem(){
  const Data = {
      description: this.state.description,
      nominal: this.state.nominal,
      date: this.state.date,
      category: this.state.category
  }
   const funcAddItem = this.props.action;
   funcAddItem(Data);
    this.setState({
      show:false
    })
  }
  render()
  {
    return (
      <>
        <button onClick={this.handleShow} className={this.props.variant}>{this.props.text}<i className={this.props.icon}></i></button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.modalheading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input type="text" 
                className="form-control" 
                placeholder="Enter description" 
                name='Description' 
                value={this.state.description}
                onChange={this.handleChange}
                />
            </div>

            <div className="mb-3">
              <label className="form-label">Nominal</label>
              <input type="number" 
                className="form-control" 
                placeholder="Enter amount of money" 
                name='Nominal' 
                value={this.state.nominal}
                onChange={this.handleChange}
                />
            </div>

            <div className="mb-3">
              <label className="form-label">Date</label>
              <input type="date" 
                className="form-control" 
                placeholder="Enter date" 
                name='Date' 
                value={this.state.date}
                onChange={this.handleChange}
                />
            </div>

            <div>
              <input type="hidden" 
                className="form-control" 
                placeholder="Enter category" 
                name='Date' 
                value={this.state.category}
                onChange={this.handleChange}
                />
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.addItem}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default App;