import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div style={{backgroundColor : props.mode === `dark` ? `white` : `black`, minHeight:"15vh", marginTop:"1rem",paddingTop:'2opx'}} >
        <p style={{color:`${props.mode === `dark` ? `black` : `white` }`}} className='text-center my-3' >Hi My name is Satyanarayan & I Hope u like this app.
        <p>Visit : <Link to="https://github.com/satyadalei/textutils"> <i className="fab fa-github"></i> Github Link</Link>  & <Link to="https://satyadalei.github.io/portfolio/">Portfolio&nbsp;<i class="fa fa-external-link"></i></Link> or <Link to={"https://www.linkedin.com/in/satyadalei/"} >LinkedIn <i class="fab fa-linkedin"></i> </Link>  </p>
        </p>
    </div>
  )
}

export default Footer