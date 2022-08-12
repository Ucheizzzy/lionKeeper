import React from 'react'

let currentYear = new Date().getFullYear()
function Footer() {
  return (
    <div className='footer'>
      <p>Copyright &copy; {currentYear} Mr.LionTech </p>
    </div>
  )
}

export default Footer
