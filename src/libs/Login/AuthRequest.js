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