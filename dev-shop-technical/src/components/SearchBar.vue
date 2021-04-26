<template>
    <div class="bg-white rounded-pill">
        <input type="text" class="no-border" placeholder="     Search" />
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

input {
    background: url('../assets/searchIcon.svg') no-repeat right 15px center;
    height: 44px;
    width: 75vw;
}

::placeholder {
    color: #707070;
    font-weight: lighter;
}



</style>