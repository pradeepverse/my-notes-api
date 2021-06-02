const mongoose = require('mongoose');

try {
    let MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
    let MONGO_ROOT_USERNAME = process.env.MONGO_ROOT_USERNAME;
    let MONGO_ROOT_PASSWORD = process.env.MONGO_ROOT_PASSWORD;
    console.log('MONGO_CONNECTION_STRING...');
    console.log(MONGO_CONNECTION_STRING);
    console.log('MONGO_ROOT_USERNAME...');
    console.log(MONGO_ROOT_USERNAME);
    console.log('MONGO_ROOT_PASSWORD...');
    console.log(MONGO_ROOT_PASSWORD);
    mongoose.connect(`mongodb://${MONGO_ROOT_USERNAME}:${MONGO_ROOT_PASSWORD}@${MONGO_CONNECTION_STRING}/notesdb?authSource=admin`, {useNewUrlParser: true, useUnifiedTopology: true});
} catch (error) {
    console.log('Error while connecting to mongoose', error);
}

const Note = mongoose.model('Note', {
    title: String,
    content: String,
    color: String
});

module.exports.create = async (data) => {
    const { title, content, color } = data;
    const note = new Note({title, content, color});
    const result = await note.save();
    return result;
}

module.exports.update = async (id, data) => {
    const result = await Note.updateOne({_id: id}, data);
    return result;
}

module.exports.fetch = async() => {
    const notes = await Note.find(); 
    return notes;
}

module.exports.delete = async(id) => {
    const result = await Note.deleteOne({_id: id});
    return result;
}