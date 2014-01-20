Template.contact.events({
  'click #contact-button' : function () {

    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')

      event.preventDefault();

      var email   = $('#emailInput').val();
      var message = $('#message').val()

      if (emailIsValid(email) && messageExists(message)) {
        Meteor.call('sendEmail', 'devin.g.brown@gmail.com', email, 'PhDog, Contact Us!', message);
        // TODO: Alert indicating message was sent.
        // TODO: Clear / disable form.
      } else {
        console.log("email is NOT valid");
        // TODO: Alert indicating message was NOT sent.
      }
  }
});

// Warning: this is client side and could be disabled.
function emailIsValid(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Warning: this is client side and could be disabled.
function messageExists(msg) {
  return msg.length > 0;
}