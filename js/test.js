function genericAjaxForm (e) {
  e.preventDefault();
  var form = $(this);
  
  return $.ajax({
    url: form.attr('action'),
    type: form.attr('method'),
    dataType: form.data('type'),
    data: form.serialize()
  });
}

$('#login-form').on('submit', function (e) {
  genericAjaxForm.call(this, e).done(function (data) {
    console.log(data);
  });
});
