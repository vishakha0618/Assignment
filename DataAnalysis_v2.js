var size = prompt('Enter the size of the array:',);
len = parseInt(size);
var num_str=prompt('Enter numbers separating them by a space',);
var num = num_str.split(" ");
var choice_str=prompt('Enter your choice from the following operations:\n1.Press 1 for up\n2.Press 2 for down\n3.Press 3 for max\n4.Press 4 for min\n5.Press 5 for sum\n6.Press 6 for mean\n7.Press 7 for median\n8.Press 8 for standard deviation');
var choice = parseInt(choice_str);
switch(choice){
    case 1:
        up(num);
         break;
    case 2:
        down(num);
        break;
    case 3:
        max(num);
        break;
    case 4:
        min(num);
        break;
    case 5:
        sum(num);
        break;
    case 6:
        mean(num);
        break;
    case 7:
        median(num);
        break;
    case 8:
        stdev(num)
        break;
    default:
        alert('Invalid Choice');
}

function up(num){
    num=num.sort(function(a,b){return a-b;});
    alert('Array in ascending order'+num);
};
            
function down(num){
    num=num.sort(function(a,b){return b-a;});
    alert('Array in descending order'+num);
};

function max(num){
    let max= num.reduce(function(a,b){
    return Math.max(a,b)
    })
    alert('Max of all the numbers is '+max);
};

function min(num){
    let min=num.reduce(function(a,b){return Math.min(a,b)});
    alert('Min of all the numbers is '+min);
};

function sum(num){
    var sum_byadd=0;
    for(var i=0;i<num.length;i++){
        sum_byadd=sum_byadd+parseInt(num[i]);
    }
    alert('Sum of all numbers is'+sum_byadd);
};

function mean(num){
    var sum_byadd=0;
    for(var i=0;i<num.length;i++){
        sum_byadd=sum_byadd+parseInt(num[i]);
    }
    let mid=sum_byadd/num.length;
    res=mid.toFixed(3);
    alert('Mean is '+res);
};

function median(num){
    num=num.sort(function(a,b){return a-b;});
    let mid=Math.floor(num.length/2);
    if(num.length%2)
        alert('Median is '+num[mid]);
    alert('Median is'+(num[mid-1]+num[mid])/2.0);
};

function stdev(num){
    var sum_byadd=0;
    for(var i=0;i<num.length;i++){
        sum_byadd=sum_byadd+parseInt(num[i]);
    }
    let mid=sum_byadd/num.length;
    res=mid.toFixed(3);
    let std=0;
    for(i=0;i<num.length;i++)
        std=std+Math.pow(num[i]-res,2);
    const val=Math.sqrt(std/num.length);
    alert('Standard deviation is '+val.toFixed(3));
};