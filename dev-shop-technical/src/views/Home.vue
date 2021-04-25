<template>
    <div id="main" class="d-flex flex-column justify-content-between fade-in">
        <div class="d-flex flex-row justify-content-between align-items-center mt-3 mx-3">
            <search-bar />
            <div id="menu" class="d-flex justify-content-center align-items-center rounded-circle bg-eggshell">
                <img src="../assets/menuIcon.svg" />
            </div>
        </div>
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

#menu {
    height: 48px;
    width: 48px;
}

</style>