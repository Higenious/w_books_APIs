# W_Books_API



## Technologies 
  - Node js      10.16.3
  - NPM          6.11.3
  - Mongo DB     3.6
  - TypeScript   3.7.3



### Installation

```sh
$ Donwlaod zip or clone project
$ Navigate to Folder
$ npm install
$ npm start
```
```sh
$ First Create Author.
```



####  

-	API for Create Author   
       `https://localhost:5500/api/v1/user/createuser`

      body  : JSON
           
          {
              "name"  :"chetan",
       	     "email" : "chetantayade@gmailc.com",
              "password" : "password123",
               "city" : "new york"
         }
    

-	API for Author Login   
       `https://localhost:5500/api/v1/user/login`
    
     body  : JSON
           
         {
          	"username" : "chetantayade@gmailc.com",
	          "password"  :"password123"    
         }




-	API for Publish Book   
      `https://localhost:5500/api/v1/book/publishbook`
    
     HTTP Method :  POST 
   
-   ```sh
         Authorization  : token
    ```

     body : JSON
     
          {
          	"title" : "C program",
	          "desciprtion" : "learn and implemnt",
	          "author": "chetan",
	          "cover"  : "google.com",
	          "price": 132,
	          "publisher_uuid" : "598ee8c0-1ea0-11ea-b259-f79f46a98139"
         }



-	API for Get All Published Books   
      `https://localhost:5500/api/v1/book/getallbook`
    
     HTTP Method :  GET 
   
-   ```sh
         Authorization  : token
    ```


-	API  Get Book by title   
      `https://localhost:5500/api/v1/book/getbookbytitle`
    
     HTTP Method :  POST 
   
-   ```sh
         Authorization  : token
    ```

     body : JSON
     
          {
         
       	    "book_name" : "C program"

          }


-	API  for unpublish book 
      `https://localhost:5500/api/v1/book/unpublish`
    
     HTTP Method :  POST 
   
-   ```sh
         Authorization  : token
    ```

     body : JSON
     
       {
          
       	  "book_name"     : "C program",
	      "author_uuid"  : "598ee8c0-1ea0-11ea-b259-f79f46a98139" 

       }


