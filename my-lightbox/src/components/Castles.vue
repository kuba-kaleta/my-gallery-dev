<template>
  <ul>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_14_16h33_2.33MB-a1613de8.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_07_11_16h34_3.56MB.jpg" alt="image" />
          <p class="img__description">Grodno Castle</p>
        </div>
      </a>
    </li>    
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_14_16h33_2.33MB-a1613de8.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_07_25_13h34_3.80MB.jpg" alt="image" />
          <p class="img__description">Kliczków</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_12_16h50_2.04MB-d4714a20.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_06_20_13h45_2.46MB.jpg" alt="image" />
          <p class="img__description">Karpniki</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_12_11h41_4.93MB-8530b62f.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_06_20_11h46_3.44MB.jpg" alt="image" />
          <p class="img__description">Bolków Castle</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_13_15h25_3.95MB-97db6230.jpg" class="glightbox">
        <div class="img__wrap2">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_06_20_15h46_3.25MB.jpg" alt="image" />
          <p class="img__description">Chojnik Castle</p>
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

