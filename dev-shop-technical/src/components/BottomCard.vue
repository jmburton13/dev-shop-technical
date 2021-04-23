<template>
    <div class="d-flex align-items-center flex-column">
        <div id="eduicon" class="bg-white rounded-circle d-flex justify-content-center align-items-center">
            <img src="../assets/eduIcon.svg" />
        </div>
        <div id="card-background" class="bg-blue round-top">
            <div class="mt-5"><h5>EDUCATION</h5></div>
            <div class="d-flex flex-row justify-content-evenly mt-4">
                <router-link class="w-25" :to="{ name: 'tutorbrowse' }">
                    <img class="mb-3" src="../assets/tutorIcon.svg">
                    <p>Find A Tutor</p>
                </router-link>
                <router-link class="w-25" :to="{ name: 'unwired' }">
                    <img class="mb-3" src="../assets/askIcon.svg">
                    <p>Ask A Question</p>
                </router-link>
                <router-link class="w-25" :to="{ name: 'unwired' }">
                    <img class="mb-3" src="../assets/eventIcon.svg">
                    <p>Events</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#card-background {
    height: 189px;
    width: 100vw;
}

.rounded-circle {
    height: 64px;
    width: 64px;
}

#eduicon {
    position: relative;
    bottom: -32px;
    box-shadow: 0px 3px 6px #00000029;
}

</style>