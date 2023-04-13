const api = (event, callback = () => { }) => {

    let start = new Date().getTime();
    const xhttp = new XMLHttpRequest();

    console.debug(`api  ==>  /v3/${event}`);
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            const ms = new Date().getTime() - start;
            console.debug(`api  <==  /v3/${event}  [${ms.toFixed(0)}ms]`);

            callback( JSON.parse( xhttp.responseText ) );

        }
    }

    xhttp.open('GET', 'https://hbtn.hugochilemme.com/api/v3/'+event, true);
    xhttp.send();

}
