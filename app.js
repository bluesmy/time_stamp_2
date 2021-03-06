const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000


app.use((req, res, next) => {
  req.requestTime = Date.now()
  const time = moment().format('YYYY-MM-DD HH:mm:ss')
  res.on('finish', () => {
    res.requestTime = Date.now()
    totalTime = res.requestTime - req.requestTime
    console.log(`${time} | ${req.method} from ${req.url} | total time: ${totalTime}ms`)
  })
  next()
})

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')

})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
