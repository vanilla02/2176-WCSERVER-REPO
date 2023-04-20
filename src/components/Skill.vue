<template>
  <div>
    <h2>Skills</h2>
    <div class="accordion">
      <div class="accordion-item">
        <h3 class="accordion-header" @click="trainingOpen = !trainingOpen">
          Training
        </h3>
        <div class="accordion-panel" v-show="trainingOpen">
          <ul>
            <li>{{ training1 }}</li>
            <li>{{ training2 }}</li>
          </ul>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" @click="seminarOpen = !seminarOpen">
          Seminars
        </h3>
        <div class="accordion-panel" v-show="seminarOpen">
          <ul>
            <li>{{ seminar1 }}</li>
            <li>{{ seminar2 }}</li>
          </ul>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" @click="technologyOpen = !technologyOpen">
          Technologies
        </h3>
        <div class="accordion-panel" v-show="technologyOpen">
          <ul>
            <li>{{ technology1 }}</li>
            <li>{{ technology2 }}</li>
            <li>{{ technology3 }}</li>
          </ul>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" @click="programmingLanguageOpen = !programmingLanguageOpen">
          Programming Languages
        </h3>
        <div class="accordion-panel" v-show="programmingLanguageOpen">
          <ul>
            <li>{{ programmingLanguage1 }}</li>
            <li>{{ programmingLanguage2 }}</li>
            <li>{{ programmingLanguage3 }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skill',
  data() {
    return {
      training1: 'Node.js Bootcamp',
      training2: 'Vue.js Fundamentals Training',
      seminar1: 'Web Development Trends',
      seminar2: 'PHP-SQL: The Backbone of Thousands of Database',
      technology1: 'Node.js',
      technology2: 'HTML',
      technology3: 'CSS',
      programmingLanguage1: 'JavaScript',
      programmingLanguage2: 'Python',
      programmingLanguage3: 'SQL',
      trainingOpen: false,
      seminarOpen: false,
      technologyOpen: false,
      programmingLanguageOpen: false
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