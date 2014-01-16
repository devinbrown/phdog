Template.contact.events({
  'click #contact-button' : function () {

    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')

      event.preventDefault();

      var email   = $('#emailInput').val();
      var message = $('#message').val()

      Meteor.call('sendEmail', 'devin.g.brown@gmail.com', email, 'PhDog, Contact Us!', message);

      console.log("message sent")
  }
});
