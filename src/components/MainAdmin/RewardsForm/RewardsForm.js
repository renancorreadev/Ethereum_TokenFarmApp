import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { useForm } from 'react-hook-form'
import { useEagerConnect, useERC20Approval } from '../../../main/index'

const RewardsForm = () => {
  useEagerConnect()
  const { Rewards } = useERC20Approval()
  const { handleSubmit } = useForm()

  const onSubmit = () => {
    Rewards()
  }
  return (
    <form
      style={{ position: 'relative', marginTop: '36px' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <button className="btn btn-primary btn-block btn-lg" variant="outlined">
        Send Rewards
      </button>
    </form>
  )
}

export default RewardsForm
