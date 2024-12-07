import {BaseUrl} from '@/libs/ApiConfi'

export const signin = async (params) => {
    try {
        const response = await fetch(`${BaseUrl}/auth/signin`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: params.email,
            password: params.password,
          })
        })
    
        return response.json()
      } catch (error) {
        throw new Error(error)
      }
}

export const signup = async (params) => {
    try {
        const response = await fetch(`${BaseUrl}/auth/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: params.username,
            email: params.email,
            password: params.password,
          })
        })
    
        return response.json()
      } catch (error) {
        throw new Error(error)
      }
}

export const verifyToken = async (token) => {
    try {
        const response = await fetch(`${BaseUrl}/auth/verifyToken`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        })
    
        return response.json()
      } catch (error) {
        throw new Error(error)
      }
}