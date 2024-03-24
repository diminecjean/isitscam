<template>
  <fwb-navbar class="custom-navbar absolute top-0 w-full" :style="{ backgroundColor: primaryColor }">
    <template #logo>
      <a href="/">
        <logo :fontSize="24" />
      </a>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link class="custom-link" link=" /report"> What is Scam? </fwb-navbar-link>
        <fwb-navbar-link class="custom-link" link="/home"> Scam Detection </fwb-navbar-link>
        <fwb-navbar-link class="custom-link" link="/report"> Discover </fwb-navbar-link>
      </fwb-navbar-collapse>

      <!-- <div class="flex items-center gap-4">
        <div class="flex">
          <a href="/report" class="text-gray-700 hover:text-blue-300">What is a Scam?</a>
        </div>
      </div> -->
    </template>
    <template #right-side>
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link class="custom-link" link="/login"> Log In </fwb-navbar-link>
      </fwb-navbar-collapse>
      <fwb-button href="/register" class="my-auto h-5 items-center bg-[#21629e]">
        <p class="text-white">Sign Up</p>
      </fwb-button>
    </template>
  </fwb-navbar>
</template>

<script>
import Logo from "./Logo.vue";
import Color from "../constants/color";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      primaryColor: Color.primary,
      secondaryColor: Color.secondary,
    }
  },
};
</script>

<script setup>
import {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.custom-navbar {
  z-index: 1000;
  padding-left: 0;
  display: flex;
  padding-right: 0;
  flex-direction: row;
  align-items: center;
  height: 35px;
}

:deep(.custom-link a) {
  color: white !important;
}

:deep(.custom-link a:hover) {
  color: rgb(140, 203, 255) !important;
}
</style>
