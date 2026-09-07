<template>
  <div class="container" style="max-width: 800px; margin-top: 92px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 access-text">Zugriff & Berechtigungen</div>
      </div>
    </div>

    <div class="sections-texts-P6">
      Login, Sign-up, Passwort-Reset und Registrierung mit Zugangsbestätigung
      sind bei Allreco keine Insellösung der KI-Doku, sondern eine gemeinsame
      Ebene für alle drei Produkte – Dokumente, Telematik und KI-Doku. Wer
      sich einmal anmeldet, bekommt je nach Berechtigung Zugriff auf die für
      ihn freigegebenen Bereiche. Für den Chatbot bedeutet das: Er ist Teil
      eines geschützten Portals, nicht frei im Web erreichbar.
    </div>

    <div class="sections-subtitle text-uppercase">Layout-Iteration</div>
    <div class="row justify-content-center my-4">
      <div class="col-12 col-md-6 text-center mb-4">
        <img
          v-lazy="LoginSplit"
          alt="Login-Portal, erste Layout-Variante mit geteilter Fläche (Zugangsdaten anonymisiert)"
          class="img-fluid access-shot"
        />
        <div class="shot-caption">Erste Variante: geteilte Fläche mit Markenclaim</div>
      </div>
      <div class="col-12 col-md-6 text-center mb-4">
        <img
          v-lazy="LoginFinal"
          alt="Login-Portal, finale Layout-Variante als zentrierte Karte (Zugangsdaten anonymisiert)"
          class="img-fluid access-shot"
        />
        <div class="shot-caption">Finale Variante: zentrierte Karte, reduziert</div>
      </div>
    </div>
    <div class="col text-center mb-5">
      Zugangsdaten in beiden Screenshots sind Platzhalter, keine echten
      Zugangsdaten von Allreco-Kund:innen.
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginSplit from "../../assets/images/Project6/login-portal-split.webp";
import LoginFinal from "../../assets/images/Project6/login-portal-final.webp";
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.access-text {
  margin-top: 120px;
  margin-bottom: 60px;
  padding-bottom: 25px;
  color: #5b4b8a !important;
  border-bottom: 3px solid #5b4b8a !important;
}

.sections-texts-P6 {
  margin-top: 18px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.sections-subtitle {
  font-size: 16px;
  font-weight: 600 !important;
  margin-top: 70px;
  padding-bottom: 6px;
  color: rgba(27, 27, 27, 0.6);
  border-bottom: 1px solid rgba(27, 27, 27, 0.6);
}

.access-shot {
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.shot-caption {
  margin-top: 12px;
  font-size: 14px;
  color: rgba(27, 27, 27, 0.6) !important;
}
</style>
