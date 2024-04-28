const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config();

//middleware
app.use(express.json());
app.use(cors());

// username: adharagrawal98, password: 8Hvnw9rU8XORy6CB

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobhunt.7prnjpm.mongodb.net/?retryWrites=true&w=majority&appName=jobHunt`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create database
    const db = client.db("jobHunt");
    const jobsCollection = db.collection("demoJobs");
    // post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createdAt = new Date(); // Corrected 'createAt' to 'createdAt'
      const result = await jobsCollection.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Cannot insert data",
          status: false
        });
      }
    });

    //get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollection.find({}).toArray();
      res.send(jobs);
    });

    //get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
    const jobs = await jobsCollection.find({postedBy: req.params.email}).toArray();
    res.send(jobs);
    });

    //get single job using id

    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobsCollection.findOne({ _id: new ObjectId(id) });
      res.send(job);
    });
      // const result = await jobsCollection.findOne(query);
      // res.send(result); 

    //delete a job

    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.deleteOne(query);
      res.send(result);
    });

    //update a job

    // app.patch("/update-job/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const body = req.body;
    //   const filter = { _id: new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updateDoc = {
    //     $set: {
    //       jobTitle: body.jobTitle,
    //       companyName: body.companyName,
    //       companyLogo: body.companyLogo,
    //       minPrice: body.minPrice,
    //       maxPrice: body.maxPrice,
    //       salaryType: body.salaryType,
    //       jobLocation: body.jobLocation,
    //       postingDate: body.postingDate,
    //       experienceLevel: body.experienceLevel,
    //       employmentType: body.employmentType,
    //       description: body.description,
    //       skills: body.skills
    //     },};
    //   const result = await jobsCollection.updateOne(filter, updateDoc, options);
    //   res.send(result);
    // });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
