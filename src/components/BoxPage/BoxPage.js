import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import usdLogo from '../../assets/usd.png'

export default function BoxPage() {
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
                Deposit Sheep to receive
              </h3>
            </div>
            <div
              className="col-md-12 d-flex justify-content-center "
              style={{
                marginTop: '20px',
              }}
            >
              <img
                src={usdLogo}
                alt="usdLogo"
                style={{
                  width: '15%',
                  height: '90%',
                }}
              />
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
                It's very simple, you just need to connect to your wallet by
                clicking on the{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                  connect button
                </span>{' '}
                above and putting the amount you want to stake to receive BUSD.
              </p>
            </div>
          </div>
        </div>
      </Paper>
    </Box>
  )
}
