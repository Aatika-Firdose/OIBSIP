function convertTemperature() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const conversion = document.getElementById("conversionType").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerText = "⚠️ Please enter a valid number.";
    return;
  }

  let converted;

  if (conversion === "CtoF") {
    converted = (temp * 9/5) + 32;
    result.innerText = `${temp}°C = ${converted.toFixed(2)}°F`;
  } else {
    converted = (temp - 32) * 5/9;
    result.innerText = `${temp}°F = ${converted.toFixed(2)}°C`;
  }
}
