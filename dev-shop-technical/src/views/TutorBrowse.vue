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
        <div id="tutors" class="d-flex flex-row justify-content-around mt-5">
            <div class="d-flex flex-column">
                <div id="tutor-card" v-for="tutor in column1" :key="tutor.id"  v-on:click="openNav(tutor)">
                    <tutor-card :tutor="tutor" />
                </div>
            </div>
            <div class="d-flex flex-column">
                <div id="tutor-card" class="d-flex flex-column" v-for="tutor in column2" :key="tutor.id" v-on:click="openNav(tutor)">
                    <tutor-card :tutor="tutor" />
                </div>
            </div>
        </div>
        <!-- OVERLAY -->
        <div id="overlay" class="overlay bg-white" v-show="overlayShow">
            <div id="chevron" v-on:click="closeNav" class="d-flex justify-content-center align-items-center rounded-circle bg-eggshell">
                <img src="../assets/LChevIcon.svg" />
            </div>
            <tutor-details :tutor="overlay" />
        </div>
    </div>
</template>

<script>
import TutorCard from '../components/TutorCard.vue';
import TutorDetails from '../components/TutorDetails.vue';
export default {
  components: { TutorCard, TutorDetails },

  data() {
    return {
          column1: [],
          column2: [],
          overlayShow: false,
          overlay: {
              firstName: '',
              lastName: '',
              image: '',
              grades: '',
              about: '',
              resume: [],
              certifications: [],
          },
          tutors: [
            {
                id: 1,
                firstName: 'Tyler',
                lastName: 'Nix',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.',
                resume: ['2010 Penn State - Math Major', '2014 University of Texas - Doctorate of Math', '2018 - McDonald\'s - Lead Fry Cook'],
                certifications: ['Child Safety Check - PA - Passed', 'COVID - NEGATIVE'],
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 2,
                firstName: 'Jerrod',
                lastName: 'Bluk',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 3,
                firstName: 'Tina',
                lastName: 'Grey',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 4,
                firstName: 'Stacy',
                lastName: 'Smith',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 5,
                firstName: 'Tommy',
                lastName: 'Yang',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
            {
                id: 6,
                firstName: 'Alecia',
                lastName: 'Keys',
                tutorImage: 'https://images.theconversation.com/files/268455/original/file-20190409-2931-rzhl22.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
                grades: '8th - 12th',
                subjects: 'Math, Science',
                verified: true,
            },
        ]}
    },

    created() {
        for(let i = 0; i < this.tutors.length; i++) {
            if (i % 2 == 0) {
                this.column1.push(this.tutors[i]);
            } else {
                this.column2.push(this.tutors[i]);
            }
        }
    },

    methods: {

        openNav(tutor) {
            this.overlay = tutor;
            this.overlayShow = true;
            document.getElementById("overlay").classList.remove('slide-right');
            document.getElementById("overlay").classList.add('slide-left');


        },

        closeNav() {
            document.getElementById("overlay").classList.remove('slide-left');
            document.getElementById("overlay").classList.add('slide-right');
            this.overlayShow = false;

        },
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

.margin-5-right {
    margin-right: 5vw;
}

.margin-5-left {
    margin-left: 5vw;
}

h5 {
    color: #499FF6;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
}

.slide-left {
    animation: 0.3s slide-left;
    margin-left: 0%;
}

@keyframes slide-left {
    from {
        margin-left: 100%;
    }
    to {
        margin-left: 0%;
    }
}

.slide-right {
    animation: 0.3s slide-right;
    margin-left: 100%;
}

@keyframes slide-right {
    from {
        margin-left: 0%;
    }
    to {
        margin-left: 100%;
    }
}

</style>