const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const strText = str.toLowerCase();

	fruit.forEach(function (item){
		const itemText = item.toLowerCase();

		if (itemText.includes(strText) && strText !== ''){
			results.push(item);
		}
	})
	// TODO
	return results;
}

function searchHandler(e) {
	e.preventDefault();
	let userTyped = input.value;
	showSuggestions(search(userTyped));
	
	//suggestions.innerHTML = ''
	// TODO
}

function showSuggestions(results, inputVal) {
	suggestions.textContent = '';

	results.forEach(function (item){
		let suggestion = document.createElement('li');
		suggestion.innerText = item;
		suggestions.appendChild(suggestion);
		
	})
	// TODO
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI'){
		input.value = e.target.innerText;
		suggestions.textContent = '';
	}
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);