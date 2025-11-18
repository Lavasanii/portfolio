<template>
  <div class="container mb-5" style="max-width: 800px; margin-bottom: 170px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 prototype-text">Implementation & Delivery</div>
      </div>
    </div>
    <div class="sections-title">Final Implementation & Delivery</div>
    <div class="sections-texts">
     The voting platform was fully implemented using Vue.js and JavaScript and then integrated into the Allreco website via an iFrame.
     To ensure fair voting, I developed backend logic using Supabase, where each vote is linked to a hashed IP address stored in a dedicated table.
     Because most users have dynamic IPs that refresh every 12–24 hours, the system naturally allows one vote per user per day.
    </div>
    <div class="live-project-link">
      🔗 Live Project: <a href="https://allreco.de/wettbewerb" target="_blank" rel="noopener noreferrer">allreco.de/wettbewerb</a>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div class="col-12 text-center my-4">
          <img
            v-lazy="supabaseP3"
            alt="Supabase Implementation"
            style="max-width: 100%; height: auto"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="max-width: 800px; margin-bottom: 170px; margin-top: 220px">
    <div class="sections-title">Technical Steps Implemented</div>

    <div class="sections-subtitle">1. Supabase Database Setup</div>
    <div class="sections-texts">
      A database table (votes_ip_log) was created to store:
      <ul class="technical-list">
        <li>hashed user IP address</li>
        <li>project ID</li>
        <li>timestamp</li>
      </ul>
      Row-Level Security (RLS) was activated to protect all stored data.
    </div>

    <div class="sections-subtitle">2. Client-Side Privacy Protection (DSGVO)</div>
    <div class="sections-texts">
      For privacy reasons, the IP address is never stored in plain text.
      Before inserting the data into Supabase, the IP address is hashed client-side using SHA-256, making it impossible to identify individual users.
    </div>

    <div class="sections-subtitle">3. JavaScript Voting Logic</div>
    <div class="sections-texts">
      <ul class="technical-list">
        <li>Fetch the user's public IP (via a lightweight external IP service).</li>
        <li>Hash the IP using SHA-256 directly in the browser.</li>
        <li>Check Supabase to see if a hashed IP entry exists for the last 24 hours.</li>
      </ul>
      Decision logic:
      <ul class="technical-list">
        <li><strong>If no entry exists:</strong> The vote is accepted and saved in the database.</li>
        <li><strong>If an entry exists:</strong> The vote button is automatically disabled and visually updated.</li>
      </ul>
    </div>

    <div class="sections-subtitle">4. Dynamic Ranking System</div>
    <div class="sections-texts">
      <ul class="technical-list">
        <li>After each vote, the total votes per project were recalculated.</li>
        <li>Projects automatically moved up or down based on their vote count.</li>
        <li>Ranking updates happened instantly without page reload.</li>
      </ul>
    </div>

    <div class="sections-subtitle">5. Deadline Handling</div>
    <div class="sections-texts">
      <ul class="technical-list">
        <li>After the official competition end date, all voting buttons were disabled automatically.</li>
        <li>Only project images and descriptions remained visible.</li>
      </ul>
    </div>

    <div class="sections-subtitle">Final Delivery</div>
    <div class="sections-texts">
      <ul class="technical-list">
        <li>Fully responsive user interface</li>
        <li>Clean integration into Webflow using an iFrame</li>
        <li>Cross-device testing (desktop, mobile, tablet)</li>
        <li>Replacement of an entirely analog voting process with a modern digital solution</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import supabaseP3 from "../../assets/images/Project3/supabaseP3.png";
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.prototype-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #496b34bf !important;
  border-bottom: 3px solid #496b34bf !important;
}

.user-flow-image {
  padding-top: 78px;
  padding-bottom: 78px;
  margin-bottom: 92px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: rgba(73, 107, 52, 0.35);
}

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: #000800cc !important;
}

.sections-subtitle {
  font-weight: 600;
  font-size: 19px;
  color: #496b34bf !important;
  margin-top: 48px;
  margin-bottom: 16px;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.live-project-link {
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
  color: #000800cc !important;

  a {
    color: #496b34bf !important;
    text-decoration: none;
    border-bottom: 2px solid #496b34bf;
    transition: all 0.3s ease;

    &:hover {
      color: #496b34 !important;
      border-bottom-color: #496b34;
    }
  }
}

.technical-list {
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 24px;

  li {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 400;
    color: #000800cc !important;
    line-height: 1.6;
  }
}
</style>
