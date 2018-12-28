describe('Address Book',function(){
  it('should be able to add a contact',function(){
    var addressBook = new AddressBook();
    var thisContact = new Contact();

    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
});
describe('Aysnc Address Book',function(){
  const addressBook = new AddressBook();
  beforeEach(function(done){
    addressBook.getInitialContacts(function(){
      done();
    });
  });
  it('should grab initial contacts',function(done){
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
})
