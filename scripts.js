$('.enter-button').on('click', function(){
  var titleInput = $('.title-input').val();
  var websiteInput = $('.website-input').val();
  var rightSide = $('.right-side');
  rightSide.append('<article class=\"card\"> <h2 class=\"card-title\">' + titleInput + '</h2><a href=\"' + websiteInput + '\" class=\"card-url\">' + websiteInput + '</a><button class=\"card-button read-button\">Read</button><button class=\"card-button delete-button\">Delete</button></article>');
  // $('article').on('click', $('.delete')
  //   $('article').remove()); 
  console.log(titleInput, websiteInput);
});



