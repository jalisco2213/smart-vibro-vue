<script setup>
import { ref, watch, onMounted } from 'vue';
import enResources from '../locales/eng.json';
import ukResources from '../locales/ukr.json';
import ruResources from '../locales/rus.json';
import spResources from '../locales/spa.json';
import deResources from '../locales/deu.json';
import trResources from '../locales/tur.json';

const selectedLang = ref('eng');
const emit = defineEmits(['lang-changed']);

const getLangKey = (key) => {
  const lang = selectedLang.value;
  switch (lang) {
    case 'eng': return enResources[key] || key;
    case 'ukr': return ukResources[key] || key;
    case 'rus': return ruResources[key] || key;
    case 'spa': return spResources[key] || key;
    case 'deu': return deResources[key] || key;
    case 'tur': return trResources[key] || key;
    default: return key;
  }
};

const initLang = () => {
  const userLanguage = navigator.language || navigator.userLanguage;
  switch (userLanguage) {
    case 'en-US':
    case 'en': selectedLang.value = 'eng'; break;
    case 'uk-UA':
    case 'uk': selectedLang.value = 'ukr'; break;
    case 'ru-RU':
    case 'ru': selectedLang.value = 'rus'; break;
    case 'es-ES':
    case 'es': selectedLang.value = 'spa'; break;
    case 'de-DE':
    case 'de': selectedLang.value = 'deu'; break;
    case 'tr-TR':
    case 'tr': selectedLang.value = 'tur'; break;
    default: selectedLang.value = 'eng'; break;
  }
};

watch(selectedLang, () => {
  emit('lang-changed', {
    lang: selectedLang.value,
    getLangKey
  });
});

onMounted(() => {
  initLang();
  emit('lang-changed', {
    lang: selectedLang.value,
    getLangKey
  });
});
</script>

<template>
  <select class="cdcBtns" v-model="selectedLang">
    <option value="eng">English</option>
    <option value="ukr">Українська</option>
    <option value="rus">Русский</option>
    <option value="spa">Español</option>
    <option value="deu">Deutsch</option>
    <option value="tur">Türkçe</option>
  </select>
</template>
