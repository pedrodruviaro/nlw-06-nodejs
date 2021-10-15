import express from 'express'

const app = express()

app.get('/test', (req, res) => {
    return res.send('Hello from NLW')
})

app.post('/test', (req, res) => {
    return res.send('Hello from POST')
})

app.listen(3000, () => console.log('Server is running'))
