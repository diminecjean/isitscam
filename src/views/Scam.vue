<template>
  <Transition>
    <div
      class="scam-bg absolute top-0 w-full h-full flex flex-col self-center"
      v-if="!hideScam"
    >
      <div class="self-center w-full">
        <p class="text-3xl p-8 font-semibold">Downloading Viruses...</p>
        <div class="counter">{{ counterValue }}%</div>
        <div class="progressbar">
          <span class="progress" :style="{ width: progressBarWidth }"></span>
        </div>
      </div>
      <div class="terminal p-4 my-8 mx-32 text-left">
        <div ref="terminalContent" class="terminal-content">
          <div
            v-for="(line, index) in terminalLines"
            :key="index"
            class="terminal-line"
          >
            {{ line }}
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <div class="">
    <div class="flex flex-row">
      <div>
        <img src="../assets/OBJECTS.png" class="w-96 h-96" />
      </div>
      <div>
        <p class="text-black text-[36px] font-bold">
          This could have been a <span class="text-red-500">scam...</span>
        </p>
        <p class="text-black text-3xl font-bold">
          but luckily for you, we chose not to!
        </p>
        <p class="text-black text-lg pt-12">
          Scammers are getting more and more creative
        </p>
        <p class="text-black text-lg pb-4">You should be as well!</p>
        <a href="/">
          <button
            type="button"
            class="w-48 my-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Click here to know more
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counterValue: 0,
      progressBarWidth: "0%",
      counterInterval: null,
      terminalLines: [],
      hideScam: false,
    };
  },
  mounted() {
    this.counterInit(0, 100);
    this.startScrolling();
  },
  destroyed() {
    clearInterval(this.counterInterval);
  },
  methods: {
    counterInit(fValue, lValue) {
      this.counterInterval = setInterval(() => {
        this.counterValue++;
        this.progressBarWidth = `${this.counterValue}%`;
        if (this.counterValue >= lValue) {
          clearInterval(this.counterInterval);
        }
      }, 50);
    },
    startScrolling() {
      setInterval(() => {
        if (this.counterValue < 100) {
          const randomLine = this.generateRandomLine();
          this.terminalLines.push(randomLine);
          this.$refs.terminalContent.scrollTop =
            this.$refs.terminalContent.scrollHeight;
        } else {
          this.hideScam = true;
        }
      }, 10);
    },
    generateRandomLine() {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.\\";
      const length = Math.floor(Math.random() * 80) + 20;
      let randomLine = "";
      for (let i = 0; i < length; i++) {
        randomLine += characters.charAt(
          Math.floor(Math.random() * characters.length),
        );
      }
      return "Installing C:\\Users\\Downloads\\" + randomLine + ".exe";
    },
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.scam-bg {
  background: #333;
  justify-content: center;
}

.terminal {
  height: 300px;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #000;
  color: #fff;
  font-family: monospace;
  font-size: 14px;
}

.terminal-content {
  padding: 10px;
  overflow-y: auto;
  height: 100%;
}

.terminal-line {
  white-space: nowrap;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.progressbar {
  position: relative;
  max-width: 500px;
  width: 500px;
  margin: 30px auto 0;
  height: 30px;
  background: #274545;
  overflow: hidden;
}

span.progress {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: #326666;
  transition: all 0.3s;
}
</style>
