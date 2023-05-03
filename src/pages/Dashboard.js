import React, { useEffect } from 'react';
import checkCookie from '../ressources/functions/checkCookie';



function Dashboard() {

    const isNotConnected = !checkCookie('campus-code');
    isNotConnected ? window.location = "/" : undefined;

    return (
        <div class="app-campus">
            test
        </div>
    )

}

export default Dashboard;