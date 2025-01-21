const week= prompt("Enter the week days: ");
switch(week){
    case "mon"||"tue":
        {
            console.log("football");
        }
        break;
    case "wed"||"thu":
    {
        console.log("criket");
    }
    break;
    case "fri":
   {
    console.log("volleyball");

   } 
   break;
   case "sat":
   {
    console.log("basketball");
   }   
   break;
   case "sun":
   {
    console.log("holiday");
   }
   break;
   default:
    {
        console.log("invalid input");
    }
    break;

}

