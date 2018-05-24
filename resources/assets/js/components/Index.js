import React, { Component } from 'react'
import Header from './Header'

class Index extends Component {

  render() {
    return (
       <div> 
          <Header />
          <div className="container text-center  title">
               <br />
               <h1>Welcome to Kraken. </h1>
               <p>Create an account to use all benefits from this app.</p>
            </div>
       </div>   
    )
  }

}

export default Index