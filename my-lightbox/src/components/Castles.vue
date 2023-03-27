<template>
  <ul>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2020_07_11_16h34_3.56MB-b624941f.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_07_11_16h34_3.56MB.jpg" alt="image" />
          <p class="img__description">Grodno Castle</p>
        </div>
      </a>
    </li>    
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2020_07_25_13h34_3.80MB-95bb3db3.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_07_25_13h34_3.80MB.jpg" alt="image" />
          <p class="img__description">Kliczków</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2020_06_20_13h45_2.46MB-c9fbae84.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_06_20_13h45_2.46MB.jpg" alt="image" />
          <p class="img__description">Karpniki</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2020_06_20_11h46_3.44MB-a84e0ba3.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/castles/2020_06_20_11h46_3.44MB.jpg" alt="image" />
          <p class="img__description">Bolków Castle</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2020_06_20_15h46_3.25MB-c76dfae1.jpg" class="glightbox">
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
