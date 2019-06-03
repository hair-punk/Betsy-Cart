Couple things to note:
-DB is mongoDB,
-To reseed database: ~npm run reset
    this will drop the database and run the seeder again
    you do not need to use any other DB terminal scripts at all
-To run webpack compliation: ~npm run build
-To push that bundle to s3 bucket & get a console.log of that bucket's url:  ~npm run deploy     
-the bundle deploy will work but only if you run the server  & db locally in present state.
-Tests will not work without server running

Docker: 
	-to make this file work with docker and not local you need to do a global search (cmd+ shft+f) of:      dockerSwitch
			-follow those instructions. You only need to switch the commenting out of the lines. This will make it not work with the local host. 
	-Docker image will not run if server is running already. 
	-The only problem with my docker image is that it is not taking http requests from client. Something is wrong with the urls that the reqs coming from the app.jsx componenet. In present state those may need to be changed for docker, come to think of it. Talk to Adam for the answer, or me in a few weeks when I get back to this hah!
	-I was able to get it to on the item-price clickhandler  randomizer call within the docker image, but no the api request during component did mount. Both calls are in app.jsx

-once you have docker set up and you are in the project folder, type:
 docker-compose build
 -let it build then type
 docker-compose up
- and your server should be running on whatever port you'd normally use, at either the 127.0.etc prefix or the localhost. That said, if it is working and the api requsts are working(click the price of item to test this) then i think it is ready to deploy to aws with little effort. You will know any api request is working becasue the item title will not begin with "brokenAPIitem" which is the stock state in the app.jsx



-Port is 3006
- to run tests, run ~npm run test
    I do not have test watch on. It does not work.. you must ctrl-c and type npm run test again to re-run.



structure  of my client because i used confusing file names
var App = {
	Rating: { stars: {} },
	Header: {},
	Options: { Quantity: {}, Option: {}, PeopleWantThis: {} },
	Deets: { Deet: {} },
	Shipping: {},
};