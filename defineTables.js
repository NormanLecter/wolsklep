const Sequelize = require('sequelize');
const dbConnection = require('./dbConnection');

// connection to the database
const sequelize = dbConnection.sequelize;

// define tables
Sprzet = sequelize.define('SPRZET',{
  IdSprzetu: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique : true
  },
  Marka: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      is: /^([A-Z0-9]+).*$/
    }
  },
  Model: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Typ: {
    type: Sequelize.STRING,
    allowNull: true
  },
  PN: {
    type: Sequelize.STRING,
    allowNull: true
  },
  SN: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Uwagi: {
    type: Sequelize.STRING,
    allowNull: true
  } 
},
{
  tableName: 'SPRZET',
  freezeTableName: true,
  //version: true
}
);

Sprzedaz = sequelize.define('SPRZEDAZ',{
  IdSprzedazy: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique : true
  },
  DataRozpoczecia: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Cena: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  Opis: {
    type: Sequelize.STRING,
    allowNull: true
  },
  SprzetIdSprzetu: {
    type: Sequelize.STRING,
    foreignKey :  true,
    allowNull: false,
    unique: true
  }
},
{
  tableName: 'SPRZEDAZ',
  freezeTableName: true
}
);
Sprzedaz.belongsTo(Sprzet, {foreignKey: {  
  name: 'IdSprzetu',
  field: 'SprzetIdSprzetu'
}});

Zamowienia = sequelize.define('ZAMOWIENIA',{
  IdZamowienia: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique : true
  },
  Marka: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Model: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Typ: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  PN: {
    type: Sequelize.STRING,
    allowNull: true
  },
  SN: {
    type: Sequelize.STRING,
    allowNull: true
  },
  Uwagi: {
    type: Sequelize.STRING,
    allowNull: true
  },
  NumerKontaktowy: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  AdresEmail: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  }
},
{
  tableName: 'ZAMOWIENIA',
  freezeTableName: true
}
); 

Wysylka = sequelize.define('WYSYLKA',{
  IdWysylki: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique : true
  },
  Imie: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Nazwisko: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Miasto: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Ulica: {
    type: Sequelize.STRING,
    allowNull: true
  },
  NrDomu: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  NrMieszkania: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  KodPocztowy: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  NumerKontaktowy: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  SprzetIdSprzetu: {
    type: Sequelize.STRING,
    foreignKey :  true,
    allowNull: false,
    unique: true
  }
},
{
  tableName: 'WYSYLKA',
  freezeTableName: true
}
);
Wysylka.belongsTo(Sprzet, {foreignKey: {  
  name: 'IdSprzetu',
  field: 'SprzetIdSprzetu'
}});

Gwarancja = sequelize.define('GWARANCJA',{
  IdGwarancji: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique : true
  },
  DataRozpoczecia: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  DataZakonczenia: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Uwagi: {
    type: Sequelize.STRING,
    allowNull: true
  },
  
  SprzetIdSprzetu: {
    type: Sequelize.STRING,
    foreignKey :  true,
    allowNull: false,
    unique: true
  }
},
{
  tableName: 'GWARANCJA',
  freezeTableName: true
}
);
Gwarancja.belongsTo(Sprzet, {foreignKey: {  
  name: 'IdSprzetu',
  field: 'SprzetIdSprzetu'
}});

module.exports  = {Sprzet, Sprzedaz, Zamowienia, Gwarancja, Wysylka};