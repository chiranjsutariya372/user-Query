const mongoose= require('mongoose');

let studentSchema= mongoose.Schema({
    name: String,
    gender: String,
    class: String,
    section: String,
    maths: Number,
    science: Number,
    english: Number
})

let sutudent=mongoose.model('Sutudenthome',studentSchema);
module.exports = sutudent;