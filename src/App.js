/* eslint-disable no-useless-constructor */
import './App.css';
import { useState } from 'react';
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
                <span className='title-sm text-indigo fw-bold'>50</span><span className='title-sm'> Transactions</span>
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
                <span className='title-sm text-indigo fw-bold'>50</span><span className='title-sm'> Transactions</span>
              </div>
              </div>
            </div>
          </div>

            <div className='row mt-5'>
              <div className='col-12 d-flex justify-content-between align-items-center'>
                <h4>Summary of Transactions</h4>
                <div className='wrapper-button d-flex'>
                  <ModalCreate variant="button btn-indigo px-3 py-2 me-2" text="Income" icon="bi bi-plus-circle-fill" modalheading="Add Income"/>
                  <ModalCreate variant="button btn-red px-3 py-2 me-2" text="Expenses" icon="bi bi-plus-circle-fill" modalheading="Add Expenses"/>
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
      show : false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
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
      show : true
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
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default App;