const jsonServer = require('json-server')
const app = jsonServer.create()
const path = require('path')
const express = require('express')
const middlewares = jsonServer.defaults()
const router = jsonServer.router('db.json')
const PORT = process.env.PORT || 5000

app.use('/db', middlewares, router)
app.use(express.static(path.join(__dirname, 'build')))

/* app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
}) */
app.use(express.static('build'))

app.get('/health', (reg, res) => {
  res.send('ok')
} )

app.get('/version', (reg, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})