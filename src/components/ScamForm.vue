<template>
  <div
    class="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70"
    v-if="showForm"
  >
    <div class="bg-white rounded-3xl w-3/4">
      <div class="flex flex-col items-start p-8">
        <div class="flex items-center w-full">
          <div class="text-gray-900 font-medium text-lg">Create a New Post</div>
          <svg
            @click="toggleComponent"
            class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
        </div>
        <hr class="w-full my-2" />
        <div class="w-full max-h-96 overflow-auto scroll-m-0">
          <div class="w-full">
            <div class="flex flex-row gap-2 h-10">
              <div class="flex w-4/5">
                <input
                  class="font-bold w-full bg-gray-100 p-2 rounded"
                  type="text"
                  placeholder="Post Title"
                  v-model="title"
                />
              </div>
              <!-- Click to Upload -->
              <div class="flex items-center justify-center w-1/5">
                <label
                  for="dropzone-file"
                  class="flex flex-col p-2 items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-200 dark:bg-gray-50 hover:bg-gray-100 dark:border-gray-200 dark:hover:border-gray-100 dark:hover:bg-gray-100"
                >
                  <div class="flex flex-row items-center justify-center">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="ml-3 text-sm">Upload Image</p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    @change="previewImages"
                    multiple
                  />
                  <!-- Show the uploaded images -->
                </label>
              </div>
            </div>

            <textarea
              class="w-[98%] text-sm h-32 bg-gray-100 p-2 rounded mt-2 overflow-x-hidden"
              placeholder="Tell us your isit scam story"
              v-model="content"
            ></textarea>
          </div>

          <div class="w-full my-2" v-if="images.length > 0" :perPage="1">
            <fwb-carousel
              :pictures="formattedImages"
              :slide="true"
              :animation="false"
            >
              <template #default="{ picture }">
                <div class="relative">
                  <img
                    :src="picture.src"
                    :alt="picture.alt"
                    class="object-cover w-full h-full rounded-lg"
                  />
                  <!-- TODO: Delete button not working/showing -->
                  <button
                    class="absolute top-0 right-0 bg-black rounded-full p-1 z-100"
                    @click.stop="removeImage(picture.src)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-6 h-6 text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </template>
            </fwb-carousel>
          </div>
        </div>
        <div class="mx-auto">
          <button
            @click="toggleComponent"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showForm", "toggleComponent"],
  data() {
    return {
      title: "",
      content: "",
      images: [],
    };
  },
  methods: {
    previewImages(event) {
      const files = Array.from(event.target.files);
      const promises = files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (e) => reject(e);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(promises)
        .then((images) => {
          this.images = images;
        })
        .catch((error) => {
          console.error("Error reading files: ", error);
        });
    },
    removeImage(src) {
      this.images = this.images.filter((image) => image !== src);
    },
  },
  computed: {
    formattedImages() {
      return this.images.map((src, index) => ({
        src,
        alt: `Uploaded image ${index + 1}`,
      }));
    },
  },
};
</script>

<script setup>
import { FwbCarousel } from "flowbite-vue";
</script>
