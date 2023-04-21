<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LifePocket</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.path === '/' }" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.path === '/blog' }" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.path === '/about' }" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.path === '/contact' }" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.path === '/gallery' }" to="/gallery">Gallery</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* styles for navigation bar and app container */
</style>
