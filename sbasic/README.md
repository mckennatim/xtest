react-router-redux basic example
=================================

This is a basic example that demonstrates rendering components based
on URLs with `react-router` as well as connecting them to Redux state.
It uses both <Link> elements as well as the `push` action creator
provided by react-router-redux.

This example also demonstrates integration with
**[redux-devtools](https://github.com/gaearon/redux-devtools) ^3.0.0**

**To run, follow these steps:**

1. Install dependencies with `npm install` in this directory (make sure it creates a local node_modules)
2. By default, it uses the local version from `src` of react-router-redux, so you need to run `npm install` from there first. If you want to use a version straight from npm, remove the lines in `webpack.config.js` at the bottom.
3. Start build with `npm start`
4. Open [http://localhost:8080/](http://localhost:8080/)

-

If you want to run the example from the npm published version of
**react-router-redux**, remove the alias in `webpack.config`
to the source from line 21.

This example uses the latest version, switch to a specific tag to use a stable version:

e.g. [react-router-redux tag 1.0.2](https://github.com/reactjs/react-router-redux/tree/1.0.2/examples/basic)

### NGINX setup for history pushState for multiple apps/locations 

At this point, for one subdomain, I can deploy an uglified react-router-redux basic example and have it work with the history api (pushState). 

        server {
            listen 80;
            root /home/iot/public_html/xtest;
            server_name iot.sitebuilt.net;
            index index.php index.html index.htm;
            location / {
                try_files $uri $uri/ /index.html;
            }
        }

you can see this at http://iot.sitebuilt.net
'in xtest

Links: Home Foo Bar
Go to /foo
YO Home boy fu

Some ddd state changes:1IncreaseDecrease'

I would like to use that subdomain for more than one SPA. So I tried adding a other location (with a similar app for now)

        server {
            listen 80;
            root /home/iot/public_html/xtest;
            server_name iot.sitebuilt.net;
            index index.php index.html index.htm;
            location / {
                try_files $uri $uri/ /index.html;
            }
            location ^~ /basic {
                try_files $uri $uri/ /basic/index.html;
            }
        }

So I created a /home/iot/public_html/xtest/basic and put a similar app there. It finds the right index.html but does nothing but display the heading.

        <!DOCTYPE html>
        <html>
          <head>
            <title>react-router-redux basic example</title>
            <meta charset="utf8"/>
          </head>
          <body>
            <h4>in xtest/basic</h4>
            <div id="mount"></div>
            <script src="./vendors.js"></script>
            <script src="./app.js"></script>
          </body>
        </html>


How would I be aple to have multiple apps with pushstate routing running off one NGINX subdomain? 

(I have tried to use the idesas of "How to setup NGINX to deploy different Single Page Apps (SPA's… i.e static files) depending on location (under same server_name) with subroutes" without success)