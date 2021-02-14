const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

app.use(express.json())

var morgan = require('morgan')
app.use(morgan('tiny'))

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    },
    {
        id: 5,
        name: "Erkki Esimerkki",
        number: "3-14159265"
    },
    {
        id : 6,
        name: "Maija Meikäläinen",
        number: "987654321"
    }
]

//päivämäärä infosivua varten
const date = Date().toLocaleString()

//etusivu
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

//kaikki henkilöt
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

//yksittäinen henkilö
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
  })

// yksittäisen henkilön poisto
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})


//random int id:tä varten
function generateId(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min) + min)
}
//yksittäisen henkilön lisäys
//ei kelpaa jos: nimi/numero puuttuu, nimi ei ole uniikki
app.post('/api/persons', (request, response) => {
    const body = request.body

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

    const person = request.body
    person.id = generateId(0, 10000)
    console.log(person)

    persons = persons.concat(person)
    response.json(person)
})

// /info sivu
app.get('/info', (req, res) => {
    res.send(
        `<div>
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${date}</p>
        </div>`
    )
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})