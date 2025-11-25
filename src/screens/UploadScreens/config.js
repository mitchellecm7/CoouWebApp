import { Client, Databases, Storage, ID, Account, Query } from "appwrite";

// Base client (your existing one)
const client = new Client();
client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject("676cc024000ad5ed402a")             
  // .setPlatform('com.officialcoouapp');

// Client 1
const client1 = new Client();
client1
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('676cc024000ad5ed402b') 
  // .setPlatform('com.officialcoouapp');

// Client 2
const client2 = new Client();
client2
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject('676cc024000ad5ed402c')
  // .setPlatform('com.officialcoouapp');

        
// Client 3
const client3 = new Client();
client3
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('676cc024000ad5ed402d')
  // .setPlatform('com.officialcoouapp');

// Services for base client
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// Services for client1
const account1 = new Account(client1);
const databases1 = new Databases(client1);
const storage1 = new Storage(client1);

// Services for client2
const account2 = new Account(client2);
const databases2 = new Databases(client2);
const storage2 = new Storage(client2);

// Services for client3
const account3 = new Account(client3);
const databases3 = new Databases(client3);
const storage3 = new Storage(client3);

// Constants
const bucketId = 'pdfs_bucket1';
const projectId = '676cc024000ad5ed402a';
const projectId1 = '676cc024000ad5ed402b';
const projectId2 = '676cc024000ad5ed402c';
const projectId3 = '676cc024000ad5ed402d';
const databaseId = 'Coou_App';
const collectionId = 'Pdf_metadata';

export {
  // Base client exports
  account, databases, storage, client,
  
  // Client 1 exports
  account1, databases1, storage1, client1,
  
  // Client 2 exports
  account2, databases2, storage2, client2,
  
  // Client 3 exports
  account3, databases3, storage3, client3,
  
  // Common exports
  databaseId, collectionId, Query, ID, bucketId,
   projectId, projectId1, projectId2, projectId3,  
};