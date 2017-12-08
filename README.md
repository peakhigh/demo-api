Demo API project 

This project will provide endpoints to filter the request payloads based on type and workflow. 
It also contains other points for serving the health check.

Tools and middleware used

TypeScript
express
Node.js 8.x (latest version)
Gulp

Object oriented approach is used full extensively in the project. Pojos/models created for the request payloads to filter and deliver 
the compact response versions.

To build & run the project

npm install;
npm install -g gulp;
gulp build;
npm run start;

Also, good documentation is provide to understand the flow and tools like jsdoc,esdoc etc can be used to generate the docs automatically as the documentation is written according to the standards.

Middlewares are used to handle 400 bad requests (invalid jsons), 500 internal server errors etc.

Also, Tslint is used to maintain the coding standards.

Tests not included.
