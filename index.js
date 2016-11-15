var express = require('express');
var app = express();
var middleware = require('swagger-express-middleware');

app.set('port', (process.env.PORT || 5000));

middleware('swagger.yaml', app, function(err, middleware) {
    // Add all the Swagger Express Middleware, or just the ones you need.
    // NOTE: Some of these accept optional options (omitted here for brevity)
    app.use(
        middleware.metadata(),
        middleware.CORS(),
        middleware.files(),
        middleware.parseRequest(),
        middleware.validateRequest(),
        middleware.mock()
    );

    app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
    });
});
