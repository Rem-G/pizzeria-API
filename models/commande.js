var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommandeSchema = new Schema({
  pizzas : [{
      type: Schema.ObjectId,
      ref: 'Pizza',
  }],
  client : {
    type: Schema.ObjectId,
    ref: 'Client',
  },
  createdAt : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Commande', CommandeSchema);
