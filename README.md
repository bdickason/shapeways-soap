shapeways-soap
==============

Sample application for testing the Shapeways SOAP API


## Installation

```
1) Download NodeJS - http://nodejs.org/
2) Download npm - http://nodejs.org/download/
3) Install node-gyp globally - `sudo npm install -g node-gyp`
4) Run `npm install` from the base directory to install necessary modules
```

## Configuration

This test app allows you to set configuration environmentvariables 

**Environment Variables (preferred)** - Node can easily read variables from your local environment, which allows you to securely set configuration variables like Consumer Key, etc locally rather than in the code.

In your *nix console:
```
export SHAPEWAYS_USERNAME = 'your_username_here'
export SHAPEWAYS_PASSWORD = 'your_password_here'
export SHAPEWAYS_APPLICATION_ID = 'your_application_id_here'
```

## Usage

```
node app.js <filename> <title>
```
