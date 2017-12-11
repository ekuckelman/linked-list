var deleteButton = $('.delete-button');
var bookmarkCard = $('.card');
var rightSide = $('.right-side');
rightSide.on('click', '.delete-button', deleteBookmark);

$('.enter-button').on('click', function(){
  var titleInput = $('.title-input');
  var websiteInput = $('.website-input');
  rightSide.append('<article class=\"card\"> <h2 class=\"card-title\">' + titleInput.val() + '</h2><a href=\"' + websiteInput.val() + '\" class=\"card-url\">' + websiteInput.val() + '</a><button class=\"card-button read-button\">Read</button><button class=\"card-button delete-button\">Delete</button></article>');
  websiteInput.val('');
  titleInput.val('');
});

function deleteBookmark() {
  $(this).closest('article').remove();
  linkCounter();
};

rightSide.on('click', '.read-button', markAsRead);

function markAsRead() {
  $(this).toggleClass('read');
  $(this).closest('article').toggleClass('read-card');
  $(this).siblings('a').toggleClass('change-underline');
}

$('.enter-button').on('click', linkCounter);

function  linkCounter () {
  var links = $('.card').length;
    $('.count').text(links);
}