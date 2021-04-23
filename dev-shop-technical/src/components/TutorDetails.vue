<template>
    <div id="main mt-0">
       <div class="mt-3">
            <img src="../assets/eduIcon.svg" />
            <h5 class="mt-2">{{ tutor.name }}</h5>
        </div>
        <div>
           <div class="d-flex verified-icon justify-content-center align-items-center">
                <img v-if="tutor.verified" src="../assets/verifiedIcon.svg" />
           </div>
            <img id="tutor-image" class="card-img-top" :src="tutor.tutorImage" />
       </div>
    </div>
</template>

<script>
export default {
    props: ['tutor'],
    
}
</script>

<style scoped>

#main {
    height: 100vh;
    width: 100vw;
}

#tutor-image {
    height: 160px;
    width: 160px;
    border-radius: 20px;
}

h5 {
    color: #499FF6;
    text-transform: uppercase;
}

.verified-icon {
    position: absolute;
    top: 88px;
    left: 0px;
    height: 40px;
    width: 40px;
    background: #FFFFFFCC;
    border-top-right-radius: 20px;
}

</style>