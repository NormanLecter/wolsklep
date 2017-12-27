var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    IdUzytkownika: Number,
    Login: String,
    Haslo: String,
    Imie: String,
    Nazwisko: String,
    Admin: Boolean,
    NumerKontaktowy: String,
    AdresEmail: String
  });

  module.exports = mongoose.model('User', UserSchema);