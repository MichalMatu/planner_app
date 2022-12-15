
// display current day at the top of the calendar
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

// set variable
var container = $('.container');
var currentHour = moment().hour();
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// initialize the page
for (var i = 0; i < hours.length; i++) {
    var hour = hours[i];
// add the time blocks to the page
    container.append(`
    <div id="hour-${hour}" class="row time-block">
    <div class="col-md-1 hour">${hour}AM</div>
    <textarea class="col-md-10 description"></textarea>
    <button class="col-md-1 saveBtn"><i class="fas fa-save"></i></button>
    </div>
    `
    );
// change color of the time block based on the time of day
    if (hour < currentHour) {
        $(`#hour-${hour}`).addClass('past');
    }
    else if (hour === currentHour) {
        $(`#hour-${hour}`).addClass('present');
    }
    else {
        $(`#hour-${hour}`).addClass('future');
    }

// catch the click event on the save button
    var saveBtn = $(`#hour-${hour}`).find('.saveBtn');
// activate the save button
    saveBtn.on('click', function () {
// create variables for the text and hour
        var text = $(this).siblings('.description').val();
        var hour = $(this).parent().attr('id');
// setting the text and hour to local storage
        localStorage.setItem(hour, text);
    }
    );
// getting the text and hour from local storage and displaying it on the page
    text = localStorage.getItem(`hour-${hour}`);
    $(`#hour-${hour}`).find('.description').val(text);
    
// change from am to pm if time is greater than 12
    if (hour > 12) {    
        $(`#hour-${hour}`).find('.hour').text(hour - 12 + 'PM');
    }
}



