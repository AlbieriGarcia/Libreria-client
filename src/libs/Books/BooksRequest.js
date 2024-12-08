import {BaseUrl} from '@/libs/ApiConfi'

export const getBooks = async (params) => {

    const data = {}


    try {
        const response = await fetch(`${BaseUrl}/books/getBooks`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
    
        return response.json()
      } catch (error) {
        throw new Error(error)
      }
  }