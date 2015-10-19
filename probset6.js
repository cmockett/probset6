var secondGreatLow = function(numArray){
	// var numArray
	var subAnswer = numArray.sort(function(a, b){
		return a - b;
	})
	var answer = [];
	for(var i = 0; i<subAnswer.length; i++){
			if(answer.indexOf(subAnswer[i]) === -1){
				answer.push(subAnswer[i])
			}
		}
	if(answer.length <= 2){
		console.log(answer)
	}else{
		console.log(answer[1], answer[answer.length-2])
	}

}

var timeConvert = function(num){
	var numberArray = num.toString().split('');
	console.log(numberArray)
	var min = numberArray[numberArray.length-1]
	var newNumberArray = numberArray.splice(0, numberArray.length-1)
	var hour = newNumberArray.join("")
// 	var parsedArray = []
// 	for(var i = 0; i<numberArray.length; i++){
// 		parsedArray.push(parseInt(numberArray[i]))
// 	}
// 	
	console.log(hour/6 + ":" + min)
}

var bracketMatcher = function(str){
	var counter1 = 0
	var counter2 = 0
	var strArray = str.split('')
	for(var i = 0; i<strArray.length; i++){
		if(strArray[i] === "("){
			counter1++
		}
		else if(strArray[i] === ")")
			counter2++
	}
	if(counter1 === counter2){
		console.log(true)
	}else{
		console.log(false)
	}
}