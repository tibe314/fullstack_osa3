const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

var morgan = require('morgan')
app.use(morgan('tiny'))

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345'
  },
  {
    id: 4,
    name: 'Mary Poppendick',
    number: '39-23-6423122'
  },
  {
    id: 5,
    name: 'Erkki Esimerkki',
    number: '3-14159265'
  },
  {
    id : 6,
    name: 'Maija Meikäläinen',
    number: '987654321'
  }
]

//kaikki henkilöt
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

//yksittäisen henkilön lisäys
//ei kelpaa jos: nimi/numero puuttuu, nimi ei ole uniikki
app.post('/api/persons', (request, response) => {
  const body = request.body

  //tsekkaus
  if(!body.name || !body.number) {
    return response.status(400).json({
      error: 'content is missing'
    })
  }
  var names = persons.map(function(person) {
    return person.name
  })
  if (names.includes(body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  //tsekkaus tehty, tässä ei pitäisi olla ongelmia

  const person = new Person({
    name: body.name,
    number: body.number,
    id: generateId(0, 10000)
  })

  person.save(function (error) {
    console.log(error)
  }).then(savedPerson => {
    response.json(savedPerson)
  })
})

//yksittäinen henkilö
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// yksittäisen henkilön poisto
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log(result)
      response.status(204).end()
    })
    .catch(error => next(error))
})


//random int id:tä varten
function generateId(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min) + min)
}

//error handler
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})