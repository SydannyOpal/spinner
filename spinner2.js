process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinnerChar = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ','\r|  ', '\r/  ', '\r-  ', '\r\\  '];
let delay = 100;
for (const char of spinnerChar) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 200;
}