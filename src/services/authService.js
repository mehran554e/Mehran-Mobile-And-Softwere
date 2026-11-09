
const API_URL = 'http://localhost:5000/api/auth'

// Shared API request function
const authRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,

    // Required for HTTP-only authentication cookies
    credentials: 'include',

    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong.')
  }

  return data
}

// Customer signup
export const signupUser = async (userData) => {
  return authRequest('/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  })
}

// Customer login
export const loginUser = async (email, password) => {
  return authRequest('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

// Customer logout
export const logoutUser = async () => {
  return authRequest('/logout', {
    method: 'POST',
  })
}

// Get logged-in customer profile
export const getCurrentUser = async () => {
  return authRequest('/me', {
    method: 'GET',
  })
}
