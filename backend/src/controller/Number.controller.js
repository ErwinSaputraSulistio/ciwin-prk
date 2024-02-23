class Generator {
  static Triangle = (req, res) => {
    if(req.body.number) {
      const input = req.body.number.toString()
      const triangleNumberArray = []
      for(let i = 0; i < input.length; i++) {
        triangleNumberArray.push(`${input.slice(i, i+1)}${'0'.repeat(i + 1)}`)
      }
      res.json({
        status: 200,
        result: triangleNumberArray
      })
    }
    else {
      res.json({
        status: 400,
        message: 'No Input'
      })
    }
  }

  static Odd = (req, res) => {
    if(req.body.number) {
      const input = req.body.number
      const oddNumberArray = []
      for(let i = 0; i <= input; i++) {
        if(i % 2 !== 0) {
          oddNumberArray.push(i)
        }
      }
      res.json({
        status: 200,
        result: oddNumberArray
      })
    }
    else {
      res.json({
        status: 400,
        message: 'No Input'
      })
    }
  }
  
  static Prime = (req, res) => {
    if(req.body.number) {
      const input = req.body.number
      const primeArrayNumber = []
      for(let i = 2; i <= input; i++) {
        let count = 0;
        for(let j = i; j > 0; j--) {
          if(count > 2) { break }
          else { if(i % j === 0) { count += 1 } }
        }
        if(count === 2) { primeArrayNumber.push(i) }
      }
      res.json({
        status: 200,
        result: primeArrayNumber
      })
    }
    else {
      res.json({
        status: 400,
        message: 'No Input'
      })
    }
  }
}

export default Generator