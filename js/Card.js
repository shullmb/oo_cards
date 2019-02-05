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