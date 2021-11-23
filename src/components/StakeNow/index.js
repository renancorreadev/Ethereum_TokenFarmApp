import * as React from 'react'
import Box from '@material-ui/core/Box'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const steps = [
  {
    label: 'Connect on the Metamask Button',
    description: `First, connect to your account using the connect button right above the app header.`,
  },
  {
    label: 'Put the amount on stake, approve and accept the transaction',
    description:
      'When connecting, click on the input field "stake", enter the amount to stake and wait for the metamask pop-up to approve the transaction and then accept the transaction to perform the stake.',
  },
  {
    label: 'Unstake and receive BUSD reward.',
    description: `Daily earnings today are 3% busd from the staked value! If you want to withdraw this balance, just log back in and click "unstake" and accept the transaction from the metamask popup.`,
  },
]

export default function StakeNow() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className="passos container  d-flex justify-content-center">
      <Paper style={{ marginBottom: '90px' }}>
        <Box sx={{ maxWidth: 400 }} style={{ marginBottom: '90px' }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Paper>
    </div>
  )
}
