<template>
    <div id="main">
        <router-link :to="{ name: 'home' }">HOME</router-link>
        <router-link :to="{ name: 'tutorbrowse' }">TUTORBROWSE</router-link>
        <router-link :to="{ name: 'tutordetails' }">TUTORDETAILS</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#main {
    background-image: url(../assets/bg.jpg);
}

</style>