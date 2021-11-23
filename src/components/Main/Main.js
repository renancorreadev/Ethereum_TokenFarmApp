import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './style.css'
import sheepDam from '../../assets/sheep-token.png'
import usdLogo from '../../assets/usd.png'
import FormStake from '../Forms/FormStake'
import About from '../About/index'
import Works from '../../components/HowWorks/index'
import MainCarousel from '../../components/MainCarousel/index'
import StakeNow from '../../components/StakeNow/index'
import FormUnstake from '../Forms/FormUnstake'
import {
  useEagerConnect,
  useWeb3,
  useUSDTbalance,
  useStakeBalance,
} from '../../main/index'
import BoxPage from '../BoxPage/BoxPage'
import BoxPageEnd from '../BoxPage/BoxPageEnd'
import BoxPageMid from '../BoxPage/BoxPageMid'

const Main = () => {
  useEagerConnect()
  const { account, connected } = useWeb3()
  const { usdBalance } = useUSDTbalance(account)
  const { stakeBalance } = useStakeBalance(account)

  return (
    <>
      <span className=" container-fluid ">
        {connected ? (
          <Container className="TextBorder">
            {' '}
            <Container>
              <div className="row">
                <div className="col-md-12">
                  <h2 className="title-main d-flex justify-content-center ">
                    Sheep USD Staker
                  </h2>
                </div>
              </div>
            </Container>
            <div className="row">
              <div className="col-md-6 box">
                <div className="row">
                  <div ClassName="col-md-12">
                    <h2 className="AmountSheep">
                      <img
                        src={sheepDam}
                        alt="UsdBalance"
                        className="UsdDawm"
                      />
                      Sheep's in Staking:{' '}
                      <span className="stakeBalance">{stakeBalance}</span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-center">
                    <FormStake />
                  </div>
                </div>
              </div>
              <div className="col-md-6 box2">
                <div className="row">
                  <div ClassName="col-md-12">
                    <h2 className="AmountSheep">
                      <img src={usdLogo} alt="Rewards" className="SheepDam" />
                      Total Rewards: {usdBalance}
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-center">
                    <FormUnstake />
                  </div>
                </div>
              </div>
            </div>{' '}
          </Container>
        ) : (
          <>
            <div className="carousel-container container-fluid p-0">
              <MainCarousel />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-4 ">
                  <BoxPage />
                </div>
                <div className="col-md-4 ">
                  <BoxPageMid />
                </div>
                <div className="col-md-4 ">
                  <BoxPageEnd />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <h2
                    id="How_works"
                    className="TITLE d-flex justify-content-center"
                  >
                    How Works
                  </h2>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 ">
                  <Works />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <h2
                    id="about"
                    className="TITLE d-flex justify-content-center"
                  >
                    About
                  </h2>
                </div>
              </div>

              <div className="row">
                <About />
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <h2
                    id="stake_now"
                    className="TITLE d-flex justify-content-center"
                  >
                    Stake Now
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 ">
                  <StakeNow />
                </div>
              </div>
            </div>
          </>
        )}
      </span>{' '}
    </>
  )
}

export default Main
