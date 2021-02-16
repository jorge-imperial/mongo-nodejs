const { MongoClient } = require("mongodb");

 
const uri =
  "mongodb+srv://root:P4ssw0rd@cluster1.hqulf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });


function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

async function randomUpdate() {
  const database = client.db('test');
  const collection = database.collection('test');
  
    let random_age = between(18,99);
    const query = { age: random_age };

    let k = between(-2,2);
      const updateDoc = {
        $inc: {
          age: k
        }
      };
      console.log(Date.now() + " " +random_age + " " + k);
      const doc = await collection.updateMany(query, updateDoc);
    
}
    
  
async function run() {

  let to = 0;
  var args = process.argv.slice(2);

  if (args && args[0]) 
    to = args[0];
 
  console.log("Timeout: " + to + "ms");

  try {
    await client.connect();
    setInterval(randomUpdate, to);  

  } catch {
    // Ensures that the client will close when you finish/error
    console.log("db error while connecting");
  }
}
run().catch(console.dir);

