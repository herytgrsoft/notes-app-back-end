const initialMemoryUsage = process.argv[2];
const yourName = "Hery";
const environment = process.memoryUsage();
 
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);