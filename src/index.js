import "./css/style.css";

import Vue from "vue";
import Test from "./components/Test.vue";
import Navbar from "./components/Navbar.vue";

const app = new Vue({
    el: "#app",
    components: {
        Test,
        Navbar
    }
});