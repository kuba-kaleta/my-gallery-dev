<template>
  <ul>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_14_16h33_2.33MB-a1613de8.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_05_08_18h28_4.70MB.jpg" alt="image" />
          <p class="img__description">The Great Theater - Opera Poznań</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_14_16h33_2.33MB-a1613de8.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_10_10_09h27_3.16MB.jpg" alt="image" />
          <p class="img__description">Palace in Pszczyna</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_14_16h33_2.33MB-a1613de8.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_07_10_12h56_2.74MB.jpg" alt="image" />
          <p class="img__description">Wooden Gliwice Radio Tower </p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_14_16h33_2.33MB-a1613de8.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_07_10_16h24_3.38MB.jpg" alt="image" />
          <p class="img__description">Silesian Skyscraper</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_14_16h33_2.33MB-a1613de8.jpg" class="glightbox">
        <div class="img__wrap2">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_07_10_12h13_4.32MB.jpg" alt="image" />
          <p class="img__description">Palace in Pławniowice</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import "glightbox/dist/css/glightbox.css";
import "glightbox/dist/js/glightbox.js";
import GLightbox from 'glightbox';
export default {

  mounted() {
    //lightbox settings
    this.lightbox = GLightbox({
      selector: ".glightbox"
    });
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

/* relevant styles */
.img__wrap {
  position: relative;
  height: 300px;
  width: 225px;
  display: flex;
  text-align: center;
}

.img__wrap2 {
  position: relative;
  height: 300px;
  width: 400px;
  display: flex;
  text-align: center;
}

.img__description {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(172, 184, 191, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  padding-top: 140px;

  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
}

.img__wrap:hover .img__description {
  visibility: visible;
  opacity: 1;
}

.img__wrap2:hover .img__description {
  visibility: visible;
  opacity: 1;
}

li {
  float: left;
  padding: 8px 8px;
}

div {
  justify-content: center;
}
</style>