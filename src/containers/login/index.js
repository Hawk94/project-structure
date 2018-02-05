import 'components/form'
import 'components/btn'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from 'components/field-renderer'
import { loginRequest } from 'actions/auth'
import logoWhite from './logoWhite.svg'

export const required = value => (value ? undefined : 'Required')

const LoginForm = ({ handleSubmit, invalid, submitting }) => {
  const submit = (values, dispatch) => {
    dispatch(loginRequest(values))
  }

  const submitButtonDisabled = invalid || submitting

  return (
    <div className="Section">
      <div className="Main">
        <img className="logoWhite" src={logoWhite} height="34px" width="39px" alt="Logo" />
        <form className="Form" onSubmit={handleSubmit(submit)}>
          <Field
            placeholder="Email"
            name="email"
            type="email"
            component={renderField}
            validate={[required]}
          />
          <Field
            placeholder="Password"
            name="password"
            type="password"
            component={renderField}
            validate={[required]}
          />
          <button className="Btn" type="submit" disabled={submitButtonDisabled}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)
