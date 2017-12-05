function createCalendar(selector, events) {

    var WEEKS = 5;
    var WEEK_DAYS = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    var MONTH = 'June';
    var YEAR = '2014';
    var MAX_MONTH_DAYS = 30;

    var preparedEvents = prepareEvents(events);

    var day = document.createElement('div');
    var week = document.createElement('div');
    var dayTitle = document.createElement('h4');
    var dayEvent = document.createElement('span');


    applyDayAttributes(day);
    applyDayTitleAttributes(dayTitle);

    applyDayEventAttributes(dayEvent);

    var calendar = document.querySelector(selector);
    var month = generateMonth();

    calendar.appendChild(month);

    calendar.addEventListener('click', function (ev) {
        var selectedDay = ev.target;

        if (selectedDay.classList.contains('calendar-day-title')) {
            selectedDay = selectedDay.parentNode;
        }

        if (selectedDay.classList.contains('calendar-day')) {
            changeDayTitleBackgroundColor(selectedDay, 'white');


            var otherSelected = calendar.getElementsByClassName('selected');
            for (var i = 0; i < otherSelected.length; i++) {

                changeDayTitleBackgroundColor(otherSelected[i], 'lightgray');
                otherSelected[i].classList.remove('selected');
            }

            selectedDay.classList.add('selected');
        }
    });

    calendar.addEventListener('mouseover', function (ev) {
        if (ev.target.classList.contains('calendar-day') && !ev.target.classList.contains('selected')) {
            changeDayTitleBackgroundColor(ev.target, 'gray');
        }

    });

    calendar.addEventListener('mouseout', function (ev) {
        if (ev.target.classList.contains('calendar-day') && !ev.target.classList.contains('selected')) {
            changeDayTitleBackgroundColor(ev.target, 'lightgray');
        }
    });

    function prepareEvents(events) {
        var result = [];
        for (var i = 0; i < events.length; i++) {
            var currentDate = events[i].date;
            result[currentDate] = events[i];
        }
        return result;
    }

    function generateMonth() {
        var frag = document.createDocumentFragment();

        for (var i = 0; i < WEEKS; i++) {
            var startDay = i * 7 + 1; // 1 8 15 22 29 all first days as sundays
            var endDay = startDay + 6;// 7 15 21 28 all end days as saturdays
            var currentWeek = generateWeek(startDay, endDay);
            frag.appendChild(currentWeek);
        }
        return frag;
    }

    function generateWeek(startDay, endDay) {
        var currentWeek = week.cloneNode(true);

        for (var i = startDay; i <= endDay && i <= MAX_MONTH_DAYS; i++) {
            var currentDate = generateDay(i);
            currentWeek.appendChild(currentDate);
        }
        return currentWeek;
    }

    function generateDay(date) {
        var currentDay = day.cloneNode(true);
        var currentDateTitle = generateDayTitle(date);
        currentDay.appendChild(currentDateTitle);
        getCurrentEvent(date, currentDay);
        return currentDay;
    }

    function generateDayTitle(date, currentDay) {
        var currentDayTitle = dayTitle.cloneNode(true);
        var currentDayAsString = WEEK_DAYS[date % 7];
        currentDayTitle.innerText = currentDayAsString + ' ' + date + ' ' + MONTH + ' ' + YEAR;

        return currentDayTitle;
    }

    function getCurrentEvent(date, dayElement) {
        var currentDateEvent = preparedEvents[date];
        if (currentDateEvent) {

            var currentDayEvent = dayEvent.cloneNode(true);
            currentDayEvent.innerText = currentDateEvent.hour + ' - ' + currentDateEvent.duration + ' - ' + currentDateEvent.title;
            dayElement.appendChild(currentDayEvent);
        }
    }

    function applyDayAttributes(day) {
        day.classList.add('calendar-day');

        day.style.display = 'inline-block';
        day.style.width = '130px';
        day.style.height = '130px';
        day.style.border = '1px solid black';
    }

    function applyDayTitleAttributes(dayTitle) {

        dayTitle.classList.add('calendar-day-title');

        dayTitle.style.backgroundColor = 'lightgray';
        dayTitle.style.textAlign = 'center';
        dayTitle.style.borderBottom = '1px solid black';
        dayTitle.style.margin = '0';
    }

    function applydayContentAttributes(dayContent) {
        dayContent.style.width = '100%';
        dayContent.style.height = '100%';
    }

    function applyDayEventAttributes(dayEvent) {
        dayEvent.style.float = 'left';
    }

    function changeDayTitleBackgroundColor(element, color) {
        element.getElementsByClassName('calendar-day-title')[0].style.backgroundColor = color;
    }

}