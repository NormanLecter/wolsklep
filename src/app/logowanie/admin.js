var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
    Imie: String,
    Nazwisko: String,
    Login: String,
    Haslo: String,
    NumerKontaktowy: String,
    AdresEmail: String
  });

  module.exports = mongoose.model('Admin', AdminSchema);