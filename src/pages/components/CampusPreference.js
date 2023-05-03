import React, { useEffect } from 'react';
import notification from '../../ressources/functions/notification';
import '../../App.css';
import '../../ressources/styles/CampusPreference.css';
import { useParams } from 'react-router-dom';


function CampusPreference() {
  const { CampusCode } = useParams();
  const CampusList = [
    {code: "TLS", name: "Toulouse"},
    {code: "LVA", name: "Laval"},
    {code: "IDF", name: "Paris"},
    {code: "HDF", name: "Lille"},
    {code: "BRD", name: "Bordeaux"},
    {code: "TLB", name: "Thonon-les-Bains"},
  ]

  const permissionRemaining = () => {
    let count = 0;
    document.querySelectorAll('#permissionsList .item').forEach(e => {
      if (!e.classList.contains('hide'))
      {
        count+=1;
      }
    }) 
    console.log(count);
    if (count === 0)
    {
      // Créer une nouvelle date
      var date = new Date();

      // Ajouter 60 jours
      date.setDate(date.getDate() + 60);

      // Convertir en format UTC/GMT
      var expirationDate = date.toUTCString();

      // Utiliser la date d'expiration dans un cookie
      document.cookie = "campus-code="+CampusCode+"; expires=" + expirationDate + "; path=/";
      window.location = "/dashboard";
    }
    return count;
  }

  function showNotification() {
    const notifyitem = document.querySelector('.item-notification');
    notification.state() ? notifyitem.classList.add('hide') : notifyitem.classList.remove('hide');
    permissionRemaining();
  }
  
  const handleNotification = () => {
    if (notification.state() === false)
    {
      notification.request(showNotification)
    }
    permissionRemaining();
  }

  useEffect(showNotification);
  const campus = CampusList.filter(c => c.code == CampusCode.toUpperCase())[0];
  return (
    <div class="app-campus">
      <div class="container-presentation">
        <h1 class="title"> Welcome to the campus of <textgradient>{ campus.name }.</textgradient></h1>
      </div>
      <div class="container-selectPreference">
        <h3 class="answerCampus"> <textgradient> We need the following permissions </textgradient> </h3>
        <div id="permissionsList">
        <div class="item item-notification" onClick={handleNotification}>
          <i class='bx bx-bell'></i>  Ability to send notifications
        </div>
        </div>
        <p class="cookie-acceptation">
          By continuing, <textgradient>you agree to the use of necessary cookies</textgradient> which are essential for the website to function properly.
        </p>
      </div>
    </div>
  );
}

export default CampusPreference;
