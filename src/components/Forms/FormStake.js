import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import BigNumber from 'bignumber.js'
import { useForm } from 'react-hook-form'
import { useEagerConnect, useERC20Approval } from '../../main/index'

const FormStake = () => {
  useEagerConnect()
  const { approve } = useERC20Approval()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const decimals = 9
    let val = data.amount * 10 ** decimals
    approve(val)
  }

  return (
    <form className="form-stake" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form-control form-control-lg"
        placeholder="0"
        required
        {...register('amount', { required: true })}
      />
      <button className="btn btn-primary btn-block btn-lg" variant="outlined">
        Stake
      </button>
    </form>
  )
}

export default FormStake
