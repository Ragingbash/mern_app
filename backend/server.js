const app = require('./app')
const connectDatabase = require('./config/Database')
const dotenv = require('dotenv');
// const port = 8080;
// const nodevn = 'development';
dotenv.config({ path:'backend/config/config.env'})

//Connecting Database
connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})