var mongoose = require('mongoose');

var OfflineSchema = new mongoose.Schema({
    IdLogowania: Number,
    IdUzytkownika: Number,
    OdKiedyWylogowany: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('OfflineUsers', OfflineSchema);