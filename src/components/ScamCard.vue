<template>
  <div>
    <a
      href="#"
      class="text-left block max-w-md min-w-40 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <span
        v-for="(chip, index) in chips"
        :key="index"
        :class="`text-xs font-medium me-2 px-2.5 py-0.5 mb-4 rounded-full dark:text-blue-300 ${chip.bgColor} ${chip.textColor}`"
        @click="handleChipClick(chip)"
      >
        {{ chip.text }}
      </span>

      <h5
        class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ title }}
      </h5>
      <p class="font-normal text-sm text-gray-700 dark:text-gray-400">
        {{ description }}
      </p>
      <div class="w-full py-2">
        <img
          v-if="image"
          :src="image"
          alt="Card image"
          class="w-full h-full object-cover mb-4 rounded"
        />
      </div>
      <div class="mt-4 flex justify-between items-center">
        <div class="flex items-center">
          <!-- Upvote Button -->
          <button
            @click="upvote"
            type="button"
            class="border-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <svg
              class="w-4 h-4 hover:text-blue-500 text-blue-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
          <span>{{ count }}</span>
          <!-- Downvote Button -->
          <button
            @click="downvote"
            type="button"
            class="border-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <svg
              class="w-5 h-5 hover:text-blue-500 text-blue-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
        </div>
        <div class="flex items-center">
          <!-- Comment Button -->
          <button
            type="button"
            class="border-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <!-- Share Button -->
          <button
            type="button"
            class="border-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <svg
              class="w-6 h-6 text-gray-800 hover:text-gray-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.027 10.9a8.729 8.729 0 0 1 6.422-3.62v-1.2A2.061 2.061 0 0 1 12.61 4.2a1.986 1.986 0 0 1 2.104.23l5.491 4.308a2.11 2.11 0 0 1 .588 2.566 2.109 2.109 0 0 1-.588.734l-5.489 4.308a1.983 1.983 0 0 1-2.104.228 2.065 2.065 0 0 1-1.16-1.876v-.942c-5.33 1.284-6.212 5.251-6.25 5.441a1 1 0 0 1-.923.806h-.06a1.003 1.003 0 0 1-.955-.7A10.221 10.221 0 0 1 5.027 10.9Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    chips: {
      type: Array,
      default: () => [],
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    upvote() {
      this.$emit("update:count", this.count + 1);
    },
    downvote() {
      if (this.count > 0) {
        this.$emit("update:count", this.count - 1);
      }
    },
    handleChipClick(chip) {
      if (chip.text === "WhatsApp") {
        console.log("Clicked on Whatsapp chip");
        this.$emit("whatsappClicked", true);
      }
      if (chip.text === "Email") {
        console.log("Clicked on Email chip");
        this.$emit("emailClicked", true);
      }
    },
  },
};
</script>

<style></style>
