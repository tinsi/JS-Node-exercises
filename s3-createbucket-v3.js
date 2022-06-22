/*
Purpose:
s3_createbucket.js demonstrates how to create an Amazon S3 bucket.
Inputs (replace in code):
- BUCKET_NAME
Running the code:
nodes3_createbucket.js

GITTIÄ VARTEN, TÄÄ ON DEVISSÄ TEHTY MUUTOS pakkopushauksen jälkeen. 
Tässä on DEV2 branchin tiedosto.
*/

// snippet-start:[s3.JavaScript.buckets.createBucketV3]
// Get service clients module and commands using ES6 syntax.
import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.js";

// Set the bucket parameters.

export const bucketParams = { Bucket: "tiinanuusibucket5" };

// Create the Amazon S3 bucket.
export const run = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand(bucketParams));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();
// snippet-end:[s3.JavaScript.buckets.createBucketV3]
// For unit tests only.
// module.exports ={run, bucketParams};
