const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
  const userData = [
    {
      "id": 1,
      "name": "Cole Gonzales",
      "username": "Strayberham"
    },
    {
      "id": 2,
      "name": "Dausen Loupe",
      "username": "Strayberham"
    },
    {
      "id": 3,
      "name": "Ya Mama",
      "username": "Strayberham"
    }
  ]

  res.send(userData)
})

module.exports = router