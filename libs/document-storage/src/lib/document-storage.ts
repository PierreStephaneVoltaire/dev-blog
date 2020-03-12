// Load the AWS SDK for Node.js
import * as AWS from 'aws-sdk';
import { ClientConfiguration, CreateBucketRequest, CreateBucketConfiguration, Bucket } from 'aws-sdk/clients/s3';
import { Endpoint } from 'aws-sdk';
import { CredentialsOptions } from 'aws-sdk/lib/credentials';

export class DocumentStorage {
  private readonly s3: AWS.S3 | undefined;
  constructor(local?: boolean) {
    const credentials = new AWS.Credentials({ "accessKeyId": process.env.aws_access_key_id || "na", "secretAccessKey": process.env.aws_secret_access_key || "na" })
    AWS.config.update({ "region": "us-east-1", credentials });
    const options: AWS.S3.ClientConfiguration = local ? { credentials, apiVersion: '2006-03-01', endpoint: 'http://localhost:4572' } : { credentials, apiVersion: '2006-03-01' }
    this.s3 = new AWS.S3(options);
  }
  listBuckets = async (): Promise<Bucket[]> => {
    return new Promise<Bucket[]>((resolve, reject) => {
      this.s3.listBuckets((err, data) => {
        if (err) {
          resolve([] as Bucket[])
        }
       resolve(data.Buckets)
      })

    });

  }

  createBuckets = (bucketParams = {
    Bucket: "Bucket",
    ACL: 'public-read'
  }) => {
    this.s3.createBucket(bucketParams, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Location);
      }
    });

  }
}


// Set the region

// Create S3 service object



// Create the parameters for calling createBucket
