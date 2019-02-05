class Card {
	constructor(heirarchy, suit, value) {
		this._heirarchy = heirarchy
		this._suit = suit
		this._value = value
		this._code = suit[0].toUpperCase() + heirarchy[0].toUpperCase()
		this._name = `${heirarchy} of ${suit}s`
	}

	get heirarchy() {
		return this._heirarchy
	}

	get suit() {
		return this._suit
	}

	get value() {
		return this._value
	}

	// setter to override generated value in Deck
	set value(val) {
		this._value = val;
	}

	get code() {
		return this._code
	}

	get name() {
		return this._name
	}

}

class Pile {
	constructor() {
		this._cards = []
	}

	get cards() {
		return this.cards;
	}

	shuffle() {
		let numShuffles = arguments[0] ? arguments[0] : 1;
		let arr = this._cards
		let shuffles = [...Array(numShuffles).keys()]
		shuffles.forEach(shuffle => {
			console.log('Shuffling', shuffle + 1, shuffle + 1 > 1 ? 'times' : 'time')
			for (let i = 0; i < arr.length - 2; i++) {
				let j = Math.floor(Math.random() * (arr.length - i) + i)
				let swap = arr[i]
				arr[i] = arr[j]
				arr[j] = swap
			}
		})
	}

	print() {
		this._cards.forEach(c => console.log(c.name))
	}

	draw(fromTop = true) {
		return fromTop ? this._cards.pop() : this._cards.shift()
	}

	collect(cards, toBottom = true) {
		if (toBottom) { cards.forEach(c => this._cards.push(c)) }
		else { cards.forEach(c => this._cards.unshift(c)) }
	}
}