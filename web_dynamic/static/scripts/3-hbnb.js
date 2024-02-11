$(document).ready(() => {
  const header = $("div#api_status");

  // query the status api on localhost
  const URL = 'http://localhost:5001/api/v1/places_search/';
  $.get(URL, (data, textStatus) => {
    if (data.status === 'OK') {
      $(header).addClass('available');
      console.log('added class');
    } else {
      $(header).removeClass('available');
    }
  });
});
