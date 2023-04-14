let isScheduled = false;
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

        const events = d.querySelector('header .lists');

        for (const event of schedule)
        {

            const { title, link } = event;

            events.innerHTML += `<a href="${link}" target="_blanl">${title}</a>`;

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
