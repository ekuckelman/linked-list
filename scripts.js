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
  readCounter();
  }
  
});

function deleteBookmark() {
  $(this).closest('article').remove();
  readCounter();
};

rightSide.on('click', '.read-button', markAsRead);
rightSide.on('dblclick', '.read-button', markAsUnread);

function markAsRead() {
  $(this).closest('.read-button').addClass('read');
  $(this).closest('article').addClass('read-card');
  readCounter();
 
}

function markAsUnread() {
  $(this).closest('.read-button').removeClass('read');
  $(this).closest('article').removeClass('read-card');
  readCounter();
}

function readCounter () {
  var testR = $('.test-read')
  testR.text($('.read').length)
}
}

