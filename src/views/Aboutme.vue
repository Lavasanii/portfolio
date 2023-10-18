<template>
  <div class="container">
    <div class="row justify-content-start" style="margin-top: 40px">
      <div class="col-6 d-flex align-items-center">
        <p class="mt-6">
          Ich zeichne mich durch eine außergewöhnliche Lernbereitschaft aus und bin stets motiviert, Neues zu erlernen.
          Meine größte Stärke liegt in meiner intrinsischen Motivation, kontinuierlich neues Wissen zu erwerben.
          Ich habe die Fähigkeit, wichtige Themen zu identifizieren, die einen echten Mehrwert bieten, und kann mich
          selbstständig in diese Themen vertiefen, bis ich in der Lage bin, innovative Ideen zu entwickeln und umzusetzen.
          Eine meiner herausragenden Fähigkeiten besteht darin, wichtige Themen zu identifizieren, die einen Mehrwert
          bieten können,
          und dann die erforderlichen Schritte zu unternehmen, um dieses Wissen zu erlangen und Ideen in die Tat
          umzusetzen.
          Mein Ansatz erinnert mich an meine Erfahrungen im Industrie-Design-Studium, bei dem ich gelernt habe, dass der
          Ausgangspunkt immer die Schmerzpunkte sind. Von dort aus generiere ich verschiedene Ideen und arbeite hart
          daran, das erforderliche theoretische Wissen zu erlangen, um diese Ideen erfolgreich umzusetzen. Ich habe immer den
          Drang, mich in unbekannte Themenbereiche zu vertiefen und mich selbst herauszufordern. Ich bin davon überzeugt, dass
          diese Eigenschaften mir nicht nur helfen, effektiv in neuen Aufgabenfeldern zu arbeiten, sondern auch dazu beitragen,
          innovative Lösungen für komplexe Herausforderungen zu entwickeln. Ich arbeite an meiner Website bzw. meinem Portfolio und
          parallel dazu lerne ich, wie ich dies umsetzen kann. Dabei nutze ich Vue.js, um nicht nur das Design meines
          Portfolios selbst zu gestalten, sondern auch die Website selbst zu realisieren und zu entwickeln.
        </p>
      </div>
      <div class="col-6">
        <img :src="saeidImageAboutme" :alt="saeidImageAboutme" class="rounded mx-auto d-block" width="500" />
      </div>
      <div class="row-2">
        <a href="https://slavasani.com/Lebenslauf_Saeid_Farajollahlavasani.pdf" target="_blank">
          <button class="orange-button">Download CV</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import saeidImageAboutme from "../../src/assets/images/saeidImageAboutme.svg";
</script>

<style lang="scss" scoped>
.orange-button {
  background-color: orange;
  width: 180px;
  height: 45px;
  border-radius: 7px;
  border: none;
}

//div {
//border: dashed;
//}
</style>
