<template>
  <ul>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_05_15_20h45_2.45MB-1933ca63.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_05_15_20h45_2.45MB.jpg" alt="image" />
          <p class="img__description">Raczyński Library Poznań</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_10_10_09h27_3.16MB-59167ba3.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_10_10_09h27_3.16MB.jpg" alt="image" />
          <p class="img__description">Palace in Pszczyna</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_05_08_18h28_4.70MB-cdb66dd8.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_05_08_18h28_4.70MB.jpg" alt="image" />
          <p class="img__description">The Great Theater - Opera Poznań</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_07_18_16h23_3.14MB-2a8eb542.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_07_18_16h23_3.14MB.jpg" alt="image" />
          <p class="img__description">Dobrzyca</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_07_10_12h13_4.32MB-c534fca0.jpg" class="glightbox">
        <div class="img__wrap2">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_07_10_12h13_4.32MB.jpg" alt="image" />
          <p class="img__description">Palace in Pławniowice</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_07_10_16h24_3.38MB-e2d59223.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/impr/2021_07_10_16h24_3.38MB.jpg" alt="image" />
          <p class="img__description">Silesian Skyscraper</p>
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
