<template>
  <navbar />
  <div>
    <div class="flex flex-row gap-6 mt-6">
      <div class="rounded-2xl bg-gray-200 bg-opacity-50 py-6 px-auto">
        <div class="flex flex-col chat-container">
          <div class="flex">
            <div class="px-4 w-full">
              <div class="talk-bubble title tri-right round btm-left">
                <h1 class="title">isit<span class="bold-title">scam</span></h1>
              </div>
              <div class="talk-bubble left tri-right round btm-left">
                <div class="talktext">
                  <p>
                    Your IRS tax refund is pending acceptance. Must accept
                    within 24 hours:
                    <a>http://suslink.com</a>
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-end">
                <div class="talk-bubble right tri-right round btm-right">
                  <div class="talktex ">
                    <p class="relative z-10">This is sus... 🤔</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end">
                <div class="talk-bubble right tri-right round btm-right">
                  <div class="talktext">
                    <p>🔍 Help me find out if this is a scam</p>
                  </div>
                </div>
              </div>
              <a href="/home" class="text-left">
                <button type="button"
                  class="group ml-2 mr-7 px-3 py-2.5 w-11/12 text-left text-gray-600 hover:text-white border-1 border-gray-800 hover:bg-[#102E4A] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                  <div class="flex flex-row justify-between text-middle">
                    <div class="flex items-center pl-1">
                      <span class="typed-text">{{ typeValue }}</span>
                      <span class="blinking-cursor">|</span>
                      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
                    </div>
                    <div>
                      <svg class="w-6 h-6 pb-1 text-gray-800 group-hover:text-white dark:text-white rotate-45"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5" />
                      </svg>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-96">
        <div class="flex flex-row w-96">
          <div v-if="showUpload" class="flex items-center justify-center w-full">
            <label for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-200 dark:bg-gray-50 hover:bg-gray-100 dark:border-gray-200 dark:hover:border-gray-100 dark:hover:bg-gray-100">
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
          <div class="w-full relative">
            <div id="imageUpload" contenteditable="true" v-if="showPaste" @paste="handlePaste"></div>
            <div v-if="showPaste && !showPasteText" class="absolute top-1/2 w-full">
              <p disabled="disabled">
                or <strong>copy</strong> an image and <br /><strong>Crtl+V!</strong>
              </p>
            </div>
          </div>
        </div>
        <p class="p-3">or</p>
        <textarea id="message" rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Paste your text here..."></textarea>
        <a href="/home">
          <div class=" ">
            <button type="button" @click="toggleSubmit"
              class="w-full my-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Submit
            </button>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: "Nunito Sans", sans-serif;
  font-size: 84px;
  color: #102E4A;
  font-weight: 400;
}

.bold-title {
  color: #9A0000;
  font-weight: 700;
}

p {
  font-size: small;
  color: black;
}

fwb-file-input {
  min-height: 300px;
  min-width: 300px;
}

/* talk bubble contents */
.talktext {
  padding: 0.5em;
  text-align: left;
  line-height: 1.5em;
}

.talktext p {
  /* remove webkit p margins */
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
}

.chat-container {
  /* margin: 10px; */
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.talk-bubble {
  margin: 8px;
  display: inline-block;
  position: relative;
  max-width: 340px;
  padding: 2px 8px;
}

.talk-bubble.title {
  box-shadow: rgb(32, 156, 218) 0px 2px 10px;
  margin-bottom: 30px;
  padding: 20px;
  max-width: max-content;
  background-color: rgb(255, 255, 255);
}

.talk-bubble.left {
  background-color: rgb(255, 255, 255);
}

.talk-bubble.right {
  background-color: #5cd6ff;
}

.round {
  border-radius: 8px;
}

.tri-right.btm-left:after,
.tri-right.btm-right:after {
  content: " ";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  border: 22px solid transparent;
  transform: rotate(270deg);
}

.tri-right.btm-left:after {
  left: -10px;
  border-left-color: rgb(255 255 255);
}

.tri-right.btm-right:after {
  right: -10px;
  border-left-color: #5cd6ff;
}

#imageUpload {
  border-style: dashed;
  border-width: 2px;
  border-radius: 0.5rem;
  background-color: #fff;
  width: 100%;
  height: 240px;
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
  p {
    font-size: 1rem;
    font-weight: normal;
  
    span.typed-text {
      color: #530000;
      font-weight: bold;
    }
  }
  
  .blinking-cursor {
    font-size: 1rem;
    color: #002b56;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }
  
  @keyframes blink {
  
    from,
    to {
      color: transparent;
    }
  
    50% {
      color: #002b56;
    }
  }
  
  @-moz-keyframes blink {
  
    from,
    to {
      color: transparent;
    }
  
    50% {
      color: #002b56;
    }
  }
  
  @-webkit-keyframes blink {
  
    from,
    to {
      color: transparent;
    }
  
    50% {
      color: #002b56;
    }
  }
  
  @-ms-keyframes blink {
  
    from,
    to {
      color: transparent;
    }
  
    50% {
      color: #002b56;
    }
  }
  
  @-o-keyframes blink {
  
    from,
    to {
      color: transparent;
    }
  
    50% {
      color: #002b56;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "Hey isitscam, is it a SCAM?? !? !? ",
        "This definitely looks like scam...",
        "or is it? 🤔",
      ],
      typingSpeed: 100,
      erasingSpeed: 40,
      newTextDelay: 2800,
      displayTextArrayIndex: 0,
      charIndex: 0,
      fileName: null,
      imageData: null,
      showSubmit: false,
      showPaste: true,
      showUpload: true,
      showPasteText: false,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    toggleSubmit() {
      console.log(this.showSubmit);
      this.showSubmit = !this.showSubmit;
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
      reader.readAsDataURL(cbPayload[0].getAsFile());
      this.showUpload = !this.showUpload;
      this.showPasteText = !this.showPasteText;
    },
  },
};
</script>
