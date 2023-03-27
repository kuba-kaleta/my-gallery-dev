<script setup lang="ts">
</script>

<template>
    <div class="divfont">
      <ul>
        <li>
          <RouterLink to="/castles">Castles of southern Poland</RouterLink>
        </li>
        <li>
          <RouterLink to="/impr">Impressive structures</RouterLink>
        </li>
        <li>
          <RouterLink to="/sacral">Sacral architecture</RouterLink>
        </li>
        <li>
          <RouterLink to="/nature">Nature and mountains</RouterLink>
        </li>
        <li>
          <RouterLink to="/baltic">Baltic coast</RouterLink>
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
  width: 350px;
}

.container {
  position: relative;
  vertical-align: middle;
}
</style>
