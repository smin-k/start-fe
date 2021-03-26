
var count = [10,20,30,40,50,60,70,100]; 

abs= count.reduce((sum, current) => sum + current, 0) / count.length
console.log(abs)