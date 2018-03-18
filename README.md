# Various screens to support Dev Project Management for OpenMRS

## Development

### Before building

    $ npm install -g mocha

### Run webapp

    $ npm start
    
And see the webapp running on http://localhost:3000

## Docker

### Automatic builds

There is an automatic build on Docker Hub at https://hub.docker.com/r/openmrs/openmrs-contrib-pmtool/

### Running in production

    $ docker pull openmrs/openmrs-contrib-pmtool:latest
    $ docker rm pmtool
    $ docker run -d -p 80:3000 --name pmtool openmrs/openmrs-contrib-pmtool:latest

