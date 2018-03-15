import { Haiku } from './js/haiku.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    $('#isHaiku').hide();
    $('#noHaiku').hide();
    let lineOne = $('#lineOne').val();
    let lineTwo = $('#lineTwo').val();
    let lineThree = $('#lineThree').val();
    let new_entry = new Haiku(lineOne, lineTwo, lineThree);
    let oneCount = new_entry.syllableCount(new_entry.lineOne);
    let twoCount = new_entry.syllableCount(new_entry.lineTwo);
    let threeCount = new_entry.syllableCount(new_entry.lineThree);
    if ((oneCount == 5) && (twoCount == 7) && (threeCount == 5)) {
      $('#isHaiku').show();
    } else {
      $('#noHaiku').show();
    }
    $('#solution').append("<li> This haiku's syllable count is: </li>");
    $('#solution').append("<li> syllable Count: " + oneCount + "</li>");
    $('#solution').append("<li> syllable Count: " + twoCount + "</li>");
    $('#solution').append("<li> syllable Count: " + threeCount + "</li><br>");
  });
});
