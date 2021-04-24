<template>
    <div id="main mt-0">
       <div class="mt-3">
            <img src="../assets/eduIcon.svg" />
            <h5 class="mt-2">{{ tutor.name }}</h5>
        </div>
        <div class="d-flex flex-column align-items-center">
           <div class="d-flex verified-icon justify-content-center align-items-center">
                <img v-if="tutor.verified" src="../assets/verifiedIcon.svg" />
           </div>
            <img id="tutor-image" class="card-img-top" :src="tutor.tutorImage" />
       </div>
       <div class="d-flex flex-column align-items-center">
           <h5>{{ tutor.grades }}</h5>
           <h5>{{ tutor.subjects }}</h5>
           <h4>About {{ tutor.name }}</h4>
            <p>{{ tutor.about }}</p>
            <h4>Resume/Work Experience</h4>
            <ul>
                <li v-for="(item, index) in tutor.resume" :key="index"><span>{{ item }}</span></li>
            </ul>
            <h4>Certifications</h4>
            <ul>
                <li v-for="(item, index) in tutor.certifications" :key="index"><span>{{ item }}</span></li>
            </ul>
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
    position: relative;
    top: 160px;
    left: -55px;
    height: 50px;
    width: 50px;
    background: #FFFFFFCC;
    border-top-right-radius: 20px;
}

p {
    color: #707070;
}

ul {
    list-style-position: inside;
}

li {
    font-size: 13px;
}

span {
    position: relative;
    left: -10px;
}

</style>