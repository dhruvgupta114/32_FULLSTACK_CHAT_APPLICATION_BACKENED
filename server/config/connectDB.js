const mongoose = require('mongoose')

async function connectDB(){
    try {
        const source = process.env.MONGODB_URI
        await mongoose.connect(source)

        

        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("Connect to DB")
        })

        connection.on('error',(error)=>{
            console.log("Something is wrong in mongodb ",error)
        })
    } catch (error) {
        console.log("Something is wrong ",error)
    }
}

module.exports = connectDB