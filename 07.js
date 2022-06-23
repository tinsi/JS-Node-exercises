/*
Tee ohjelma, joka lähettää health checkin palvelimelle
1. Käynnistä EC2 palvelin, user data löytyy koneelta 
2. Muokkaa ainakin security groupin asetuksia siten, että se sallii liikenteen
koneeltasi porttiin 80.
3. Voit kokeilla, että yhteys toimii käyttämällä curlia (osoite 4 kohdassa).
4. Tee nyt javascript/node ohjelma joka lähettää ajettaessa get pyynnön
osoitteeseen http://my-ec2-public-ip/health.html (korvaa oman palvelimen
ip osoitteella).
5. Varmista, että ohjelma toimii ja get pyynnön HTTP status on 200 OK, selvitä
mistä johtuu jos tämä ei onnistu.
6. Poista lopuksi EC2 palvelimelta tiedosto /var/www/html/health.html ja aja
ohjelma uudestaan. Nyt HTTP statuksen pitäisi olla 404 Page not found. Tällä
poistamisella simuloidaan sitä, että palvelin olisi kaatunut. Silloin Health
checkin ei kuulukaan mennä läpi.
• Linkkejä aiheesta
− Miten curlataan https://www.consul.io/api/health.html */

import fetch from "node-fetch";

const response = await fetch(
  "http://ec2-3-95-199-158.compute-1.amazonaws.com/health.html"
);

if (response.status === 200) {
  console.log("Server is up and running");
}
