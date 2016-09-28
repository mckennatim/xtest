# sbhistory

## questions
### webpack historyApiFallback configuration for deep routes

webpack-dev-server can be set up to send you back to index.html and find your scripts for a single route like http://localhost:4301/sdr/ but when you put in a deeper route (or a single route with a / at the end) http://localhost:4301/sdr/dog it gets confused.

      devServer: {
        contentBase: './dist',
        historyApiFallback: true
      },

with http://localhost:4301/sdr/dog the server responds

    x GET http://localhost:4301/sdr/bundle.js 

adding /sdr to the the path in its search for bundle.js

How can I fix this. ... then I will try it on NGINX then with react-router then with navigo then with react-router-redux....   