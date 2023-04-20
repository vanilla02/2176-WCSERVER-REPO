<template>
  <div id="education">
    <h2> Education </h2>
    <div class="accordion">
      <div class="accordion-item">
        <h3 class="accordion-header" @click="elementaryOpen = !elementaryOpen">
          Elementary
        </h3>
        <div class="accordion-panel" v-show="elementaryOpen">
          {{ elementary }} <br> (2009 - 2015)
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" @click="jhsshsOpen = !jhsshsOpen">
          JHS/SHS
        </h3>
        <div class="accordion-panel" v-show="jhsshsOpen">
          {{ jhs_shs }} <br> Junior High School (2015-2019)
        <br> Senior High School (2019 - 2021)
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" @click="collegeOpen = !collegeOpen">
          College
        </h3>
        <div class="accordion-panel" v-show="collegeOpen">
          {{ college }} <br> (2021 - present)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education',
  data() {
    return {
      elementary: 'Chevalier School',
      jhs_shs: 'Chevalier School',
      college: 'Holy Angel University',
      elementaryOpen: false,
      jhsshsOpen: false,
      collegeOpen: false
    };
  }
};
</script>

<style>
.accordion-header {
  background-color: #c7bfbf;
  color: #201919;
  padding-left: 10px;
  padding-bottom: 10px;
}

.accordion-header.active {
  background-color: #ca2c2c;
  color: #b8abab;
}

.accordion-panel {
  padding-left: 20px;
}

.accordion-item:not(:last-child) {
  margin-bottom: 20px;
}
</style>
