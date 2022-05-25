btn = document.getElementById("btn")


//console.log(alert("hi"))
// To generate unique random numbers within specified range 
function myRandomInts(quantity, max){
    var m=0
    for(var i=1 ;i <=numberLength ; i++){
       
           
            document.getElementById(i).style.backgroundColor = "darkturquoise"
            
            // results=''
            c = 0;
           
            document.getElementById('display').innerText=""
            document.getElementById("nums").innerText=""
            newArr=[] 
            results =  Array.from(myRandomInt(90,90));
     
        // console.log( document.getElementById(i))
        // if(document.getElementById(i).style.backgroundColor == "green"){
        //     document.getElementById(i).style.backgroundColor == "white"
        // } Its an multiline comment.       
          
    }
    
   
    const arr = []
  
    while(arr.length < quantity){
      var candidateInt = Math.floor(Math.random() * max) + 1
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
    var arr1=arr.sort(sortNumbers);
    console.log(arr1)
    
    //check elements to push into rows inside the ticket
        if(checkRange(arr[0],1,4)){
            document.getElementById("1").innerText=arr[0]
        }else{
            document.getElementById("1").innerText=Math.floor(Math.random() * (3) ) + 1;
        }
        if(checkRange(arr[1],5,9)){
            document.getElementById("6").innerText=arr[1]
        }else{
            document.getElementById("6").innerText=Math.floor(Math.random() * (4) ) + 5;
        }
        if(checkRange(arr[2],10,19)){
            document.getElementById("11").innerText=arr[2]
        }else{
            document.getElementById("11").innerText=Math.floor(Math.random() * (9) ) + 10;
        }
        if(checkRange(arr[3],20,24)){
            document.getElementById("2").innerText=arr[3]
        }else{
            document.getElementById("2").innerText=Math.floor(Math.random() * (4) ) + 20;
        }
        if(checkRange(arr[4],25,29)){
            document.getElementById("7").innerText=arr[4]
        }else{
            document.getElementById("7").innerText=Math.floor(Math.random() * (4) ) + 25;
        }
        if(checkRange(arr[5],30,39)){
            document.getElementById("12").innerText=arr[5]
        }else{
            document.getElementById("12").innerText=Math.floor(Math.random() * (9) ) + 30;
        }
        if(checkRange(arr[6],40,44)){
            document.getElementById("3").innerText=arr[6]
        }else{
            document.getElementById("3").innerText=Math.floor(Math.random() * (4) ) + 40;
        }
        if(checkRange(arr[7],45,49)){
            document.getElementById("8").innerText=arr[7]
        }else{
            document.getElementById("8").innerText=Math.floor(Math.random() * (4) ) + 45;
        }
        if(checkRange(arr[8],50,59)){
            document.getElementById("13").innerText=arr[8]
        }else{
            document.getElementById("13").innerText=Math.floor(Math.random() * (9) ) + 50;
        }
        if(checkRange(arr[9],60,64)){
            document.getElementById("4").innerText=arr[9]
        }else{
            document.getElementById("4").innerText=Math.floor(Math.random() * (4) ) + 60;
        }
        if(checkRange(arr[10],65,69)){
            document.getElementById("9").innerText=arr[10]
        }else{
            document.getElementById("9").innerText=Math.floor(Math.random() * (4) ) + 65;
        }
        if(checkRange(arr[11],70,74)){
            document.getElementById("5").innerText=arr[11]
        }else{
            document.getElementById("5").innerText=Math.floor(Math.random() * (4) ) + 70;
        }
        if(checkRange(arr[12],75,79)){
            document.getElementById("14").innerText=arr[12]
        }else{
            document.getElementById("14").innerText=Math.floor(Math.random() * (4) ) + 75;
        }
        if(checkRange(arr[13],80,84)){
            document.getElementById("10").innerText=arr[13]
        }else{
            document.getElementById("10").innerText=Math.floor(Math.random() * (4) ) + 80;
        }
        if(checkRange(arr[14],85,90)){
            document.getElementById("15").innerText=arr[14]
        }else{
            document.getElementById("15").innerText=Math.floor(Math.random() * (5) ) + 85;
        }
        
        
        
    // }
    const mytable = document.getElementById("html-data-table");
   
  }
  function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
function checkRange(x,min,max){
return ((x-min)*(x-max)<=0)
  }

function first_row(){

    //console.log(first_row)
    console.log(myRandomInts(3, 9))
    //myRandomInts(2, 9)
    document.getElementById("1").innerText = arr[0];
}
console.log('hi',document.getElementById("btn"))

// document.getElementById("ticket").addEventListener("click",()=>{alert("hello")})
//listeners
// ticket.addEventListener("click",alert("hello"));
//function pickup(){
//var nums= myRandomInts(1, 90)

//var stored_text = document.getElementById("nums").innerText 
//document.getElementById("nums").innerText= stored_text+ "," + nums;

//Random nums unique 1-90
// function getRandoms(numPicks) {
//     var nums=[]
//    for(let i=1;i<91;i++){
   
//     nums.push(i)
//    }
//    console.log(nums.length)
//        var selections = [];
   
//        // randomly pick one from the array
//        for (var i = 0; i < numPicks; i++) {
//            var index = Math.floor(Math.random() * nums.length);
//            selections.push(nums[index]);
//            nums.splice(index, 1);
//        }
      
//        return(selections);
//    }
   
   var results =  Array.from(myRandomInt(90,90));
   var numberLength =15
   var newArr = [];
   // variable for keep track of clicks
   var c = 0;
   function pickup(){
    // var array = ['jane', 'alax', 'russell', 'max'];
   
    
    //console.log(results)
    // check value of counter
    if (c < results.length) {
    // push value and increment counter
    newArr.push(results[c++])
    console.log(c)
    // set html
    document.getElementById("nums").innerHTML = newArr;
 
    document.getElementById('display').innerText=c;
    console.log(newArr)
    strike_element()
    }
    

}
function strike_element() {
  
    // i=1;
    // console.log(document.getElementById(i))
    for(var i=1 ;i <=numberLength;i++){
    //console.log(document.getElementById("nums").innerText) 
   if(newArr[newArr.length-1] == document.getElementById(i).innerText){
       document.getElementById(i).style.backgroundColor = "green"   
   }
   } 
   var m =0;
   for(var i=1 ;i <=numberLength ; i++){
    if(document.getElementById(i).style.backgroundColor == "green"){
        m++;
    }
    if(m>=numberLength){
        setTimeout(()=>{
            swal(" Congratulations You have won the full-house in " +  document.getElementById('display').innerText + " Steps")
        },1000)
       
  
  }
 
}
}
function myRandomInt(quantity, max){
    const set = new Set()
    while(set.size < quantity) {
    set.add(Math.floor(Math.random() * max) + 1)
    }
  
    // var arr3 = Array.from(set)
   
    return set
    }
    