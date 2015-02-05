/*
User = {
	firstName: "",
	lastName: "",
	email: "",	
	budgets: []
	//TBD
}

Budget = {
	id: 123,
	name: "",
	owners: [],
	participants: [],
	envelopes: [],
	frequency: "monthly",
	getBudgetAmount: function()
}

Envelope = {
	id: 123,
	budgetId: 123,
	name: "my name",
	budgetAmount: 123,
	currentAmount: 123,
	rollOver: { 
		canRollOver: true,
		amount: 0
		date: 1/1/2015
	}
}

Transaction = {
	id: 123,
	occurredOn: GMT,
	createdOn: GMT,
	envelopeId: 123,
	amount: 123,
	entity: "Costco",
	description: "Muffins!!!",
	type: "Income"
}

//transaction amount can be negative or positive...depending on whether this is a deposit or withdrawal

Logins = {
	 userId: 123
	 ip: 123,
	 username: "asdf"
}
*/