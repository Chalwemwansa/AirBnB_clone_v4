/* global $ */
$(document).ready(() => {
  const checkBox = $('.filters .amenities input[type="checkbox"]');
  const checkedBox = $('.filters .amenities h4');

  // initialise an empty list and listen for any event change
  const checked = [];
  checkBox.each((index, amenity) => {
    $(amenity).change(() => {
      if ($(amenity).prop('checked')) {
        checked.push(amenity.name);
      } else {
        const i = checked.indexOf(amenity.name);
        if (i !== -1) {
          checked.splice(i, 1);
        }
      }
      // update the h4 tag under div with list of amenities checked
      $(checkedBox).text(checked.join(', '));
    });
  });
});
