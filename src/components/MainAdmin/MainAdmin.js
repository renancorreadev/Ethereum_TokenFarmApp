import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './style.css'
import Metamask from '../../assets/metamask.png'
import RewardsForm from './RewardsForm/RewardsForm'
import { useEagerConnect, useWeb3 } from '../../main/index'

const Main = () => {
  useEagerConnect()
  const { connected } = useWeb3()

  return (
    <span>
      {connected ? (
        <Container className="TextBorder">
          {' '}
          <div className="row">
            <div className="col-md-12">
              <h2 className="d-flex justify-content-center text">Connected</h2>
            </div>
          </div>
          <div className="Container">
            {' '}
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                {' '}
                <RewardsForm />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="row">
            <div className="col-md-12">
              <h2 className="d-flex justify-content-center text">
                Please Connect!
              </h2>
            </div>
          </div>
          <div className="Container">
            {' '}
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                {' '}
                <img className="Metamask" src={Metamask} alt="metamask" />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </Container>
      )}
    </span>
  )
}

export default Main
