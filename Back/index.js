const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.get('/', (req, res) => {
  console.log("got")
  return res.status(200).send({answer:42})
})

app.post('/a', (req, res) => {
  console.log(req.body.answer)
  return res.status(200).json({answer:'42'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})