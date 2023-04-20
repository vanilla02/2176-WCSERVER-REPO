<template>
  <div>
    <h2>Profile</h2>
    <div class="accordion">
      <div class="accordion-item">
        <h3 class="accordion-header" @click="nameOpen = !nameOpen">
          Name
        </h3>
        <div class="accordion-panel" v-show="nameOpen">
          {{ name }}
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" @click="courseOpen = !courseOpen">
          Course
        </h3>
        <div class="accordion-panel" v-show="courseOpen">
          {{ course }}
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" @click="specializationOpen = !specializationOpen">
          Specialization
        </h3>
        <div class="accordion-panel" v-show="specializationOpen">
          {{ specialization }}
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" @click="objectiveOpen = !objectiveOpen">
          Objective
        </h3>
        <div class="accordion-panel" v-show="objectiveOpen">
          {{ objective }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: 'Coleen Isobelle D. Masbang',
      course: 'Bachelor of Science in Information Technology',
      specialization: 'Web Development',
      objective: 'To secure a challenging role in the field of information technology, where I can leverage my skills and experience to contribute to the growth and success of the organization while advancing my career.',
      nameOpen: false,
      courseOpen: false,
      specializationOpen: false,
      objectiveOpen: false
    }
  }
}
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
