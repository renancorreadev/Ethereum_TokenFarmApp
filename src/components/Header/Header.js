import { React } from 'react'
import logo from '../../assets/logo.png'

import { useEagerConnect, useWeb3, useWalletModal } from '../../main/index'

import './styled.css'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  useEagerConnect()
  const { setOpen, deactivate } = useWalletModal()
  const { connected } = useWeb3()

  return (
    <Navbar collapseOnSelect expand="lg" bg="orange" variant="dark">
      <Navbar.Brand href="#home">
        <img alt="" src={logo} className="logo d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style={{ opacity: '1', fontWeight: '700' }}>
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="#How_works">How Works</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#stake_now">Stake Now</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <button
              className="btn btn-outline-warning"
              onClick={() => (connected ? deactivate() : setOpen(true))}
            >
              {connected ? 'Disconnect' : 'Connect'}
            </button>{' '}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ marginLeft: '300px', bottom: '30px', position: 'relative' }}
      />
    </Navbar>
  )
}

export default Header
