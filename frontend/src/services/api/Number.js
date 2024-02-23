import axios from 'axios'

class NumberAPI {
  static Triangle = async(data) => {
    try {
      const response = await axios.post('http://localhost:1009/number/triangle', data)
      if(response) { return response }
    }
    catch(err) { console.log(err) }
  }

  static Odd = async(data) => {
    try {
      const response = await axios.post('http://localhost:1009/number/odd', data)
      if(response) { return response }
    }
    catch(err) { console.log(err) }
  }

  static Prime = async(data) => {
    try {
      const result = await axios.post('http://localhost:1009/number/prime', data)
      if(result) { return result }
    }
    catch(err) { console.log(err) }
  }
}

export default NumberAPI