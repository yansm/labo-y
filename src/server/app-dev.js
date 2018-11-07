import app from './app'

// dev plugin start
// dev plugin end

const port = app.get('port')
app.listen(port, () => {
  console.info(`server start port: ${port}, env: development`)
})