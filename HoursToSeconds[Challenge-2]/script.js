function howManySeconds(hours)
{
  return hours*60*60;
}

console.log(howManySeconds(2));


/*
I must try to understand this approach
const howManySeconds = hours => Number.isInteger(hours) ? hours*3600 : "error";

*/ 