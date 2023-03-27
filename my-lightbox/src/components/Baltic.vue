<template>
  <ul>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2022_08_06_17h23_3.66MB-8844ff8a.jpg" class="glightbox">
        <div class="img__wrap2">
          <img class="img__img" style="height: 300px;" src="@/assets/baltic/2022_08_06_17h23_3.66MB.jpg"
            alt="image" />
          <p class="img__description">Czołpino</p>
        </div>
      </a>
    </li>

    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2022_08_06_17h49_3.74MB-677ad17b.jpg" class="glightbox">
        <div class="img__wrap2">
          <img class="img__img" style="height: 300px;" src="@/assets/baltic/2022_08_06_17h49_3.74MB.jpg"
            alt="image" />
          <p class="img__description">Moving dune in Słowiński National Park</p>
        </div>
      </a>
    </li>

    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2022_08_06_16h14_3.36MB-413e90b8.jpg" class="glightbox">
        <div class="img__wrap2">
          <img class="img__img" style="height: 300px;" src="@/assets/baltic/2022_08_06_16h14_3.36MB.jpg"
            alt="image" />
          <p class="img__description">Czołpino Lighthouse</p>
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
