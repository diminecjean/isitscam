<template>
  <!-- <div class="w-60 p-8"> -->
  <p class="text-black text-xl font-medium">
    Your son has been texting you on WhatsApp and he suddenly sends you a
    link!
  </p>
  <!-- </div> -->
  <div class="flex flex-row">
    <!-- <div class="h-5/6 w-96 bg-white"> -->
    <div class="relative rounded-lg bg-white max-w-72 outline-gray-400 outline outline-4 h-full">
      <div class="w-full h-12 bg-black flex items-center">
        <div class="flex flex-row items-center justify-center">
          <img class="rounded-full h-6 w-6 mx-4"
            src="https://assets-global.website-files.com/6257de5eae6add9d091204a4/6301f82eb7fffa583f9df5bf_Brendan%20Choo.png" />
          <div class="items-center justify-center m-2">
            <p class="text-white text-sm">Brendan (Son)</p>
          </div>
        </div>
      </div>
      <div class="w-4/5 mx-4 my-4 rounded-md bg-black">
        <p class="p-2 text-left text-sm text-white">
          I'm off to work now mom, I'll see you tomorrow for our dinner
          together!
        </p>
      </div>
      <div class="w-1/2 mx-4 my-4 rounded-md ml-auto mr-4 bg-black">
        <p class="p-2 text-left text-sm text-white">Love you son bye 😘</p>
      </div>
      <div class="flex justify-center rounded-md align-center">
        <div class="w-1/5 -mx-1 -my-1 rounded-md bg-black">
          <p class="p-1 text-xs text-gray-500">Today</p>
        </div>
      </div>
      <div class="w-4/5 mx-4 my-4 rounded-md bg-black">
        <p class="p-2 text-left text-white text-sm">
          Wow mom, take a look at this funny video my friend sent me!<a>
            https://youtu.be/xvFZjo5PgG0</a>
        </p>
      </div>
      <div class="w-1/3 mx-4 my-4 rounded-md ml-auto mr-4 bg-black">
        <p class="p-2 text-left">?????</p>
      </div>
      <div class="w-full rounded-lg h-16 bg-black flex items-center absolute bottom-0 flex align-middle justify-center">
        <button type="button"
          class="outline-white outline outline-2 rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"></button>
      </div>
    </div>
    <!-- </div> -->

    <div class="flex flex-col p-8">
      <div class="flex flex-row p-8">
        <p class="text-3xl">isit<span class="font-bold text-red">scam</span>?</p>
      </div>
      <button @click="toggleScam" type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        It's a Scam!!!
      </button>
      <button @click="toggleNotScam" type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        It's fine
      </button>
      <button @click="toggleButton" type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Quit Game
      </button>
      <p class="text-black" v-if="correct">It's actually not a scam!!!!</p>
      <p class="text-black" v-if="wrong">Correct!!!!!</p>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      correct: false,
      wrong: false,
    };
  },
  methods: {
    toggleButton() {
      console.log();
      this.$emit("whatsappClicked", false);
    },
    toggleScam() {
      this.correct = true;
      this.wrong = false;
    },
    toggleNotScam() {
      this.correct = false;
      this.wrong = true;
    },
  },
};
</script>
