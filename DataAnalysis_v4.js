/*var select = document.getElementById('operation');
select.addEventListener("chang",function() {
  passValue(this.value);
});*/

function getOperation() { 
    selectElement =  document.getElementById('operation'); 
    perform_operation = selectElement.value;
    setnum(perform_operation);  
} 

function setnum(perform_operation) {
    var input = document.getElementById("numbers").value;
    var numbers_array = input.split(" ");
    var perform=perform_operation;
    passValue(perform,numbers_array);
}

function passValue(operation,num) {
    var operation_chosen =operation ;
    if (operation_chosen == "up") {
        var up_num = up(num);
        document.getElementById("solution").innerHTML =up_num;
    } else if (operation_chosen  == "down") {
        var down_num = down(num);
        document.getElementById("solution").innerHTML = down_num;
    } else if (operation_chosen  == "max") {
        var max_num = max(num);
        document.getElementById("solution").innerHTML = max_num;
    } else if (operation_chosen  == "min") {
        var min_num = min(num);
        document.getElementById("solution").innerHTML = min_num;
    } else if (operation_chosen  == "sum") {
        var mean_num = sum(num);
        document.getElementById("solution").innerHTML = mean_num; 
    }else if (operation_chosen  == "mean") {
        var mean_num = mean(num);
        document.getElementById("solution").innerHTML = mean_num;
    } else if (operation_chosen  == "median") {
        var median_num = median(num);
        document.getElementById("solution").innerHTML = median_num;
    } else if (operation_chosen  == "stdev") {
        var stdev_num = stdev(num);
        document.getElementById("solution").innerHTML = stdev_num;
    }
    // return false;
}

function up(nums) {
    var constUp = nums.sort(function(a, b) { return a - b });
    return constUp;
}

function down(nums) {
    var constDown = nums.sort(function(a, b) { return b - a });
    return constDown;
}

function max(nums) {
    let max= nums.reduce(function(a,b){
        return Math.max(a,b)
        })
    return max;
}

function min(nums) {
    let min=nums.reduce(function(a,b){
        return Math.min(a,b)
    });
    return min;
}

function sum(nums) {
    var add=0;
    for(var i=0;i<nums.length;i++){
        add=add+parseInt(nums[i]);
    }
    return add;
}

function median(nums) {
    var upper_nums=up(nums);
    var midLen = Math.floor(upper_nums.length / 2);
    constMedian = upper_nums.length % 2 !== 0 ? upper_nums[midLen] : (upper_nums[midLen - 1] + upper_nums[midLen]) / 2;
    return constMedian;
}

function mean(nums) {
    var sums = sum(nums);
    var constMean = ((sums / nums.length).toPrecision(3));
    return constMean;
}

function stdev(nums) {
    let means = mean(nums);
    let deviation = 0;
    for (let i = 0; i < nums.length; i++) {
        deviation += Math.pow((nums[i] - means), 2);
    }
    constStdev = (Math.sqrt(deviation / nums.length).toPrecision(3));
    return constStdev;
}