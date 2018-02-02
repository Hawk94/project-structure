export const parseResponseErrors = response => {
  let errors = []

  response.data.errors.forEach(error => {
    errors.push(error.message)
  })

  return errors
}
