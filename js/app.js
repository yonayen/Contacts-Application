var contact = function(name) {
    var _name = name;
    this.publicName = name;

    this.setName = function(name) {
        _name = name;
    };
    this.getName = function() {
      return _name;
    };
};

var phoneBook = function () {
    var _contacts = [];
    this.printContactNames = function () {
        for (var i = 0; i < _contacts.length; i++) {
            console.log(_contacts[i].getName());
        };
    };
    this.addContact = function(contact) {
      _contacts.push(contact)
    };
};

var yonathanContact = new contact ("Yonathan public")
yonathanContact.setName("Yonathan private")
console.log(yonathanContact.getName());
console.log(yonathanContact.publicName);
console.log(yonathanContact._name);

var yonathanPhonebook = new phoneBook();

yonathanPhonebook.addContact(yonathanContact);
yonathanPhonebook.printContactNames();


yonathanPhonebook.addContact(yonathanContact);
yonathanPhonebook.printContactNames();