export default function (name) {
    // Récupération de tous les cookies de la page
    const cookies = document.cookie.split(';');
  
    // Recherche du cookie avec le nom spécifié
    const cookie = cookies.find(cookie => cookie.trim().startsWith(name + '='));
  
    // Vérification si le cookie a été trouvé

    if (cookie) {
      return true;
    } else {
      return false;
    }
 }
  