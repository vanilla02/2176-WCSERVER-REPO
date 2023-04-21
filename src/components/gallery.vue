<template>
  <div>
    <div class="gallery-container">
      <div class="gallery-item">
        <img src="https://picsum.photos/id/1015/400/300" alt="gallery 1">
        <div class="caption"></div>
      </div>
      <div class="gallery-item">
        <img src="https://picsum.photos/id/1016/400/300" alt="gallery 2">
        <div class="caption"></div>
      </div>
      <div class="gallery-item">
        <img src="https://picsum.photos/id/1018/400/300" alt="gallery 3">
        <div class="caption"></div>
      </div>
      <div class="gallery-item">
        <img src="https://picsum.photos/id/1021/400/300" alt="gallery 4">
        <div class="caption"></div>
      </div>
    </div>
  </div>
</template>

<style>
  .gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .gallery-item {
    margin: 20px;
    text-align: center;
  }

  .gallery-item img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .caption {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  
</style>


<script>
export default {
  name: 'gallery',
  data() {
    return {
      title: 'gallery'
    }
  }
}
</script> 