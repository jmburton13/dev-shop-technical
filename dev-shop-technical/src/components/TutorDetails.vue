<template>
    <div id="main" class="d-flex flex-column justify-content-between align-items-center">
       <div class="mt-3">
            <img src="../assets/eduIcon.svg" />
            <h5 id="main-name" class="mt-2 uppercase text-blue">{{ tutor.firstName }} {{ tutor.lastName }}</h5>
        </div>
        <div class="d-flex flex-row justify-content-center">
           <div class="d-flex verified-icon justify-content-center align-items-center">
                <img id="tutor-check" v-if="tutor.verified" src="../assets/verifiedIcon.svg" />
           </div>
            <img id="tutor-image" class="" :src="tutor.tutorImage" />
       </div>
        <div>
            <h5 class="m-0 p-0">{{ tutor.grades }}</h5>
            <h5 >{{ tutor.subjects }}</h5>
        </div>
        <h4>About {{ tutor.firstName }}</h4>
        <p>{{ tutor.about }}</p>
        <h4>Resume/Work Experience</h4>
        <ul>
            <li v-for="(item, index) in tutor.resume" :key="index"><span>{{ item }}</span></li>
        </ul>
        <h4>Certifications</h4>
        <ul>
            <li v-for="(item, index) in tutor.certifications" :key="index"><span>{{ item }}</span></li>
        </ul>
        <button v-on:click="consolePrint(), closeNav()" class="rounded-pill no-border bg-blue text-white uppercase mb-4">contact {{ tutor.firstName }}</button>
    </div>
</template>

<script>
export default {
    props: ['tutor'],
    
    methods: {
        consolePrint() {
            console.log("Great Googly Moogly");
        },

        closeNav() {
            document.getElementById("overlay").classList.remove('slide-left');
            document.getElementById("overlay").classList.add('slide-right')
        },

    },
}
</script>

<style scoped>

#main {
    height: 100%;
    width: 100%;
}

h5 {
    color: #707070;
    font-weight: 400 !important;
}

#main-name {
    font-weight: bolder !important;
}

#tutor-image {
    position: relative;
    right: 25px;
    height: 160px;
    width: 160px;
    border-radius: 20px;
}

#tutor-check {
    width: 24px;
}

.verified-icon {
    position: relative;
    z-index: 1;
    top: 110px;
    left: 25px;
    height: 50px;
    width: 50px;
    background: #FFFFFFCC;
    border-top-right-radius: 20px;
}

p {
    width: 80vw;
    color: #707070;
}

ul {
    list-style-position: inside;
    list-style: none;
}

ul li::before {
    content: "\2022";
    color: #707070;
    display: inline-block;
    width: 2px;
    position: relative;
    left: -15px;
}

li {
    font-size: 13px;
}

span {
    position: relative;
    left: -10px;
}

button {
    width: 80vw;
    height: 57px;
    font-weight: 600;
}

</style>