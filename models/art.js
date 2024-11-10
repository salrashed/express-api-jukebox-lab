const mongoose = require('mongoose');


const artSchema = mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  }
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;