<template>
  <p class="text-black text-xl font-medium mb-6 w-full">
    Given you are a loyal customer to MooBank,<br />
    what do you think of this email?
  </p>
  <div class="flex flex-row">
    <div class="bg-white w-[500px] relative rounded-lg outline-black outline outline-1 text-left">
      <div class="flex flex-row justify-left align-middle m-2">
        <img class="h-12 w-12 rounded-full m-2" src="../assets/moobank.png " />
        <div class="flex flex-col m-2 justify-center align-middle">
          <p class="text-black">From: &ltMooBank4u@yahoo.com&gt</p>
          <p class="text-black">To: Me</p>
        </div>
      </div>
      <div class="m-6">
        <p class="text-black">Dear Valued Customer:</p>
        <br />
        <p class="text-black">
          Your account has been flagged by our security experts. You are therefore
          required to verify your details to avoid service suspension.
        </p>
        <br />
        <p class="text-black">Click <a>here</a> to complete the steps</p>
        <br />
        <p class="text-black">This is very urgent!</p>
      </div>
    </div>
  
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
      <p class="text-black" v-if="wrong">It's actually a scam!!!!</p>
      <p class="text-black" v-if="correct">Correct!!!!!</p>
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
      this.$emit("emailClicked", false);
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
