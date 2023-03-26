<script setup lang="ts">
</script>

<template>
    <div class="divfont">
      <ul>
        <li style="list-style-type: none;">
          <RouterLink to="/lowerSilesia">Lower Silesia</RouterLink>
        </li>

        <li style="list-style-type: none;">
          <RouterLink to="/silesia">Silesia</RouterLink>
        </li>

        <li style="list-style-type: none;">
          <RouterLink to="/lesserPoland">Lesser Poland</RouterLink>
        </li>

        <li style="list-style-type: none;">
          <RouterLink to="/pomeranian">Pomeranian</RouterLink>
        </li>
      </ul>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .galleries {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.divfont {
  font-size: 1.5em;
}

.container {
  position: relative;
  vertical-align: middle;
}
</style>
