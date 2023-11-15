/* eslint-disable no-useless-constructor */
import './App.css';
import React from 'react';
import ModalCreate from './component/ModalCreate';

class App extends React.Component{
  constructor() {
    super();
    
    this.state = {
      sisaUang : 0,
      persentaseUang : 0, 
      pemasukanUang : 0, 
      pengeluaranUang : 0, 
      transaksiIN : 0, 
      transaksiOUT : 0, 
      summary : [
      ]
    }

    this.tambahItem = this.tambahItem.bind(this);
    this.fnHitung = this.fnHitung.bind(this);
  }

  tambahItem(objek){
    let newData = [...this.state.summary, objek]
    let dataUangIN = newData.filter( (item)=> item.category === 'IN' );
    let nominalUang = dataUangIN.map((item)=> item.nominal );
    let jumlahUangIn = nominalUang.reduce((total, num)=> total + num, 0 ); 

    let dataUangOUT = newData.filter( (item)=> item.category === 'OUT' );
    let nominalUangOUT = dataUangOUT.map((item)=> item.nominal );
    let jumlahUangOUT = nominalUangOUT.reduce((total, num)=> total + num, 0 )

    this.setState({
      pemasukanUang : jumlahUangIn, 
      transaksiIN : nominalUang.length, 
      pengeluaranUang : jumlahUangOUT,
      transaksiOUT : nominalUangOUT.length, 
      sisaUang : jumlahUangIn - jumlahUangOUT,
      persentaseUang : (((jumlahUangIn - jumlahUangOUT) / jumlahUangIn) * 100).toFixed(0), 
      summary : newData
    })
  }

  fnHitung() {
    let dataUangIN = this.state.summary.filter( (item)=> item.category === 'IN' );
    let nominalUang = dataUangIN.map((item)=> item.nominal );
    let jumlahUangIn = nominalUang.reduce((total, num)=> total + num ); 
    let dataUangOUT = this.state.summary.filter( (item)=> item.category === 'OUT' );
    let nominalUangOUT = dataUangOUT.map((item)=> item.nominal );
    let jumlahUangOUT = nominalUangOUT.reduce((total, num)=> total + num )

    this.setState({
      pemasukanUang : jumlahUangIn, 
      transaksiIN : nominalUang.length, 
      pengeluaranUang : jumlahUangOUT,
      transaksiOUT : nominalUangOUT.length, 
      sisaUang : jumlahUangIn - jumlahUangOUT,
      persentaseUang : (((jumlahUangIn - jumlahUangOUT) / jumlahUangIn) * 100).toFixed(0)
    })
  }

  componentDidMount() {
    if(this.state.summary.length < 1 ) {
      console.log('ok')
    } else {
      this.fnHitung()
    }
  }


  render(){
    return (
      <>
        <div className='container mx-auto'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className='fw-bold'>MoneyMe</h1>
              <hr className='w-75 mx-auto' />
              <h2 className='fw-bold'>Rp. {this.state.sisaUang} ,-</h2>
              <span className='title-md'> Your have {this.state.persentaseUang}% left </span>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col-6'>
              <div className='card-wraper p-4'>
                <div className='icon-wrapper-IN mb-1'>
                  <i className="bi bi-wallet2"></i>
                </div>
                <span className='title-sm'>Income</span>
                <h3 className='fw-bold'>Rp. {this.state.pemasukanUang},-</h3>
                <div>
                  <span className='title-sm text-ungu fw-bold'>{this.state.transaksiIN}</span><span className='title-sm'> Transaction</span>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='card-wraper p-4'>
                <div className='icon-wrapper-OUT mb-1'>
                  <i className="bi bi-cash-stack"></i>
                </div>
                <span className='title-sm'>Expense</span>
                <h3 className='fw-bold'>Rp. {this.state.pengeluaranUang},-</h3>
                <div>
                  <span className='title-sm text-ungu fw-bold'>{this.state.transaksiOUT}</span><span className='title-sm'> Transaction</span>
                </div>
              </div>
            </div>

          </div>

          <div className='row mt-5'>
            <div className='col-12 d-flex justify-content-between align-items-center'>
              <h4>Transaction Summary</h4>
              <div className='wrapper-button d-flex'>
                <ModalCreate action={this.tambahItem} category="IN" variant="button btn-indigo px-3 py-2 me-2" text="Income" icon="bi bi-plus-circle-fill" modalheading="Add Income"/>
                <ModalCreate action={this.tambahItem} category="OUT" variant="button btn-red px-3 py-2" text="Expense" icon="bi bi-dash-circle-fill" modalheading="Add Expense"/>
              </div>
            </div>
          </div>

          <div className='row mt-4'>
            { this.state.summary.length < 1 && <Alert /> }
            { this.state.summary.map((sum, index)=> {
              return (
                <div key={index} className='mb-3 col-12'>
                  <div className='d-flex align-items-center'>
                    <div className={sum.category === 'IN' ? 'icon-wrapper-IN' : 'icon-wrapper-OUT'}>
                      <i className={sum.category === 'IN' ? 'bi bi-wallet2' : 'bi bi-bag-dash'}></i>
                    </div>
                    <div className='transaction ms-3 d-flex flex-column'>
                      <h6>{sum.deskripsi}</h6>
                      <span className='title-sm'>{sum.tanggal}</span>
                    </div>
                  </div>
    
                  <h5 className={sum.category === 'IN' ? 'text-money-in' : 'text-money-out'}>Rp. {sum.nominal}</h5>
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