const express = require('express') //importing express package
const app = express() // defining an app
const port = 3000 // choosing a port

//harry.txt ko public folder ke andar daal do 
//app.use(express.static('public'));// this is saying that public folder ko public bana do

// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
  })

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
  })

  app.get('/blog/:slug', (req, res) => {

    // logic to fetch {slug} from the db
    // fro url: http://127.0.0.1:3000/blog/intro-to-js?mode=dark&region=in
      console.log(req.params) // will output {slug: 'intro-to-padosi'}
      console.log(req.query) // will output  {mode: 'dark', region: 'in'}


    res.send(`Hello ${req.params.slug}`)
  })

//   app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello Javascript!')
//   })



//   app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Hello PY!')
//   })

  // lekin kya itne saare endpoints banane ki jaroorat hai ans hai nahi
 //     

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})