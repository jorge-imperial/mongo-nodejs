const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://root:P4ssw0rd@cluster1.hqulf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });


function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  
async function run() {

  let to = 0;
  var args = process.argv.slice(2);

  if (args && args[0]) 
    to = args[0];
 
  console.log("Timeout: " + to + "ms");

  try {
    await client.connect();
    const database = client.db('test');
    const collection = database.collection('test');
 

    setInterval( function() {
      let random_age = between(18,99);
      const query = { age: random_age };
      const doc = collection.findOne(query).then( (ret) => {
        if (ret) console.log(ret.telefono);
      });
    }, 
    to);

  } catch{
    console.log("error connecting to Atlas");
  
  } 
  //finally {
    // Ensures that the client will close when you finish/error
  //  await client.close();
  //}
}
run().catch(console.dir);

