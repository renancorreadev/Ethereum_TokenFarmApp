import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles.css'

const FooterPage = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col-sm d-flex justify-content-center">
            &copy;{new Date().getFullYear()} SheepToken | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}
export default FooterPage
