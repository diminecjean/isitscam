// Routes
import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/scam-detector.vue";
import Main from "../views/Main.vue";
import Report from "../views/Report.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Scam from "../views/Scam.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/scam-detector", name: "Home", component: Home, props: true }, // Define route prop for Home
  { path: "/report", name: "Report", component: Report },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/verylegit.link/Ea@:5HQWRN=G=P~ZS903malwarebotnet.pdf.exe",
    name: "Downloading Viruses...",
    component: Scam,
  },
];

const router = createRouter({
  history: createWebHistory('/isitscam/'),
  routes,
});

export default router;
