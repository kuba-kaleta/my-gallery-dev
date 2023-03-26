<template>
  <ul>
    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_12_11h41_4.93MB-8530b62f.jpg" class="glightbox">
        <div class="img__wrap">
          <img class="img__img" style="height: 300px;" src="@/assets/img/2021_02_12_11h41_4.93MB.jpg" alt="image" />
          <p class="img__description">Tenczyn castle in Rudno</p>
        </div>
      </a>
    </li>

    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_12_16h50_2.04MB-d4714a20.jpg" class="glightbox">
        <img style="height: 300px;" src="@/assets/img/2021_02_12_16h50_2.04MB.jpg" alt="image" />
      </a>
    </li>

    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_13_15h25_3.95MB-97db6230.jpg" class="glightbox">
        <img style="height: 300px;" src="@/assets/img/2021_02_13_15h25_3.95MB.jpg" alt="image" />
      </a>
    </li>

    <li style="list-style-type: none;">
      <a href="https://kaleta.toadres.pl/assets/2021_02_14_16h33_2.33MB-a1613de8.jpg" class="glightbox">
        <img style="height: 300px;" src="@/assets/img/2021_02_14_16h33_2.33MB.jpg" alt="image" />
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

li {
  float: left;
  padding: 8px 8px;
}

div {
  justify-content: center;
}
</style>