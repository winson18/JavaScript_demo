/*
 function displayInfo (args) {
	var output = "";
	if (typeof args.name == "string") {
		output += "Name:" + args.name +"\n";
	}
	if (typeof args.age == "number") {
		output = "Age:" + args.age + "\n";
	}
	alert(output)
}
displayInfo ({
	name: "nicolas",
	age:29
});
displayInfo ({
	name:"gray"
});

var color = ["red", "blue", "yellow"];
alert(color[2]);
alert(color.length);
color.length=2;
alert(color[2]);
color[5]="black";
alert(color[5]);
alert(color.length);

var colors = ["red","green","blue"];
var colors2 = colors.concat("yellow",["black","brown"]);
alert(colors);
alert(colors2);

//slice()方法，它能够给予当前数组中的一个或者多个项创建一个新数组
var colors = ["red","green","blue","yellow","purple"];
var colors2 = colors.slice(1);  // 从1位开始
var colors3 = colors.slice(1, 4);   // 从1位开始，到第四位，但是不包括第四位
alert(colors);
alert(colors3);

//splice的用法，恐怕是数组中最强大的方法了：1、删除，只需制定两个参数：要删除的第一项的位置和要删除的项数；2、插入，可在制定位置插入任意，只需要提供三个参数，起始位置、0（要删除的项数）和插入的项；3、替换，可以想制定位置插入任意数量的项，只需要3个参数，起始位置、要删除的项数和要插入的任意数量的项
var colors = ["red","green","blue"];
var removed = colors.splice(0,1);         //删除第一项
alert(colors);
alert(removed);
removed = colors.splice(1,0,"yellow","orange");
alert(colors);
alert(removed);
removed = colors.splice(1,1,"red","purple");
alert(colors);
alert(removed);

//迭代方法，every 要求每一项都需要大于2
var numbers = [1,,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function (item, index, array){
	return(item >2 );
});
alert(everyResult);

//迭代方法，some 至少有一个大于2 就返回turn
var someResult = numbers.some(function(item, index, array){
	return (item>2);
});
alert(someResult);

//迭代方法，filter 过滤出大于2的数目
var numbers = [1,,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function (item, index, array){
	return(item >2 );
});
alert(filterResult);

//迭代方法，map 每项都执行一次
var numbers = [1,,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function (item, index, array){
	return item *2 ;
});
alert(mapResult);

//归并方法 reduce（）和reduceRight（）
//reduce是从第一位数开始，reduceRight是从最后一位开始prev, cur, index, array
//[ 前一个元素 | 当前元素，从1开始 | 后一个元素的序列，从1开始计数 | 表示该数组 ]
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array) {
	return prev+cur;
});
alert(sum);

function factorial(num) {
	if (num<=1){
	return 1;
	}else {
	return num * arguments.callee (num-1);
	}// body...
}
var trueFactorial = factorial ;
factorial = function (){
	return 0;
};
alert(trueFactorial(5));
alert(factorial(5));


var book = {
	_year: 2004;
	edition: 1;
};
object.defineProperty(book, "year", {
	get: function() {
		return this._year;
	},
	set: function (newValue){
		if (newValue > 2004){
			this._year = newValue ;
			this.edition += newValue-2004;
		}
	}
});
book._year = 2005 ;
alert(book.edition);
*/

//git test
//