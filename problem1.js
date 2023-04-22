// i have  worked on Prime Problem and Palindrome problem [ will intentionally write the incorrect code ].

// str = "abc" 
// then we  have to find  is it  Palindrome  or not ?


let str= "aabaa";
let bag = "";


for ( i =str.length-1 ; i>=0; i--){
bag = bag+str[i];
}
 if ( str==bag){
   console.log( "Palindrome");
   
 }
else {
  console.log("not palindrome")
}

// console.log(str);
// console.log(bag)
