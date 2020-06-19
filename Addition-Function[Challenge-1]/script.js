function addition(a,b)
{
  if (typeof(a)!== "number"|| typeof(b)!== "number") {
    return "Enter valid numbers";
  }
  else
  {
    return a + b;
  }
}

console.log(addition(10.12,5.643));
console.log(addition(10.12,"help"));
