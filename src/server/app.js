import express from 'express'

const app = express()

// 设置端口号
app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => { 
  res.type('text/plain')
  res.send('hello world')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.info(404)
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message)
})

// 如果为入口文件，执行listen，如果不是，则为开发环境，在开发环境入口文件中执行
if (require.main === module) {
  const port = app.get('port')
  app.listen(port, () => {
    console.info(`server start port: ${port}, env: production`)
  })
}

export default app
