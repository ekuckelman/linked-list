var deleteButton = $('.delete-button');
var bookmarkCard = $('.card');
var rightSide = $('.right-side');
rightSide.on('click', '.delete-button', deleteBookmark);

$('.enter-button').on('click', function(){
  var titleInput = $('.title-input');
  var websiteInput = $('.website-input');
  if (titleInput.val() == '' || websiteInput.val() == '' ) {
    $('.enter-button').attr('disabled')
  } else {
    rightSide.append('<article class=\"card\"> <h2 class=\"card-title\">' + titleInput.val() + '</h2><a href=\"' + websiteInput.val() + '\" class=\"card-url\">' + websiteInput.val() + '</a><button class=\"card-button read-button\">Read</button><button class=\"card-button delete-button\">Delete</button></article>');
  websiteInput.val('');
  titleInput.val('');
  }
  
});



function deleteBookmark () {
  $(this).closest('article').remove();
};

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