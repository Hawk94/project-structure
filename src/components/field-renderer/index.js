import React from 'react'

const renderField = ({
  input,
  placeholder,
  className,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="inputContainer">
      <input {...input} className="input" placeholder={placeholder} type={type} />
      {touched && error && <div className="errorContainer">{error}</div>}
    </div>
  )
}

export default renderField
