import React from 'react';
import checkCookie from '../../ressources/functions/checkCookie';
import '../../App.css';
import '../../ressources/styles/CampusPreference.css';
import { useHistory } from 'react-router-dom';


function CampusChoice() {
  
  
  let CampusList = [
    {code: "TLS", name: "Toulouse"},
    {code: "LVA", name: "Laval"},
    {code: "IDF", name: "Paris"},
    {code: "HDF", name: "Lille"},
    {code: "BRD", name: "Bordeaux"},
    {code: "TLB", name: "Thonon-les-Bains"},
  ]
  const history = useHistory();
  const isConnected = checkCookie('campus-code');
  if (isConnected) {
    const Campus = CampusList.filter(e => e.code === isConnected);
    if(Campus)
    {
      window.location = "/dashboard";
    } 

  }
  


  return (
    <div class="app-campus">
      <div class="container-presentation">
        <h1 class="title"> Plan your day, stay informed, be productive! </h1>
      </div>
      <div class="container-selectPreference">
        <h3 class="answerCampus"> <textgradient> Select your campus </textgradient> </h3>
        <ul id="campusList" class="campusList">
            { CampusList.map(campus => 
                <li class="item" onClick={ () => history.push('/campus/'+campus.code.toLowerCase()) } data-campus={JSON.stringify(campus)}>
                     <span>{campus.name}</span> <i class='bx bx-chevron-right'></i>
                </li>
            ) }
        </ul>
      </div>
    </div>
  );
}

export default CampusChoice;
