import React, { Component } from 'react'
import Header from './Header'

class Home extends Component {

  render() {
    return (

         <div> 
            <Header link="Logout" />
            <div className="container text-center title">
               <h1>Hey, You are logged in !</h1>
            </div>
         </div>
    )
  }
}

export default Home