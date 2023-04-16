let isScheduled = false;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const event = {

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

    next: () => event.nexts()[0],


    listView: () => {

        const events = d.querySelector('.events-list');

        for (const event of schedule)
        {

            const { title, link } = event;

            const every_day = event.day.length === 5 ? `everyday at ${event.hour}:${event.minute}` : "";
            const one_day = event.day.length === 1 ? `${days[event.day[0]]} at ${event.hour}:${event.minute}` : "";

            let html = "";
            html += `<div class="item" onclick="window.open('${event.link}')">`;
            html += '   <div>';
            html += `       <h4>${every_day}${one_day}</h4>`;
            html += '   </div>';
            html += '   <div>';
            html += `       <h1>${title} ${event.mandatory ? '<span class="mandatory">Mandatory</span>' : ''}</h1>`;
            html += '   </div>';
            html += '</div>';

            events.innerHTML += html

        }
    },

    openOnTime: () => {

        const ev = event.next();
        const date = new Date();

        console.log(ev)
        if ( !ev ) return;

        const event_date = new Date();
        event_date.setHours(ev.hour);
        event_date.setMinutes(ev.minute);
        event_date.setSeconds(0);
        event_date.setMilliseconds(0);

        const diff = new Date(event_date.getTime() - date.getTime());

        // screen.update.event(ev.title, diff);

        const ONE_HOUR = (60000 * 60);

        if ( diff.getTime() < ONE_HOUR)
        {

            if (diff.getMinutes() < 5 && !isScheduled)
            {

                window.open(ev.link);
                isScheduled = true;
                setTimeout(async () => isScheduled = false, 300000)

            }

        }
    }

}
