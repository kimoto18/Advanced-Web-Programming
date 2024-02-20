// F = (9/5) * C + 32
    function celsiusToFahrenheit(celsius) {
        var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
 }
        
// Demonstration
var celsiusTemperature = 23;
var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + " degrees Celsius is equal to " + fahrenheitTemperature + " degrees Fahrenheit.");