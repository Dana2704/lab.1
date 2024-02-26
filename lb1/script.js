//Натуральні числа
const btn = document.querySelector('.btn'),
	output = document.querySelector('.output')

btn.addEventListener('click', function () {
	const input = document.getElementById('natural-num').value
	let numbers = input.split(' ')

	function sumOfDigits(n) {
		let sum = 0
		while (n) {
			sum += n % 10
			n = Math.floor(n / 10)
		}
		return sum
	}

	var maxSum = 0
	var numberWithMaxSum = null

	for (let i = 0; i < numbers.length; i++) {
		let currentNumber = parseInt(numbers[i])
		let currentSum = sumOfDigits(currentNumber)

		if (currentSum > maxSum) {
			maxSum = currentSum
			numberWithMaxSum = currentNumber
		}
	}

	output.innerHTML = `<p>Число з найбільшою сумою цифр: ${numberWithMaxSum}</p> <p>Сума його цифр: ${maxSum}</p>`
	console.log(numberWithMaxSum)
})


// конвертер чисел 
var btnConvert = document.getElementById('convertToWords')

btnConvert.addEventListener('click', convertToWords)

function convertToWords() {
	let number = parseInt(document.getElementById('numberInput').value)

	const units = [
		'',
		'один',
		'два',
		'три',
		'чотири',
		"п'ять",
		'шість',
		'сім',
		'вісім',
		"дев'ять",
	]
	const teens = [
		'десять',
		'одинадцять',
		'дванадцять',
		'тринадцять',
		'чотирнадцять',
		"п'ятнадцять",
		'шістнадцять',
		'сімнадцять',
		'вісімнадцять',
		"дев'ятнадцять",
	]
	const tens = [
		'',
		'',
		'двадцять',
		'тридцять',
		'сорок',
		"п'ятдесят",
		'шістдесят',
		'сімдесят',
		'вісімдесят',
		"дев'яносто",
	]
	const hundreds = [
		'сто',
		'двісті',
		'триста',
		'чотириста',
		"п'ятсот",
		'шістсот',
		'сімсот',
		'вісімсот',
		"дев'ятсот",
	]

	if (isNaN(number)) {
		alert('Будь ласка, введіть коректне число!')
		return
	}

	let result = ''

	if (number === 0) {
		result = 'нуль'
	} else {
		const numArray = number.toString().split('').reverse()
		for (let i = 0; i < numArray.length; i++) {
			const digit = parseInt(numArray[i])

			if ((i === 1 && digit === 1) || (i === 0 && numArray[i + 1] === '1')) {
				result = teens[parseInt(numArray[i + 1])] + ' ' + result
				i++
			} else if (i === 2) {
				result = hundreds[digit - 1] + ' ' + result
			} else if (i === 3 || i === 6 || i === 9) {
				result = tens[digit] + ' ' + result
			} else if (i === 4 || i === 7 || i === 10) {
				result = units[digit] + ' тисяч ' + result
			} else if (i === 5 || i === 8 || i === 11) {
				result = units[digit] + ' мільйонів ' + result
			} else {
				result = units[digit] + ' ' + result
			}
		}
	}


	document.getElementById('outputWords').innerHTML = `<p>${result}</p>`
}

// змінює на прописну
function changeCase() {
	let inputWord = document.getElementById('wordInput').value
	let outputDiv = document.getElementById('outputThree')

	if (inputWord.length > 0) {
		if (inputWord.charAt(0) === inputWord.charAt(0).toLowerCase()) {
			inputWord = inputWord.charAt(0).toUpperCase() + inputWord.slice(1)
		}
		outputDiv.innerText = inputWord
	} else {
		outputDiv.innerText = ''
	}
}
