<template>
  <div class="flex justify-center px-8 mt-8">
    <div class="flex justify-center flex-wrap">
      <div class="w-full">
        <h1 class="text-center font-serif font-normal text-xl">
          {{ $t("Country Clothing & Country Wear From Rydale") }}
        </h1>
        <div class="flex justify-center items-center">
          <div class="w-20 my-4 border-b-2 border-black"></div>
        </div>
      </div>
      <div
        class="expand-div transition-max-height overflow-hidden"
        :class="expandClass"
      >
        <p class="static-text px-3 text-center" v-html="$t('exploreText')"></p>
      </div>

      <div class="relative h-1 w-full">
        <div
          class="absolute bottom-0 left-0 text-xl flex justify-center w-full bg-gradient-to-t from-white to-transparent"
        >
          <button
            v-if="!isExpanded"
            @click="toggleExpand"
            class="w-full p-2"
            style="box-sizing: border-box"
          >
            <font-awesome-icon icon="chevron-down" size="lg" color="#424242" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
  computed: {
    expandClass: function () {
      return this.isExpanded ? "h-full" : "max-h-[116px]";
    },
  },
};
</script>

<style scoped>
/* Add a transition for smooth height change */
.transition-max-height {
  transition: max-height 0.5s ease-out;
}
</style>
