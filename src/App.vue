<template>
  <div id="app">
    <div class="sidebar">
    <img src="./assets/piclogo.png" width="70%" style="display:block; margin-left: 2.5em; margin-top: 2em; margin-bottom: 1em;">
      <ul class="list1"> 
        <li class="list1-item">Coleen Masbang</li>
        <li class="list2-item">Web Developer</li>
      </ul>
      <h2 class="sidebar-text">Information</h2>
      <ul class="list-group">
        <li class="list-group-item">Email: coleenmasbang@gmail.com</li>
        <li class="list-group-item">Contact Number: 09036544377</li>
        <li class="list-group-item">Address: Pampanga, North Luzon</li>
      </ul>
    </div>
    <div class="main" :class="{'expanded': activeTab !== 'profile'}">
      <div class="header">
        <nav>
          <a class="navbar-brand" href="#"></a>
          <div>
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link" href="#" @click="activeTab='profile'">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="activeTab='education'">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click="activeTab='skill'">Skills</a>
              </li>
            </ul>
          </div>      
        </nav>
      </div>
      <div v-if="activeTab==='profile'">
        <profile></profile>
      </div>

      <div v-if="activeTab==='education'">
        <education></education>
      </div>

      <div v-if="activeTab==='skill'">
        <skill></skill>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skill from './components/Skill.vue'

export default {
  components: {
    Profile,
    Education,
    Skill
  },
  name: 'app',
  data() {
    return {
      msg: 'Web Developer',
      activeTab: 'profile'
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  background-color: #e7e4e4;
  margin-left: 5em;
  margin-right: 5em;
}

.sidebar {
  background-color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  width: auto; /* fixed width */
}

.nav-link {
  color: rgb(136, 120, 120);
}

.nav-link:focus, .nav-link:hover {
  color: rgb(228, 211, 211);
}

.list-group-item {
  margin-top: 6px;
  background-color: #333;
  color: rgb(247, 242, 242);
  border: none;
  font-size: 14px;
}

.main {
  flex: 1; /* fill remaining space */
  padding-left: 1em;
  padding-right: 5em;
  margin-left: 1em;
  margin-right: 1em;
  background-color: white;
  height: 100vh;
}

.main.expanded {
  padding-right: 5rem; /* reduce right padding when not in profile tab */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}

.list1-item {
  color: rgb(247, 242, 242);
  font-size: 25px;
}

.list2-item {
  color: rgb(247, 242, 242);
  font-size: 12px;
}

.sidebar-text {
  background-color: #555;
  font-size: 20px;
  margin-top: 1em;
}

h1, h2 {
  font-weight: normal;
  background-color: #555;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #fff;
}

h3 {
  font-size: 20px;
  color: #333;
  padding-top: 1em;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
}

li {
  margin: 0 0 5px 0;
}

.active {
  font-weight: bold;
}
</style>