module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/clock', function(req, res) {
        res.render('colorclock');
    });
};

