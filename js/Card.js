class Card {
	/**
	 * 
	 * @param {string} heirarchy 
	 * @param {string} suit 
	 * @param {number} value 
	 */
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
		this._length = this._cards.length
	}

	get cards() {
		return this._cards;
	}

	get length() {
		return this._cards.length;
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

class Deck extends Pile {
	/**
	 * 
	 * @param {object[]} _cards 
	 * @param {string[]} suits 
	 * @param {string[]} royalty 
	 * @param {number} numPerSuit 
	 * @param {boolean} aceHigh 
	 */
	constructor(_cards,
							suits = ['Club', 'Diamond', 'Heart', 'Spade'],
							royalty = ['Jack', 'King', 'Queen', 'Ace'],
							numPerSuit = 13,
							aceHigh = true) {
		super(_cards)
		this._suits = suits
		this._cards = (() => {
			let result = []
			this.suits.forEach(suit => {
				let numNumCards = numPerSuit - royalty.length;
				[...Array(numNumCards).keys()].concat(royalty).forEach((card, i) => {
					let heir = i > numNumCards - 1 ? card : (card + 2).toString();
					let value = heir === 'Ace' && !aceHigh ? 1 : i + 2
					result.push(new Card(heir, suit, value))
				})
			})
			return result
		})()
	}

	get suits() {
		return this._suits
	}
}

class Solitaire() {
	
}


const deck = new Deck()
deck.shuffle(3)
deck.print()

console.log(deck.length)