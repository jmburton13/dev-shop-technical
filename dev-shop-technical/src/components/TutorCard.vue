<template>
    <div class="card no-border p-0 mb-3" :class="{ 'margin-right-5': tutor.id % 2 == 1, 'margin-left-5': tutor.id % 2 ==0 }">
       <div>
           <div class="d-flex verified-icon justify-content-center align-items-center">
                <img v-if="tutor.verified" src="../assets/verifiedIcon.svg" />
           </div>
            <img class="card-img-top" :src="tutor.tutorImage" />
       </div>
       <div class="card-body m-0 p-0">
           <h4 class="text-center m-0 mt-1 p-0">{{ tutor.name }}</h4>
           <p class="text-center m-0 p-0">{{ tutor.grades }}</p>
           <p class="text-center m-0 p-0">{{ tutor.subjects }}</p>
       </div>
    </div>
</template>

<script>
export default {
    props: ['tutor'],
    
};
</script>

<style scoped>

.card {
    width: 128px;
    height: 176px;
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

img {
    border-radius: 20px;
}

p {
    color: #707070;
    font-size: 9px !important;
}


</style>