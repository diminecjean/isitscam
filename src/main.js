import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//in your `main.js` file
import "../node_modules/flowbite-vue/dist/index.css";

// Router
import router from "./router/index.js";

// Components
import ScamCard from "./components/ScamCard.vue";
import Logo from "./components/Logo.vue";
import WhatsAppGame from "./components/WhatsAppGame.vue";
import EmailGame from "./components/EmailGame.vue";
import Navbar from "./components/Navbar.vue";

const app = createApp(App);
app.component("scam-card", ScamCard);
app.component("email-game", EmailGame);
app.component("whatsapp-game", WhatsAppGame);
app.component("logo", Logo);
app.component("navbar", Navbar);
app.use(router);
app.mount("#app");
