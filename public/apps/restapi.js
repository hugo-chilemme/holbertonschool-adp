class ApiController {

    constructor (event, callback) {

        if (!event)
        {
            console.error('Missing event');
            return;
        }

        this.event = event;
        this.callback = callback;
        this.autoRefresh = false;

        return this;
    }

    setAutoRefresh(timeout = 0) {
        if(timeout < 2500)
        {
            console.error(timeout, "missing or too low");
            return;
        }
        this.autoRefresh = true;
        this.autoRefreshAfter = timeout;

        return this;
    }

    sendRequest() {

        let start = new Date().getTime();
        const xhttp = new XMLHttpRequest();
    
        console.debug(`api  ==>  /v3/${this.event}`);
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
    
                const ms = new Date().getTime() - start;
                console.debug(`api  <==  /v3/${this.event}  [${ms.toFixed(0)}ms]`);
    
                this.callback( JSON.parse( xhttp.responseText ) );
    
            }
        }
    
        xhttp.open('GET', 'https://hbtn.hugochilemme.com/api/v3/'+this.event, true);
        xhttp.send();

        if (this.autoRefresh) {
            setTimeout(async () => this.sendRequest(), this.autoRefreshAfter)
        }


    }

}
