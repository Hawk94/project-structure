export const setAuthToken = ({ access_token }) => {
  try {
    if (
      access_token !== undefined
    ) {
      localStorage.setItem('access_token', access_token)
    }
  } catch (err) {
    console.error('Auth tokens error: ', err.message)
  }
}

export const deleteAuthToken = () => {
  localStorage.removeItem('access_token')
}

export const getAuthToken = () => {
  const accessToken = localStorage.getItem('access_token')

  return {
    accessToken
  }
}
