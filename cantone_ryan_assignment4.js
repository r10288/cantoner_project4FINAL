alert("WELCOME TO MY FINAL PROJECT");

// Ryan Cantone
// SDI 1305
// May, 2nd 2013

// PROBLEM 1

var emailAddress = function (email) {
	var myEmail = email
	var addressType = (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/);
	if (addressType.test(myEmail)) {
		return true;
	} else {
		return false;
	}
};

var randomEmail = emailAddress("ryan.cantone@fullsail.edu");
console.log(randomEmail);

//PROBLEM 2

var phoneNumber = function (number) {
	var randomPhone = number;
	var phoneType = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
	if (phoneType.test(randomPhone)) {
		var correctStyle = randomPhone.replace(phoneType, "($1) $2-$3");
		return true;
	} else {
		return false;
	}
};

var myNumber = phoneNumber("456-856-4425");
console.log(myNumber);

// PROBLEM 3

var siteURL = function(website) {
	var myUrl = website
	var urlType = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
	
	if (myUrls.charAt(4) == "s") {
		return true;
	}else if (myUrl.charAt(4) == ":") {
		return false;
	}
};

//PROBLEM 4

var capitalLetter = function(name) {
	String.prototype.toUpper = function() {
		return this.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}
	name.toUpper();
	console.log(name.toUpper());
};

capitalLetter("ryan cantone");

//NUMBER PROBLEMS START

var dateSince = function(date) {
	var christmasDay = date;
	today = new Date(2013, 03, 27);
	var days = 1000*60*60 * 24
	console.log(Math.ceil((today.getTime() - christmasDay.getTime()) / (days)) + " days since Christmas! " + date)
};

dateSince(new Date(2012, 12, 25));

//NUMBER PROBLEM 2

var numFormat = function(number) {
	var myNumber = number
	myNumber.toFixed(3)
	return console.log(myNumber.toFixed(3))
};

numFormat(62532.276933);