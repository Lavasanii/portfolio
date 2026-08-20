<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 discover-text"> Ideation & Design </div>
      </div>
    </div>
    <div class="row justify-content-center my-5">
      <div class="sections-title"></div>

      <div class="sections-texts-P3">
        <strong>Design-Ziel festgelegt</strong>
        <ul>
          <li>
            Entwicklung einer kompakten, vollflächigen Startseite, die alle drei
            Kernleistungen – <strong>Maschinen, Anlagen und After Sales</strong> –
            auf einen Blick sichtbar macht, ohne die Seite unnötig in die Länge zu
            ziehen. Dafür wurde die Seite in klar abgegrenzte, vollflächige
            Abschnitte wie Hero und Leistungsübersicht gegliedert.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P3">
        <strong>Layoutideen entwickelt und abgewogen</strong>
        <ul>
          <li>
            Ursprünglich wurde ein Split-Screen-Ansatz vorgesehen. Im Verlauf des
            Designprozesses wurde dieser zugunsten eines schlichten und fokussierten
            Fullscreen-Layouts verworfen.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P3">
        <strong>Vier Iterationsstufen durchlaufen</strong>
        <ul>
          <li>
            Entwicklung von vier aufeinanderfolgenden Konzeptstufen:
            <strong>(1)</strong> reine Text-Version mit Headline und Icon-Kacheln
            ohne Bild;
            <strong>(2)</strong> Version mit statischen Fotos, unter anderem
            Nahaufnahmen von Maschinenteilen und Materialien, ergänzt durch Text;
            <strong>(3)</strong> Version mit Video anstelle der statischen Bilder
            und weiterhin statischer Headline;
            <strong>(4)</strong> finale Version mit Video, automatisch rotierender
            Headline wie <em>„Innovativ“, „Flexibel“</em> und
            <em>„Lösungsorientiert“</em> sowie ergänzendem Verlaufstext.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P3">
        <strong>Konzeptstufen verglichen und validiert</strong>
        <ul>
          <li>
            Die einzelnen Konzeptstufen wurden gemeinsam mit Vorgesetzten,
            Kolleg:innen und Testpersonen verglichen und bewertet – teilweise im
            direkten Austausch und teilweise anhand interaktiver Figma-Prototypen.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P3">
        <strong>Finale Lösung umgesetzt</strong>
        <ul>
          <li>
            Die finale Version kombiniert ein vollflächiges Luftbild-Video als Hero
            mit automatisch rotierenden Headline-Wörtern. Darunter ergänzen der
            Claim <em>„Allreco macht aus Abfall wieder Wert – mit Technik, die
              Ressourcen schützt und Kreisläufe schließt.“</em> sowie ein erklärender
            Verlaufstext wie <em>„Aus Abfall wird Zukunft ...“</em> die
            Markenbotschaft.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P3">
        <strong>Text-Rotator technisch umgesetzt</strong>
        <ul>
          <li>
            Der Text-Rotator wurde mit eigenem
            <strong>JavaScript/HTML/CSS-Code</strong> direkt in die Webflow-Seite
            integriert, da sich der automatische Wortwechsel mit den nativen
            Webflow-Funktionen nicht realisieren ließ.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P3">
        <strong>Scroll-Snap getestet und optimiert</strong>
        <ul>
          <li>
            Zusätzlich wurde ein JavaScript-basiertes
            <strong>Scroll-Snap-Verhalten</strong> entwickelt und getestet, bei dem
            die vollflächigen Abschnitte beim Scrollen automatisch einrasten.
            Aufgrund eines inkonsistenten Verhaltens zwischen verschiedenen
            Browsern, insbesondere Chrome und Firefox, wurde die Funktion wieder
            deaktiviert. Um ein konsistentes Nutzungserlebnis sicherzustellen,
            blieb die vollflächige Sektionsstruktur jedoch erhalten.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P3">
        <strong>Icon- und Illustrationssystem entwickelt</strong>
        <ul>
          <li>
            Entwicklung eines konsistenten Icon- und Illustrationssystems für die
            drei Hauptkategorien <strong>Maschinen, Anlagen und After Sales</strong>,
            um komplexe Leistungsinhalte visuell schnell erfassbar zu machen.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P3">
        <strong>Markenkonsistenz sichergestellt</strong>
        <ul>
          <li>
            Die Gestaltung wurde durchgehend an den bestehenden
            <strong>Allreco-Markenfarben Orange und Grau</strong> ausgerichtet,
            um eine konsistente visuelle Verbindung zu den übrigen Allreco-
            Touchpoints sicherzustellen.
          </li>
        </ul>
      </div>

      <div class="w-100"></div>

      <div class="col text-center mt-4">
        Der Designprozess durchlief mehrere Iterationen – von einem zunächst
        text- und iconbasierten Ansatz über statische Bilder und Video bis hin
        zur finalen, vollflächigen Lösung mit dynamischer Typografie und
        Bewegtbild. Die finale Gestaltung verbindet die industrielle
        Markenidentität von Allreco mit einer modernen, klaren und fokussierten
        digitalen Nutzererfahrung.
      </div>

    </div>
    <div class="sections-subtitle text-uppercase">Ausgangslage</div>
    <div class="col text-center">
      <img v-lazy="AllrecoIdeation" alt="Allreco Ideation & Design" class="img-fluid my-5" />
    </div>
    <div class="sections-subtitle text-uppercase">Layout Exploration</div>
    <div class="col justify-content-center my-5">
      <div class="col text-center">
        <img v-lazy="LayoutExploration1" alt="Bild" class="img-fluid" />
      </div>
      <div class="col text-center my-5">
        <img v-lazy="LayoutExploration2" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Illustrationsprozess</div>
    <div class="col justify-content-center my-5">
      <div class="col text-center">
        <img v-lazy="Illustrationsprozess1" alt="Bild" class="img-fluid" />
      </div>
      <div class="col text-center mt-5">
        <img v-lazy="Illustrationsprozess2" alt="Bild" class="img-fluid" />
      </div>
      <div class="w-100"></div>
    </div>

    <div class="sections-subtitle text-uppercase">Finales Icon-System</div>
    <div class="row justify-content-center">
      <div class="cal-12 text-center">
        <img v-lazy="FinaleIcons" alt="Finale Icons: Maschinen, Anlagen, After Sales"
          class="img-fluid mx-3 mt-5 mb-2" />
      </div>
    </div>
    <div class="col text-center mt-4 mb-5">
      Die Icons folgen einem konsistenten Linienstil mit gleicher Strichstärke; die dezente
      Akzentfläche im Hintergrund sorgt für visuelle Wiedererkennbarkeit, ohne die Lesbarkeit
      der Outline-Icons zu beeinträchtigen.
    </div>

    <div class="sections-subtitle text-uppercase">typography</div>
    <div class="row mt-5">
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img v-lazy="Typografy4p1" class="img-fluid" />
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 700">Akzent (Headline)</div>
          <div style="font-size: 14px; font-weight: 400">
            z. B. "ALLRECO", "Wert"
          </div>
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 700">
            geerbt vom Elternelement
          </div>
        </div>
        <div class="col-1">
          <div style="font-size: 20px; font-weight: 700">50px</div>
        </div>
      </div>
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img v-lazy="Typografy4p2" class="img-fluid" />
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 400">Fließtext / Untertitel</div>
          <div style="font-size: 14px; font-weight: 400">
            z. B. "macht aus Abfall wieder"
          </div>
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 400">Arial</div>
        </div>
        <div class="col-1">
          <div style="font-size: 20px; font-weight: 400">30px</div>
        </div>
      </div>
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img v-lazy="Typografy4p3" class="img-fluid" />
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 700">H1 Basis-Stil</div>
          <div style="font-size: 14px; font-weight: 400">
            globaler &lt;h1&gt; Standard
          </div>
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 700">Verdana</div>
        </div>
        <div class="col-1">
          <div style="font-size: 20px; font-weight: 700">38px</div>
        </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-12">
          <div style="font-size: 13px; color: #999">
            Bestehendes Corporate Design — nicht selbst definiert. Im
            Design-Tool ursprünglich in Rem angelegt (responsive Skalierung);
            Webflow exportiert Werte im finalen Stylesheet als px.
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import AllrecoIdeation from "../../assets/images/Project4/ausganglage.webp";
import LayoutExploration1 from "../../assets/images/Project4/layout-exploration1.webp";
import LayoutExploration2 from "../../assets/images/Project4/layout-exploration2.webp";
import Illustrationsprozess1 from "../../assets/icons/Project4-Icons/illustrationsprozess1.webp";
import Illustrationsprozess2 from "../../assets/icons/Project4-Icons/AfterSalesIcon.webp";
import FinaleIcons from "../../assets/icons/Project4-Icons/finale-Icons.webp";
import Typografy4p1 from "../../assets/icons/Project4-Icons/Typografy4p1.webp";
import Typografy4p2 from "../../assets/icons/Project4-Icons/Typografy4p2.webp";
import Typografy4p3 from "../../assets/icons/Project4-Icons/Typografy4p3.webp";


</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.discover-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #E17C2F !important;
  border-bottom: 3px solid #E17C2F !important;
}

// Design Text and Border Color

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: #000800cc !important;
}

.sections-texts-P3 {
  margin-top: 18px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.Initial-situation {
  font-weight: 600;
  font-size: 22px;
  color: rgba(27, 27, 27, 0.6);
  border-bottom: 1px solid rgba(27, 27, 27, 0.6);
}

.sections-subtitle {
  font-size: 16px;
  font-weight: 600 !important;
  margin-top: 70px;
  padding-bottom: 6px;
  color: rgba(27, 27, 27, 0.6);
  border-bottom: 1px solid rgba(27, 27, 27, 0.6);
}
</style>
