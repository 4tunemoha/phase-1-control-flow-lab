//start by declairing rideDistance
let rideDistance, rideDestination, rideTip;

function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  // gives customers a free sample if the ride is less than or equal to 400 feet:
  //charges 20 dollars for a distance between 400 and 2000 feet
  // charges 30 dollars for a distance over 2000 feet - 'I will gladly take your thirty bucks.'
  //does not allow rides over 2500 feet -  'No can do.'

  if(rideDistance <= 400){
    return 'This one is on me!';
  }else if(rideDistance > 400 && rideDistance <=2000){
    return 'That will be twenty bucks.';
  }else if (rideDistance > 2000 && rideDistance <=2500){
    return 'I will gladly take your thirty bucks.';
  }else{
    return 'No can do.'
  }
}
//Set parameter in the function rideDestination
function ternaryCheckCity(rideDestination){
  // Write your code here!
  //returns "Ok, sounds good." when the city is NYC
  // should return "No go." if the destination city is not NYC
 // if(rideDestination === 'NYC'){
  //  return "Ok, sounds good."; 
 // }else{
  //  return "No go."
 return rideDestination === 'NYC'? ("Ok, sounds good.") : ("No go.");
  }
  

function switchOnCharmFromTip(rideTip){
  // Write your code here!
  // should return "Thank you so much." if the tip is generous
  //should return "Thank you." if the tip is not as generous
  //should return "Bye." if anything else
switch(rideTip){
      case 'generous':
        return "Thank you so much.";
        break;
      case 'not as generous':
       return "Thank you.";
       break;
      default:
       return 'Bye.'
}
}
//calling functions to their outputs
console.log(switchOnCharmFromTip('generous'));
console.log(scuberGreetingForFeet(200));
console.log(ternaryCheckCity('NYC'));