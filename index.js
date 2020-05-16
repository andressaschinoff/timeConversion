// converte 12 hours to 24 hours
function timeConversion(hour) {
  // the parameter taking out pm or am
  let splitHour = hour.replace(/pm|am/gi, '');
  // split variable to an 3 elements array
  splitHour = splitHour.split(':');

  // if find AM and hh is equals to 12
  if (hour.includes('AM') && parseInt(splitHour[0]) === 12) {
    // replacing 12 to 00 and return that variable
    const militaryHour = `00:${splitHour[1]}:${splitHour[2]}`;
    return militaryHour;

    // if find AM and hh is different than 12 or find PM and equals to 12
  } else if (
    (hour.includes('AM') && parseInt(splitHour[0]) !== 12) ||
    (hour.includes('PM') && parseInt(splitHour[0]) === 12)
  ) {
    // copy the same format and return that variable
    const militaryHour = `${splitHour[0]}:${splitHour[1]}:${splitHour[2]}`;
    return militaryHour;

    // if find PM and is different than 12
  } else if (hour.includes('PM') && parseInt(splitHour[0]) !== 12) {
    // adding 12 to the hh that is transformed to Int and return that variable
    const militaryHour = `${parseInt(splitHour[0]) + 12}:${splitHour[1]}:${
      splitHour[2]
    }`;
    return militaryHour;
  }
}

// this function is called onclick
function printConversion() {
  // save the input value in a variable
  const hourInput = document.getElementById('input').value;
  // converte to upper case
  const hourToUpper = hourInput.toUpperCase();
  // show the conversion in the HTML
  document.getElementById('answer').innerHTML = timeConversion(hourToUpper);
}
