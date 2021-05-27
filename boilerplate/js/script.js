var totalCash = prompt('how much money u got?');
var watchesCount = prompt('how much watches u want?');
var earringsCount = prompt('how much earrings u want?');
var watchesSum = watchesCount * +prompt('how much watches cost?');
var earringsSum = earringsCount * +prompt('how much earrings cost?');
console.log(totalCash >= watchesSum + earringsSum);