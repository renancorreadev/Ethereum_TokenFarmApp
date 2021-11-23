import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import './stylesBoxEnd.css'
export default function BoxPageEnd() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        marginTop: '70px',
        marginLeft: '15px',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 350,
        },
      }}
    >
      <Paper elevation={20}>
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            <div className="col-md-12">
              <h3 className="d-flex justify-content-center">
                {' '}
                Buy Sheep Token
              </h3>
            </div>
            <div
              className="col-md-12 d-flex justify-content-center "
              style={{
                marginTop: '20px',
              }}
            >
              <button className="btn btn-primary">
                <a href="https://pancakeswap.finance/swap">Buy Now </a>
              </button>
            </div>
            <div
              className="col-md-12"
              style={{
                width: '300px',
                marginTop: '20px',
                borderRadius: '10px',
              }}
            >
              <p
                style={{
                  position: 'relative',
                  textAlign: 'center',
                  wordWrap: 'break-word',
                  marginTop: '20px',
                }}
              >
                {' '}
                If you don't have Sheep Token, you can buy at{' '}
                <span style={{ color: 'green', fontWeight: 'bold' }}>
                  Pancake Swap
                </span>{' '}
                , click on the link above and we will redirect you.
              </p>
              <br />
              <p>
                Contract Address:{' '}
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  <a
                    className="contractAddress"
                    href="https://bscscan.com/address/0x0025b42bfc22cbba6c02d23d4ec2abfcf6e014d4"
                  >
                    Sheep Address
                  </a>
                </span>{' '}
              </p>
            </div>
          </div>
        </div>
      </Paper>
    </Box>
  )
}
