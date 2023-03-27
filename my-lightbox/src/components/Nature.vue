<template>
  <ul>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_11_13_12h45_2.24MB-144cbadc.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/nature/2021_11_13_12h45_2.24MB.jpg" alt="image" />
          <p class="img__description">Blędne Skały in the Stołowe Mountains</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2022_08_14_09h52_2.43MB-f1c03aab.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/nature/2022_08_14_09h52_2.43MB.jpg" alt="image" />
          <p class="img__description">Rysy in Tatry Mountains</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2020_07_18_17h25_3.69MB-d7431347.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/nature/2020_07_18_17h25_3.69MB.jpg" alt="image" />
          <p class="img__description">Kamieńczyk waterfall</p>
        </div>
      </a>
    </li>    

    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_12_16h50_2.04MB-d4714a20.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/nature/2020_10_02_14h31_2.70MB.jpg" alt="image" />
          <p class="img__description">Ostrężnik Cave</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_12_11h41_4.93MB-8530b62f.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/nature/2021_08_12_14h57_6.32MB.jpg" alt="image" />
          <p class="img__description">Bison Reserve in Białowieża</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_10_16_17h38_5.77MB-8258b478.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/nature/2021_10_16_17h38_5.77MB.jpg" alt="image" />
          <p class="img__description">Nowe Czarnowo</p>
        </div>
      </a>
    </li>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_08_13_15h46_5.23MB-2f0874a3.jpg" class="glightbox">
        <div class="img__wrap2">
          <img class="img__img" style="height: 300px;" src="@/assets/nature/2021_08_13_15h46_5.23MB.jpg" alt="image" />
          <p class="img__description">Poleski National Park</p>
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
