let isScheduled = false;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const events = {

    lists: {},

    init: (events_list) => {
        events.lists = events_list;
        events.listView();
    },

    nexts: () => {

        const now = new Date();
        let events = [];

        for (const event of schedule)
        {       

            if ( event.day.includes( now.getDay() ) && event.hour >= now.getHours() ) 
            {

                if (event.hour == now.getHours() && event.minute <= now.getMinutes())
                {

                    continue;

                }

                events.push(event);

            }

        }
        return events;

    },

    next: () => events.nexts()[0],


    listView: () => {

        const schedules = d.querySelector('.events-list');

        for (const event of schedule)
        {
            if ( !event.day.includes( new Date().getDay() ) )
                continue;

            const { title, link } = event;



            let html = "";
            html += `<div class="item" onclick="window.open('${event.link}')">`;
            html += '   <div>';
            html += `       <h4>Today at ${event.hour}:${event.minute}</h4>`;
            html += '   </div>';
            html += '   <div>';
            html += `       <h1>${title} ${event.mandatory ? '<span class="mandatory">Mandatory</span>' : ''}</h1>`;
            html += '   </div>';
            html += '</div>';

            schedules.innerHTML += html

        }
    },

    openOnTime: () => {

        const eventObj = events.next();
    
        if ( !eventObj ) return;

        // Retrieving the current date 
        const dateNow = new Date();

        // Creating the event date object
        const dateEvent = new Date();
        dateEvent.setHours(eventObj.hour, eventObj.minute, 0, 0);
        

        const ONE_HOUR = (60000 * 60);

        // Calculating the difference between the two dates
        const DATE_REMAINING = new Date( dateEvent.getTime() - dateNow.getTime() );
        

        if ( DATE_REMAINING.getTime() < ONE_HOUR)
        {

            if ( DATE_REMAINING.getMinutes() < 5 && !isScheduled )
            {

                window.open(ev.link);
                isScheduled = true;
                setTimeout(async () => isScheduled = false, 300000)

            }

        }
    }

}
