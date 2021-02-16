# mongo-nodejs
NodeJS scripts to test MongoDB 

These scripts will create a workload for an environment in Atlas. There are two scripts right now

**update.js**
This will update a collection (test.test).  It has one parameter, which is a timeout to throttle the infinite loop of update_many()

**find.js**
A script that will query the test.test collection. It accepts one parameter to throttle whe query loop.

