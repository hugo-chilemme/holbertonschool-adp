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

}
