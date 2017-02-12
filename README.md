# Macho-test
This is a landing page created base on Macho Studio's test. 

Redux is used for handling state changes in 
**Navigation**, **Product** and **Works** sections. More specifically, [the ducks modular structure](https://github.com/erikras/ducks-modular-redux) is used. Some 
may argue it is a overkill for using state in these sections, the main purpose doing so is to show the work flow of 
Redux in one of the suggested structures for production environment.  

###Demo
A demo is hosted on AWS S3 at [http://macho.test.s3-website-us-west-2.amazonaws.com/#/](http://macho.test.s3-website-us-west-2.amazonaws.com/#/)

###Installation Guide
First, download the repo. Under the root directory of the project, run `npm install` to 
install dependencies. 

Then build the project using 
````
npm run dev
````

Once the project is built successfully, you can run a local server to host it 

````
firebase serve
````

The website can then be visited at [http://localhost:5000](http://localhost:5000). The firebase toolset is used here 
for hosting locally for simplicity. If you want, you can also host it however you want.  
 

###Test
Unit tests have been created using Jest for Redux reducers. Run the tests using

````
npm run test
````   