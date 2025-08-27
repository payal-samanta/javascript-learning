let celsius = "25"; 
console.log("Original value:", celsius, "| Type:", typeof celsius);

celsius = Number(celsius);

if (!celsius && celsius !== 0) {
  console.error("Invalid input ❌ Please enter a valid number.");
} else {
  console.log("Converted value:", celsius, "| Type:", typeof celsius);

  let fahrenheit = (celsius * 9 / 5) + 32;
  let kelvin = celsius + 273.15;

  console.log(`${celsius}°C = ${fahrenheit}°F`);
  console.log(`${celsius}°C = ${kelvin}K`);
}
