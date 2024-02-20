const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://fardinKhan:AyR90RgJ2MOwqZzQ@cluster0.qmu47yh.mongodb.net/InstaFake")

const userSchema = mongoose.Schema({
    username : String,
    password : String,
    

})

const User = mongoose.model('User', userSchema)

module.exports = { User }