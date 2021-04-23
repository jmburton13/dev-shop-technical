<template>
    <div>
        <router-link :to="{ name: 'home' }">
            <div id="chevron" class="d-flex justify-content-center align-items-center rounded-circle bg-eggshell">
            <img src="../assets/LChevIcon.svg" />
            </div>
        </router-link>
        <div class="mt-3">
            <img src="../assets/eduIcon.svg" />
            <h5 class="mt-2">TUTORS</h5>
        </div>
        <div id="tutors" class="d-flex flex-wrap mt-5">
            <div id="tutor-card" v-for="tutor in tutors" :key="tutor.id">
                <tutor-card :tutor="tutor" />
            </div>
        </div>
    </div>
</template>

<script>
import TutorCard from '../components/TutorCard.vue';
export default {
  components: { TutorCard },

  data() {
      return {
          tutorCount: 0,
          tutors: [
            {
                id: 1,
                name: 'Tyler Nix',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 2,
                name: 'Jerrod Bluk',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 3,
                name: 'Tina Grey',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 4,
                name: 'Stacy Smith',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 5,
                name: 'Tommy Yang',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 6,
                name: 'Alicia Keys',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
        ]}
    },
}
</script>

<style scoped>

#chevron {
    height: 37px;
    width: 37px;
    position: absolute;
    top: 17px;
    left: 17px;
}

#tutors {
    width: 80vw;
    margin-left: 10vw;
}

.margin-5-right {
    margin-right: 5vw;
}

.margin-5-left {
    margin-left: 5vw;
}

h5 {
    color: #499FF6;
}

</style>