$('.enter-button').on('click', function(){
  var titleInput = $('.title-input').val();
  var websiteInput = $('.website-input').val();
  var rightSide = $('.right-side');
  
  rightSide.append('<article class=\"card\"> <h2 class=\"card-title\">' + titleInput + '</h2><a href=\"' + websiteInput + '\" class=\"card-url\">' + websiteInput + '</a><button class=\"card-button read-button\">Read</button><button class=\"card-button delete-button\">Delete</button></article>');
});



// If, else statement that if the button is clicked, 
// then toggle the button from disabled to enabled. 
// Else the button and card css will stay as is. 

var rightSide = $('.right-side');
rightSide.on('click', '.read-button', markAsRead);
rightSide.on('dblclick', '.read-button', markAsUnread);

function markAsRead() {
  $(this).closest('.read-button').addClass('read');
  $(this).closest('article').addClass('read-card');
  console.log('read button clicked');
}

function markAsUnread () {
  $(this).closest('.read-button').removeClass('read');
  $(this).closest('article').removeClass('read-card');
  console.log('read button double clicked');
}