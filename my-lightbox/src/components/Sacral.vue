<template>
    <ul>
        
        <li style="list-style-type: none;">
            <a href="https://kaleta.toadres.pl/assets/2020_10_03_16h57_3.08MB-8e40c26f.jpg" class="glightbox">
                <div class="img__wrap">
                    <img class="img__img" style="height: 300px;" src="@/assets/sacral/2020_10_03_16h57_3.08MB.jpg"
                        alt="image" />
                    <p class="img__description">Puchły</p>
                </div>
            </a>
        </li>
        <li style="list-style-type: none;">
            <a href="https://kaleta.toadres.pl/assets/2021_02_12_12h50_2.77MB-097acfcf.jpg" class="glightbox">
                <div class="img__wrap">
                    <img class="img__img" style="height: 300px;" src="@/assets/sacral/2021_02_12_12h50_2.77MB.jpg"
                        alt="image" />
                    <p class="img__description">Benedictine Abbey in Tyniec</p>
                </div>
            </a>
        </li>
        <li style="list-style-type: none;">
            <a href="https://kaleta.toadres.pl/assets/2020_07_11_17h32_2.98MB-e90b0c19.jpg" class="glightbox">
                <div class="img__wrap2">
                    <img class="img__img" style="height: 300px;" src="@/assets/sacral/2020_07_11_17h32_2.98MB.jpg"
                        alt="image" />
                    <p class="img__description">Church of Peace in Świdnica</p>
                </div>
            </a>
        </li>
        <!--li style="list-style-type: none;">
            <a href="https://kaleta.toadres.pl/assets/2021_02_12_16h50_2.04MB-d4714a20.jpg" class="glightbox">
                <div class="img__wrap">
                    <img class="img__img" style="height: 300px;" src="@/assets/sacral/2021_02_20_17h30_2.79MB.jpg"
                        alt="image" />
                    <p class="img__description">Bytom</p>
                </div>
            </a>
        </li-->
        <li style="list-style-type: none;">
            <a href="https://kaleta.toadres.pl/assets/2021_10_09_21h34_2.56MB-39644118.jpg" class="glightbox">
                <div class="img__wrap">
                    <img class="img__img" style="height: 300px;" src="@/assets/sacral/2021_10_09_21h34_2.56MB.jpg"
                        alt="image" />
                    <p class="img__description">Wadowice</p>
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
