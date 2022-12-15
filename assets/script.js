$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));


var container = $('.container');
var currentHour = moment().hour();

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < hours.length; i++) {
    var hour = hours[i];

    container.append(`
    <div id="hour-${hour}" class="row time-block">
    <div class="col-md-1 hour">${hour}AM</div>
    <textarea class="col-md-10 description"></textarea>
    <button class="col-md-1 saveBtn"><i class="fas fa-save"></i></button>
    </div>
    `
    );

    if (hour < currentHour) {
        $(`#hour-${hour}`).addClass('past');
    }
    else if (hour === currentHour) {
        $(`#hour-${hour}`).addClass('present');
    }
    else {
        $(`#hour-${hour}`).addClass('future');
    }


    var saveBtn = $(`#hour-${hour}`).find('.saveBtn');

    saveBtn.on('click', function () {

        var text = $(this).siblings('.description').val();
        var hour = $(this).parent().attr('id');

        localStorage.setItem(hour, text);
    }
    );

    text = localStorage.getItem(`hour-${hour}`);
    $(`#hour-${hour}`).find('.description').val(text);


    




}



