const express =  require('express')
const path = require('path')
const app = express(); 
app.listen(3000,()=>{
    console.log('app corriendo en el puerto 3000')
})
const publicPath = path.resolve(__dirname,'./public') //aca le digo a express que la carpeta public es una carpeta de archivos estaticos 
app.use(express.static(publicPath)) // aca lo uso 

app.get('/', function (req,res){
    res.sendFile(path.resolve(__dirname,'./src/views/index.html'))
})