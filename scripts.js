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
  linkCounter();
  readCounter();
};

rightSide.on('click', '.read-button', markAsRead);

function markAsRead() {
  $(this).toggleClass('read');
  $(this).closest('article').toggleClass('read-card');
  $(this).siblings('a').toggleClass('change-underline');
  readCounter();
}

function readCounter () {
  var testR = $('.test-read')
  testR.text($('.read').length)
}

function  linkCounter () {
  var links = $('.card').length;
    $('.count').text(links);
}