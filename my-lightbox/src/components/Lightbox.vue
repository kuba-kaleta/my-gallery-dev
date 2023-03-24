<template>

    <ul >
      <li style="list-style-type: none;">
        <a href="https://kaleta.toadres.pl/assets/2021_02_12_11h41_4.93MB-8530b62f.jpg" class="glightbox" >          
          <img style="height: 300px;" src="@/assets/img/2021_02_12_11h41_4.93MB.jpg" alt="image" />
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
import  "glightbox/dist/css/glightbox.css";
import  "glightbox/dist/js/glightbox.js";
import GLightbox from 'glightbox';
export default {
        
mounted(){ 
          //lightbox settings
              this.lightbox = GLightbox({ 
              selector: ".glightbox"
              });
    }
}
</script>

<style>
li {
  float: left;
  padding: 8px 8px;
}

div {
  justify-content: center;
}
</style>