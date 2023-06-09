const http = require('http');
const express = require('express');
const app = express();

let notes = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
});

app.get('/api/persons', (req, res) => {
    res.json(notes)
});

app.get('/info', (req, res) => {
    const date = new Date()
    res.send(`<p>Phonebook has info for ${notes.length} people</p><p>${date}</p>`)
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
  
    if (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
});

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
  
    res.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const note = {
      content: body.content,
      important: body.important || false,
      id: generateId(),
    }
  
    notes = notes.concat(note)
  
    response.json(note)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});