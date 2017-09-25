const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
});


// this right here is what controls the collection is called inside of the mongo side of things 
// mongosee se encarga el de ir a MongoDB y crear por nosotros la coleccion "User";
// this thing is not representing a single user, it represents the entire collection of data;
const User = mongoose.model('user', UserSchema);

module.exports = User;


