# Various screens to support Dev Project Management for OpenMRS

## Before building

    npm install -g mocha

## Run webapp

    $ npm start
    
And see the webapp running on http://localhost:3000

### Testing the docker build locally

    $ docker run --name pmtool -d -p 3000:3000 djazayeri/openmrs-pmtool:latest

## Prod

Note: this approach uses LINK networking, which will eventually be deprecated in Docker.
    
### dockerhub does builds automatically

Whenever you commit code to this repository it is automatically built as djazayeri/openmrs-contrib-scrumbot:latest 

### run webapp+bot on docker on Digital Ocean

    // this is automated as ./update-web
    $ docker pull djazayeri/openmrs-contrib-scrumbot:latest
    $ docker rm web
    $ docker run -d --restart="unless-stopped" -p 80:3000 --name pmtool djazayeri/openmrs-contrib-scrumbot:latest
