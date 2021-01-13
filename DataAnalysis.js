num=[10,1,9,2,8,3,7,4,6];
const up=function(num){
    num=num.sort(function(a,b){return a-b;});
    return num;
};

const down=function(num){
    num=num.sort(function(a,b){return b-a;});
    return num;
};

const max=function(num){
	let max= num.reduce(function(a,b){
        return Math.max(a,b)
    })
	return max;
}

const min=function(num){
	let min=num.reduce(function(a,b){return Math.min(a,b)});
	return min;
}

const sum=function(num){
	let sum=num.reduce(function(a,b){return a+b},0)
	return sum;
}

const mean = function(num){
const sum_new=sum(num)
let mid=sum_new/num.length;
return mid.toFixed(3);
}

const median=function(num){
num=up(num)
let mid=Math.floor(num.length/2);
if(num.length%2)
	return num[mid];
return (num[mid-1]+num[mid])/2.0;
}

const stdev=function(num){
let std=0;
const m =mean(num)
for(i=0;i<num.length;i++)
    std=std+Math.pow(num[i]-m,2);
const val=Math.sqrt(std/num.length);
return val.toFixed(3);
}
console.log('up');
console.log(up(num));

console.log('down');
console.log(down(num));

console.log('max');
console.log(max(num));

console.log('min');
console.log(min(num));

console.log('mean');
console.log(mean(num));

console.log('median');
console.log(median(num));

console.log('stdev');
console.log(stdev(num));
