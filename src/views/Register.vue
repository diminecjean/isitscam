<template>
  <navbar />
  <div class="rounded-2xl w-[1068px] shadow-xl flex flex-row">
    <div
      class="w-[700px] bg-white shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700 rounded-l-2xl"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Create an account
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <label
              for="confirm-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Confirm password</label
            >
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div class="ml-3 text-sm">
              <label
                for="terms"
                class="font-light text-gray-500 dark:text-gray-300"
                >I accept the
                <a
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                  >Terms and Conditions</a
                ></label
              >
            </div>
          </div>
          <a class="py-2.5" href="/home"
            ><button
              type="submit"
              class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button></a
          >
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?
            <a
              href="/login"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >Login here</a
            >
          </p>
        </form>
      </div>
    </div>
    <div
      class="w-full bg-white text-left shadow dark:border md:mt-0 dark:bg-gray-100 dark:border-gray-100 rounded-r-2xl"
    >
      <div class="flex flex-col bg-[#EBF9FE]  h-full align-middle justify-center">
          <h1 class=" title mx-8 mb-4 font-bold text-black">
      isit<span class="font-bold text-[#FF5D5D]">scam</span>
    </h1>
        <p class="font-bold mx-8 my-4 text-4xl text-black">
          How you can use us to prevent falling victim to scammers
        </p>
        <p class="font-bold mx-8 mt-4 text-2xl text-black">
          Check if its a scam so you will<br />
          never be scammed again
        </p>
        <p class="mx-8 mt-1 text-lg text-gray-500">
          Our AI lets you see if an image or a text is <br>likely to be a scam or not
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
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