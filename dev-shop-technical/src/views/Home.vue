<template>
    <div id="main" class="d-flex flex-column justify-content-between">
        <search-bar />
        <bottom-card />
    </div>
</template>

<script>
import BottomCard from '../components/BottomCard.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
  components: { SearchBar, BottomCard },
    
}
</script>

<style scoped>

#main {
    background-image: url(../assets/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

bottom-card {
    position: fixed;
    bottom: 0;
}

</style>