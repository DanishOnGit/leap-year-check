const chalk=require("chalk");
const readlineSync=require("readline-sync");
console.log(chalk.yellow("***Leap-year Checker***"))
const userName=readlineSync.question(chalk.blue("\nEnter your name: "));
console.log(chalk.cyan("Hey "+userName.toUpperCase()+". Please enter your birth date below"))


function yearCheck(){
  let dob=readlineSync.question("\nEnter DOB in YYYY/MM/DD format: ")

  let split=dob.split("/");
  let year=split[0];
  let month=split[1];
  let date=split[2];

  if(isNaN(year)||year<1000||year>9999){
    console.log(chalk.red("Please enter valid date of birth\n"))
     yearCheck();
  }else if(isNaN(month)||month<0||month>12){
    console.log(chalk.red("Please enter valid date of birth\n"));
     yearCheck();
  }else if(isNaN(date)||date<0||date>31){
    console.log(chalk.red("Please enter valid date of birth\n"))
     yearCheck();
  }
  else if(!Number.isInteger(Number(year))||!Number.isInteger(Number(date)) || !Number.isInteger(Number(month))){
    console.log(chalk.red("Please enter valid date of birth\n"))
     yearCheck();
  }

  if(year%4==0 && year%100 !=0){
    console.log(chalk.bgMagenta("Your birth year is a leap year!\n"))
    return keepPlaying();
  }else if(year%4==0 &&year%100==0 &&year%400==0){
    console.log(chalk.bgMagenta("Your birth year is a leap year!\n"))
      return keepPlaying();
  }else{
    console.log(chalk.bgRed("Your birth year is not a leap year\n"))
    return keepPlaying();
  }

} yearCheck();
console.log("\n")
function keepPlaying(){
if(readlineSync.keyInYN("Would you like to check again?\n")){
  yearCheck();
}else{
  console.log("\nThank you!")
}
}




