<template>
  <div class="flex flex-row justify-center align-middle">
    <svg class="w-6 h-6 p-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
      height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z" />
    </svg>

    <h1 class="title" :style="{ fontSize: fontSize + 'px' }">
      isit<span class="bold-title">scam</span>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: Number,
      default: 32,
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-family: "Nunito Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: white;
  font-weight: 500;
  justify-content: center;
  align-items: center;
}
.bold-title {
  color: #FF5D5D;
  font-weight: 700;
}
</style>
