const express = require('express')
const path = require('path')
const compression = require('compression')

const app = express()

app.use(compression())
app.use(
  express.static('dist', {
    redirect: false,
    immutable: true,
  })
)

app.use(express.static('public', { redirect: false }))
app.set('views', path.join(__dirname, 'dist'))
app.set('view engine', 'hbs')
app.use('/public', express.static('dist/public'));

app.get('/', (req, res) => {
  res.render('index.hbs')
})

const options = {
  port: 9501,
}

app.listen(options, () => {
  console.log(`Application is running on port: ${options.port}`)
})
