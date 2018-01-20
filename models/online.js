var mongoose = require('mongoose');

var OnlineSchema = new mongoose.Schema({
    IdLogowania: Number,
    IdUzytkownika: Number,
    OdKiedyZalogowany: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('OnlineUsers', OnlineSchema);