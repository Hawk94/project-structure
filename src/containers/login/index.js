import 'components/Form'
import 'components/Btn'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from 'components/fieldRenderer'
import { loginRequest } from 'ducks/auth'

export const required = value => (value ? undefined : 'Required')

const LoginForm = ({ handleSubmit, invalid, submitting }) => {
  const submit = (values, dispatch) => {
    dispatch(loginRequest(values))
  }

  const submitButtonDisabled = invalid || submitting

  return (
    <div className="Section">
      <div className="Main">
        <form className="Form" onSubmit={handleSubmit(submit)}>
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
          <button className="Btn" type="submit" disabled={submitButtonDisabled}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({ form: 'login' })(LoginForm)
