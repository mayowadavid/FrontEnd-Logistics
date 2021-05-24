export const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

export const profileValidate = ( name, value, formErrors ) => {
	
	switch (name) {
		case "firstName":
			formErrors.firstName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "lastName":
			formErrors.lastName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "email":
			formErrors.email = emailRegex.test(value) && value.length > 0 ? '': '*input a valid email address*';
			break;
		case "phoneNumber":
			formErrors.phoneNumber = value.length < 11  && value.length > 0 ? '*input a valid phone number*' : '';
			break;
		case "address":
			formErrors.address = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
			
	  }
};

export const requestValidate = ( id, value, formErrors ) => {

	switch (id) {
		case "senderFirstName":
			formErrors.sender.firstName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "senderphoneNumber1":
			formErrors.sender.phoneNumber1 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "senderphoneNumber2":
			formErrors.sender.phoneNumber2 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "receiverFirstname":
			formErrors.receiver.firstName = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "receiverphoneNumber1":
			formErrors.receiver.phoneNumber1 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "receiverphoneNumber2":
			formErrors.receiver.phoneNumber2 = value.length < 11 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "tagName":
			formErrors.tagName = value.length < 2 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
		case "Cartons":
			formErrors.cartons = value.length <= 0  ? '*input number of items*': '';
			break;
		case "itemsWorth":
			formErrors.itemsWorth = value.length <= 0 ? '*input items worth*': '';
			break;
		case "deliveryLocation":
			formErrors.deliveryLocations = value.length < 3 && value.length > 0 ? '*input a proper state*': '';
			break;
		case "descriptions":
			formErrors.descriptions = value.length < 3 && value.length > 0 ? '*minimum 3 characters required*': '';
			break;
	  }
};


export const loginValidate = ( name, value, formErrors ) => {
	
	switch (name) {
		case "email":
			formErrors.email = emailRegex.test(value) && value.length > 0 ? '': '*input a valid email address*';
			break;
		case "password":
			formErrors.password = value.length < 6  && value.length > 0 ? '*password is too short*' : '';
			break;
	  }
};

export const singupValidate = ( name, value, formErrors ) => {
	
	switch (name) {
		case "firstName":
			formErrors.firstName = value.length > 3 && value.length > 0 ? '': '*minimum 3 characters required*';
			break;
		case "lastName":
			formErrors.lastName = value.length > 3 && value.length > 0 ? '': '*minimum 3 characters required*';
			break;
		case "phoneNumber":
			formErrors.phoneNumber = value.length > 10 && value.length > 0 ? '': '*input a valid number*';
			break;
		case "email":
			formErrors.email = emailRegex.test(value) && value.length > 0 ? '': '*input a valid email address*';
			break;
		case "password":
			formErrors.password = value.length < 6  && value.length > 0 ? '*password is too short*' : '';
			break;
	  }
};


