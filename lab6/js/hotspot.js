// JavaScript Document
$( function() {
    $("map area").click( function(){
 
       if ($(this).attr("id") == "map") {
          $("#feedback").css("color","red");
          $("#feedback").html("No, USA is the third one");
       }
       if ($(this).attr("id") == "eggs") {
          $("#feedback").css("color","green");
          $("#feedback").html("Milk and Eggs, the most frequenly purchased items, are place in the back of the store to encourage impulse buying!");
       }
       if ($(this).attr("id") == "produce") {
        $("#feedback").css("color","green");
        $("#feedback").html("Fresh items, like produce and meat are found around the outside parameter of the market.");
     }
       if ($(this).attr("id") == "endcap") {
          $("#feedback").css("color","green");
          $("#feedback").html("The items found here are on paid promotion from the company hoping for an impulse buy. Dont' fall for it!");
       }
       if ($(this).attr("id") == "sales") {
        $("#feedback").css("color","green");
        $("#feedback").html("Sales signs in middle isles often direct you to visualy appealing but highly processed foods. Check your shopping list before putting these in your cart.");
     }
        if ($(this).attr("id") == "direction") {
        $("#feedback").css("color","green");
        $("#feedback").html("Keep to the outside isles while shopping to help you make healthiest choices.");
     }
   $("#feedback").css("backgroundColor","white");
 
    });
 }); //end main jQuery function
 
 
 