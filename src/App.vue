<script setup>
import { ref } from 'vue';
import LanguageSelector from './components/LanguageSelector.vue';

const langKey = ref('eng');
const getLangKey = ref(() => (key) => key);

function onLangChanged({ lang, getLangKey: g }) {
  langKey.value = lang;
  getLangKey.value = g;
  updateTexts();
}

function updateTexts() {
  document.getElementById('tab1Btn').textContent = getLangKey.value('tab1Btn');
  document.getElementById('tab2Btn').textContent = getLangKey.value('tab2Btn');
  document.getElementById('openReportWindowBtn').textContent = getLangKey.value('openReportWindowBtn');
  document.getElementById('readDataBtn').textContent = getLangKey.value('readDataBtn');
  document.getElementById('deviceList').textContent = getLangKey.value('deviceList');
}
</script>

<template>
  <div style="background: #e6e6e6;height:95px">
    <div id="connectContainer">

      <div id="leftSideConnectContainer">
        <button class="cdcBtns" id="openReportWindowBtn"></button>
        <select class="cdcBtns" id="deviceList">
          <option value="default"></option>
        </select>

        <button class="" id="refreshDisksBtn">
          <img id="refreshImg" src="/public/refresh.svg">
        </button>

        <button class="cdcBtns" id="readDataBtn"></button>
      </div>

      <div id="rightSideConnectContainer">
        <LanguageSelector @lang-changed="onLangChanged" />
      </div>
    </div>

    <div class="tabs">
      <RouterLink class="nav-link" to="/" exact>
        <button :class="{ 'active': $route.path === '/' }" class="tab-button" id="tab1Btn"></button>
      </RouterLink>

      <RouterLink class="nav-link" to="/vibrometr" exact>
        <button :class="{ 'active': $route.path === '/vibrometr' }" class="tab-button" id="tab2Btn"></button>
      </RouterLink>
    </div>
  </div>
  <RouterView />
</template>
