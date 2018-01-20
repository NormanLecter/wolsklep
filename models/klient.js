var mongoose = require('mongoose');

var KlientSchema = new mongoose.Schema({
    Imie: String,
    Nazwisko: String,
    Login: String,
    Haslo: String,
    NumerKontaktowy: String,
    AdresEmail: String
  });

  module.exports = mongoose.model('Klient', KlientSchema);