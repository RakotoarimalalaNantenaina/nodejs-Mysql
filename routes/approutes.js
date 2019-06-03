module.exports = function(app) {
    var route = require('../controlleur/appController');

    app.route('/profil')
      .post(route.create)
      .get(route.read)
      .put(route.update);
    app.delete('/profil/:id', route.delete)
};