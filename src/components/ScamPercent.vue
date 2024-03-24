<template>
  <div class="m-2">
    <div class="flex flex-row justify-between py-2">
      <p class="flex text-gray-900 resize-none">{{ scamType }}</p>
      <div class="tooltip">
        More info
        <span class="tooltiptext">{{ tooltipText }}</span>
      </div>
    </div>
    <div class="w-80 bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        :style="{ width: percentage + '%' }"
        class="bg-blue-600 text-sm font-medium text-blue-100 text-center p-0.25 leading-none rounded-full"
      >
        {{ percentage }}%
      </div>
    </div>
  </div>
</template>

<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  color: #949494;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 360px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
<script>
export default {
  props: {
    scamType: String,
    percentage: Number,
    tooltipText:String,
  },
};
</script>
