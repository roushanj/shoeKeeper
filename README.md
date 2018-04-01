# shoeKeeper


    Api Reference :
    
    Link:  https://lessshoe-gnllusatmu.now.sh 
    
    /api
      1./add -- Add shoe
          Request Type- POST
          Header- content-type - application/json
          {
	            "name":"string",
	            "color":"string",
	            "size":int,
	            "quantity":int
          }
      2./inventory -- Get Last Added shoe 
          Request type - GET
      
      3./update/:id
         Request Type - PUT
	 Header- content-type - application/json
          {
	            "name":"string",
	            "color":"string",
	            "size":int,
	            "quantity":int
          }
      4./filter/:id -- Get A Particular Shoe
        Request type - GET
      
      5./del/:id  -- Delete A Particular item
      	Request Type - DELETE
	
      6./ -- Get ALL Shoe
      	Request type - GET
	
   B /collection/track --- Find Stock in inventory	
	
	
	
	
	
	
