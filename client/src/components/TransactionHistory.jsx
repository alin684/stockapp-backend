import React, { Component } from 'react';

import Auth from '../modules/Auth';

class TransactionHistory extends Component {
  constructor() {
    super();
    this.state = {
      money: '',
      transactions: '',
      stocks: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount(){
    this.getTransactions();
  }

  getTransactions() {
    fetch('/getTransactions', {
      method: "GET",
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res => {
      return res.json();
    }).then(res => {
      console.log(res)
      this.setState({
        money: res.money,
        transactions: res.transactions,
        stocks: res.stocks,
      })
      console.log(this.state.money)
      console.log(this.state.transactions)
      console.log(this.state.stocks)
    });

  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default TransactionHistory;
