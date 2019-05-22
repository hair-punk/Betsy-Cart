Couple things to note:
-DB is mongoDB,
-To reseed database run ~npm run reset
    this will drop the database and run the seeder again
    you do not need to use any other DB terminal scripts at all
-Port is 3002
-I imagine it should pipe into proxy servers easily. The one thing I anticipate being a potential issue is I set the elements width to be 99%. That is 99% of the container's width. You may need to up those to 100% depending on how you impelment this. You can change this throughout the CSS stylesheet.
- to run tests, run ~npm run test
    I do not have test watch on. It does not work.
