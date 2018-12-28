// function AddressBook() {
//   this.contacts = [];
//   this.a = 1;
// }
// AddressBook.prototype.addContact = function(constact){
//   this.contacts.push(constact);
// }
// AddressBook.prototype.getContact = function(i){
//   return this.contacts[i];
// }
class AddressBook{
  constructor(){
    this.contacts = [];
    this.a = 1;
    this.b = 2;
  }
  addContact(contact){
    this.contacts.push(contact);
  }
  getContact(i){
    return this.contacts[i];
  }
  getInitialContacts(cb){
    const self = this;
    setTimeout(function(){
      self.initialComplete = true;
      if(cb){
        return cb();
      }
    },3);
  }
}
