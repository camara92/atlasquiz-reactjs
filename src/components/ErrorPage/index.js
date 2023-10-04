import React from 'react'
import errorPageImlage from '../images/errorPageImg.jpg'

const centerH2 = {
  textAlign: "center", 
  marginTop: "50px"
}
const centerImg = {
  display: "block", 
  marginTop: "40px auto", 
  borderRadius : "50% 50%",  
  height: 800
}

const ErrorPage = () => {
  return (
    <div className='quiz-bg'>
      <div className='container'> 
      <h2 style={centerH2}>Oups, cette page n'existe pas ! </h2>
       <img style={centerImg } src={errorPageImlage} alt='pageError' />
      </div>
    </div>
  )
}

export default ErrorPage
