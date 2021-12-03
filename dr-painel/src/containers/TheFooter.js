import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">DR-Hosp</a>
        <span className="ml-1">&copy; 2021 todos os direitos reservados.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Criado por</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">Martini System</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
