import React from 'react'
import ReactDOM from 'react-dom'
import { WalletProvider } from './main/index'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Admin } from './Admin'
import { MainApp } from './MainApp'
import './globalstyles.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={MainApp} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider
      config={{
        chainId: 97,
        supportedChainIds: [97],
        wrappedNative: {
          address: '',
          symbol: 'WBNB',
        },
        orange: {
          address: '0x5829ad3139496397f34d5daf2247f5640c47717f',
          symbol: 'BUSD',
        },
        usd: {
          address: '0x5829ad3139496397f34d5daf2247f5640c47717f',
          symbol: 'BUSD',
        },
        nativeUsdLp: {
          address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
          symbol: '',
        },
      }}
    >
      <App />
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
