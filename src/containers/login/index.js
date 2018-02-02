import 'components/form'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from 'components/field-renderer'
import { loginRequest } from 'actions/auth'

export const required = value => (value ? undefined : 'Required')

const LoginForm = ({ handleSubmit, invalid, submitting }) => {
  const submit = (values, dispatch) => {
    dispatch(loginRequest(values))
  }

  const submitButtonDisabled = invalid || submitting

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        placeholder="Email"
        name="email"
        type="email"
        component={renderField}
        className="input"
        validate={[required]}
      />
      <Field
        placeholder="Password"
        name="password"
        type="password"
        component={renderField}
        className="input"
        validate={[required]}
      />
      <button className="submit" type="submit" disabled={submitButtonDisabled}>
        Login
      </button>
    </form>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)
