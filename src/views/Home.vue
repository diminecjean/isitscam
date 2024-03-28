<template>
  <navbar />
  <!-- Form dialog -->
  <div class="flex h-full w-full absolute top-0 left-0 justify-center items-center z-20" v-if="showForm">
    <ScamForm class="absolute z-20" />
    <div class="relative w-4/5 h-4/5">
      <div class="absolute z-50 bottom-4 right-4">
        <button type="button" @click="toggleComponent"
          class="m-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Submit
        </button>
      </div>
    </div>
  </div>
  <div class="submit-data" v-if="showSubmit">
    <div class="flex flex-row">
      <div class="flex sm:flex-row flex-col items-center justify-center">
        <!-- Click to Upload -->
        <div class="flex flex-col h-96 min-w-80">
          <div v-if="showUpload" class="flex items-center justify-center h-full w-full">
            <label for="dropzone-file"
              class="flex flex-col items-center justify-center w-80 h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-200 dark:bg-gray-50 hover:bg-gray-100 dark:border-gray-200 dark:hover:border-gray-100 dark:hover:bg-gray-100">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg v-if="!fileName" class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <img v-if="imageData" :src="imageData" alt="Uploaded image" class="w-32 h-32 mb-2" />
                <p v-if="!fileName" class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p v-if="fileName" class="text-xs text-gray-500 dark:text-gray-400">
                  {{ fileName }}
                </p>
                <p v-if="!fileName" class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" @change="handleFileUpload" />
            </label>
          </div>
          <div class="w-full relative h-full  " v-if="showPaste">
            <div id="imageUpload" contenteditable="true" v-if="showPaste" @paste="handlePaste"></div>
            <div v-if="showPaste && !showPasteText" class="absolute top-6 sm:top-20 w-full text-black">
              <p disabled="disabled">
                or <strong>copy</strong> an image and <br /><strong>Ctrl+V!</strong>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-gray-500 text-2xl m-4">or</p>
        </div>
        <!-- Write thoughts here -->
        <div class="flex items-center justify-center w-full h-full">
          <textarea id="message" rows="4"
            class="resize-none block p-2.5 w-80 h-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste your text here..."></textarea>
        </div>
      </div>
    </div>

    <div @click="toggleSubmit">
      <button type="button"
        class="m-4 w-4/6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Submit
      </button>
    </div>
  </div>
  <div class="h-full analysis text-left" v-if="!showSubmit">
    <p class="text-gray-900  text-xl px-2">Result</p>
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <p class="text-orange-600 px-2 font-semibold text-2xl py-4">Likely to be a scam!</p>
    <p class="text-gray-900 text-xl px-2">Analytics</p>
    <div class="flex flex-row">
      <div class="w-1/2">
        <ScamPercent :scamType="content1" :percentage="generatePercentage()" :tooltipText="tooltip1"></ScamPercent>
        <ScamPercent :scamType="content2" :percentage="generatePercentage()" :tooltipText="tooltip2"></ScamPercent>
        <ScamPercent :scamType="content3" :percentage="generatePercentage()" :tooltipText="tooltip3"></ScamPercent>
        <ScamPercent :scamType="content4" :percentage="generatePercentage()" :tooltipText="tooltip4"></ScamPercent>
      </div>
      <div class="w-1/2">
        <ScamPercent :scamType="content5" :percentage="generatePercentage()" :tooltipText="tooltip5"></ScamPercent>
        <ScamPercent :scamType="content6" :percentage="generatePercentage()" :tooltipText="tooltip6"></ScamPercent>
        <ScamPercent :scamType="content7" :percentage="generatePercentage()" :tooltipText="tooltip7"></ScamPercent>
        <ScamPercent :scamType="content8" :percentage="generatePercentage()" :tooltipText="tooltip8"></ScamPercent>
      </div>
    </div>

    <div class="text-center" @click="toggleSubmit">
      <button type="button"
        class="m-4 w-4/6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Go Back
      </button>
    </div>
  </div>

  <div class="hidden sm:block">
    <img class="open-here arrow h-16 absolute right-10" src="../assets/arrow.png" />
    <div class="open-here arrow-text right-28 text-gray-900">
      <p class="">Open here for</p>
      <p>more stuff!</p>
    </div>
  </div>
  <div class="drawer right" ref="drawer">
    <router-link to="/isitscam/report" class="border-none absolute top-0 left-0 rounded">
      <svg class="w-6 h-6 py-5 pl-12 pr-6 text-gray-800 bg-[#e3f6ff] dark:text-white" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5" />
      </svg>
    </router-link>
    <h1 class=" mt-6 text-lg font-semibold">Discover Scams</h1>
    <div class="grid grid-col gap-4 mt-4 ml-14 mr-9">
      <div class="grid gap-4">
        <scam-card v-for="(item, index) in scamData" :key="index" :count="item.count" :title="item.title"
          :description="item.description" :image="item.image" :chips="item.chips" @update:count="count = $event"
          @whatsappClicked="handleWhatsappClick" @emailClicked="handleEmailClick" />
      </div>
    </div>
    <div class="wrap">
      <div class="drag" ref="drag">
        <svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" transform="rotate(90)" stroke="#ffffff"
          stroke-width="0.034">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M17 6v1h-17v-1h17zM0 10h17v-1h-17v1z" fill="#ffffff"></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <div class="flex h-full w-full top-0 left-0 absolute justify-center align-middle z-100" v-if="whatsappClicked">
    <div
      class="fixed shadow-lg  flex flex-row h-[90%] py-2 px-6 w-3/5 justify-center align-middle items-center translate-y-[6%] flex-wrap z-100 rounded-3xl"
      style="background-color: #eae6df" v-if="whatsappClicked">
      <whatsapp-game @whatsappClicked="handleWhatsappClick" />
    </div>
  </div>
  <div class="flex h-full w-full top-0 left-0 absolute justify-center align-middle" v-if="emailClicked">
    <div
      class="fixed shadow-lg  flex flex-col py-2 px-6 h-4/5 justify-center align-middle items-center translate-y-[14%] flex-wrap z-20 rounded-xl"
      style="background-color: #eae6df" v-if="emailClicked">
      <email-game @emailClicked="handleEmailClick" />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.drawer {
  position: fixed;
  z-index: 10;
  min-width: 36px;
  width: 36px;
  height: 100%;
  background: #e3f6ff;
  resize: horizontal;
  overflow: auto;
  box-shadow: 0px 0px 50px grey;
}
.wrap {
  position: fixed;
  height: 100%;
  width: min-content;
  bottom: 0%;
}
.drawer.right {
  right: 0px;
  bottom: 0px;
  min-width: 35px;
  width: 36px;
  max-width: 560px;
  overflow-x: hidden;
}
.drag {
  position: sticky;
  border: 1px solid #242f39;
  left: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background: #242f39;
  cursor: ew-resize;
  display: flex;
  justify-content: center;
  align-items: center;
}
.drawer.left .drag {
  left: unset;
  right: 0;
}
.button-add {
  position: fixed;
  margin: 400px;
}
.arrow {
  position: absolute;
  top: calc(50% - 65px);
}
.arrow-text {
  position: absolute;
  top: calc(50% - 20px);
}

#imageUpload {
  border-style: dashed;
  border-width: 2px;
  border-radius: 0.5rem;
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  line-height: 5vh;
  outline: 0 none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:empty::before {
    content: "Click this ContentEditable div to give it focus, then paste (Ctrl+V/⌘+V).";
    font-size: 3vh;
    position: absolute;
    width: 90%;
    display: inline-block;
    color: #ccc;
    top: 50%;
    transform: translatey(-50%);
    left: 5%;
    z-index: -1;
  }

  /* Hide the default text onFocus */
  &:focus::before {
    color: transparent;
  }
  .open-here {
    user-select: none;
  }
}
</style>

<script>
import scamData from "../provider/ScamReportData.json";
import ScamForm from "../components/ScamForm.vue";
import WhatsAppGame from "../components/WhatsAppGame.vue";
import EmailGame from "../components/EmailGame.vue";
import ScamPercent from "../components/ScamPercent.vue";
export default {
  props: ["showSubmit"],
  data() {
    return {
      isDragging: false,
      startX: 0,
      fileName: null,
      imageData: null,
      startWidth: 0,
      showForm: false,
      showSubmit: true,
      showPasteText: false,
      showPaste: true,
      showUpload: true,
      whatsappClicked: false,
      emailClicked: false,

      content1: "Too Good to Be True:",
      content2: "Urgency and Pressure:",
      content3: "Requesting Personal Info:",
      content4: "Unsolicited Communication:",
      content5: "Unusual Payment Methods:",
      content6: "Poor Grammar and Spelling:",
      content7: "Unverified Sources:",
      content8: "Suspicious Account:",
      tooltip1: "Detecting exaggerated claims or unrealistic promises in text or speech data.",
      tooltip2: "Identifying language cues indicating urgency or pressure to act quickly.",
      tooltip3:"Recognizing requests for sensitive personal information.",
      tooltip4:"Detecting unsolicited communication and identifying its source.",
      tooltip5:"Identifying unconventional payment methods.",
      tooltip6:"Pattern recognition to flag payment methods such as wire transfers, cryptocurrency transactions, or requests for gift cards, which are commonly associated with scams.",
      tooltip7:"Language modeling and grammar analysis to detect spelling mistakes, grammatical errors, and awkward phrasing that are characteristic of scam communications.",
      tooltip8:"Suspicious social media accounts that might be disingenuine or fake.",
    };
  },
  components: {
    ScamForm,
    WhatsAppGame,
    ScamPercent,
    EmailGame, // Register your component
  },
  mounted() {
    document.addEventListener("mousedown", this.startDrag);
    document.addEventListener("mousemove", this.drag);
    document.addEventListener("mouseup", this.endDrag);
  },
  beforeDestroy() {
    document.removeEventListener("mousedown", this.startDrag);
    document.removeEventListener("mousemove", this.drag);
    document.removeEventListener("mouseup", this.endDrag);
  },
  methods: {
    startDrag(event) {
      if (
        event.target === this.$refs.drag ||
        event.target.parentNode === this.$refs.drag
      ) {
        this.isDragging = true;
        this.startX = event.clientX;
        this.startWidth = this.$refs.drawer.offsetWidth;
      }
    },
    drag(event) {
      if (this.isDragging) {
        const newWidth = this.startWidth - (event.clientX - this.startX);
        this.$refs.drawer.style.width = newWidth + "px";
      }
    },
    endDrag() {
      this.isDragging = false;
    },

    toggleComponent() {
      this.showForm = !this.showForm;
    },
    toggleSubmit() {
      console.log(this.showSubmit);
      this.showSubmit = !this.showSubmit;
    },
    handleWhatsappClick(value) {
      console.log(this.whatsappClicked);
      this.whatsappClicked = value;
      console.log(this.whatsappClicked);
    },
    handleEmailClick(value) {
      this.emailClicked = value;
      console.log(this.emailClicked);
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result;
        };
        reader.readAsDataURL(file);
        this.showPaste = !this.showPaste;
      } else {
        this.fileName = null;
        this.imageData = null;
      }
    },
    handlePaste(event) {
      let cbPayload = [
        ...(event.clipboardData || event.originalEvent.clipboardData).items,
      ];
      cbPayload = cbPayload.filter((item) => /image/.test(item.type));

      if (!cbPayload.length || cbPayload.length === 0) return false;

      let reader = new FileReader();
      reader.onload = (e) => {
        this.$refs.imageUpload.innerHTML = `<img src="${e.target.result}">`;
      };
      console.log(this.showPaste);
      console.log(this.showPasteText);
      reader.readAsDataURL(cbPayload[0].getAsFile());
      this.showUpload = !this.showUpload;
      this.showPasteText = !this.showPasteText;
    },
    generatePercentage() {
      // Generate random number between 0 and 100
      return Math.floor(Math.random() * 101);
    },
  },
};
</script>

<script setup>
import { ref } from "vue";

</script>
