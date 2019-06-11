var surveySelections = []

$('.surveyValue').on('click', function () {
  var value = $(this).children('.selection').attr('data-value')
  var question = $(this).parent('.btn-group').attr('data-question')

  surveySelections[question] = value

  console.log(surveySelections)

})