<template>
    <div class="blog">
      <div class="blog-header">
        <h1 class="blog-title">Traveling the World: A Dream Fueled by Friendship</h1>
        <p class="blog-description"> Join me on a journey to fulfill my lifelong dream of traveling the world, inspired by foreign friends who shared their experiences and photos. Discover the magic of meeting people from other countries and exploring the planet's beauty and diversity. Let's chase our dreams together and experience all that the world has to offer. </p>
      </div>
      <div class="blog-content">
        As I sit here in our house, scrolling through my social media feed, I can't help but dream of traveling the world. My foreign friends from different countries post pictures and videos of their travels, and I find myself yearning to be in their shoes, exploring new places and meeting new people.  Traveling has always been a dream of mine, but it wasn't until I started making friends with people from different parts of the world that my desire to explore became even stronger. Seeing their photos and hearing their stories makes me want to experience those places for myself, and I know that I won't be satisfied until I've seen as much of the world as I possibly can.  There's something magical about meeting people from other countries. It's like the world becomes smaller, and you start to see that we're all more alike than we are different. I've made friends with people from Europe, Asia, South America, and beyond, and each new friendship has opened my eyes to a new culture and a new way of thinking.  But it's not just about the people, of course. There's so much to see in this world, from natural wonders like the Grand Canyon and the Northern Lights, to man-made marvels like the Eiffel Tower and the Great Wall of China. I want to see it all, to experience the beauty and diversity of this planet.  I know that traveling the world won't be easy, and it certainly won't be cheap. But I'm willing to work hard and save up my money, to make sacrifices and take risks, if it means I can fulfill my dream of seeing the world and meeting my foreign friends in person.  So, to all my friends out there, I want you to know that you inspire me. You make me want to travel, to see the world with my own eyes and experience all that it has to offer. And to anyone else reading this, I encourage you to chase your own dreams, whatever they may be. Life is short, and there's a whole world out there waiting to be explored.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Blog'
  }
  </script>
  
  <style>
  .blog {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .blog-header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .blog-title {
    font-size: 48px;
    margin-bottom: 20px;
    margin-top:50px;
  }
  
  .blog-description {
    font-size: 24px;
    margin-bottom: 0;
  }
  
  .blog-content {
    line-height: 1.5;
  }
  
  /* media query for smaller screens */
  @media screen and (max-width: 600px) {
    .blog {
      max-width: 100%;
      padding: 0 20px;
    }
    .blog-title {
      font-size: 36px;
    }
    .blog-description {
      font-size: 18px;
    }
  }
  </style>
  