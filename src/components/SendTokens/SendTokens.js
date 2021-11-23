import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './style.css'
import { useEagerConnect, useWeb3 } from '../../main/index'

export const SendTokens = () => {
  useEagerConnect()
  const { connected } = useWeb3()

  return (
    <span>
      {connected ? (
        <Container className="TextBorder">
          <div className="row">
            <div className="col-md-12">
              <h2>Redistribuite Tokens </h2>
            </div>
          </div>
        </Container>
      ) : (
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-md-12">
              <h2>Connected to Wallet </h2>
            </div>
          </div>
        </div>
      )}
    </span>
  )
}
