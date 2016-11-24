# Various screens to support Dev Project Management for OpenMRS

## Before building

    npm install -g mocha

## Run webapp

    $ npm start
    
And see the webapp running on http://localhost:3000

### Testing the docker build locally

    $ docker run --name pmtool -d -p 3000:3000 djazayeri/openmrs-pmtool:latest
