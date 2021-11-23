import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import usdLogo from '../../assets/sheepimg01.png'

export default function BoxPageMid() {
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
      <Paper elevation={24}>
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            <div className="col-md-12">
              <h3 className="d-flex justify-content-center">
                {' '}
                App for the entire
              </h3>
            </div>
            <div className="col-md-12">
              <h3 className="d-flex justify-content-center">
                {' '}
                SheepToken community
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
                  width: '40%',
                  height: '90%',
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </Box>
  )
}
