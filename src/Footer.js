import React from 'react'

let currentYear = new Date().getFullYear()
function Footer() {
  return (
    <div className='footer'>
      <p>Copyright &copy; {currentYear} </p>
    </div>
  )
}

export default Footer
