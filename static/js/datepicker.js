// Selecting the date

var due_date;

$(document).ready(function(){
    $('.datepicker').datepicker({
        selectMonths: true,
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'OK',
        closeOnSelect: false
    });
});