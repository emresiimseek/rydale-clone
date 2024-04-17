<template>
  <div
    class="flex justify-center flex-col uppercase font-bold mt-12 mr-auto mb-12"
    s
  >
    <div class="mb-8 flex justify-center">
      <button
        id="slider-ladies-btn"
        @click="handleClick('ladies')"
        class="slider_button"
        :class="{ active: selectedTab === 'ladies' }"
      >
        {{ $t("Ladies") }}
      </button>
      <button
        id="slider-mens-btn"
        @click="handleClick('mens')"
        class="slider_button"
        :class="{ active: selectedTab === 'mens' }"
      >
        {{ $t("Men's") }}
      </button>
      <button
        id="slider-kids-btn"
        @click="handleClick('kids')"
        class="slider_button"
        :class="{ active: selectedTab === 'kids' }"
      >
        {{ $t("Kid's") }}
      </button>
    </div>

    <div
      class="flex overflow-hidden relative"
      style="justify-content: space-between"
    >
      <div class="mx-auto">
        <div class="text-center">
          <carousel v-bind="{ itemsToShow: 1.9 }" :breakpoints="breakpoints">
            <slide v-for="item in currentItems" :key="item.id">
              <NuxtLink :to="item.link">
                <div
                  class="object-cover transition ease-in-out delay-200 hover:transition-all hover:scale-110"
                >
                  <NuxtImg
                    :src="item.imageSrc"
                    :alt="item.imageAlt"
                    format="jpg"
                    width="250"
                    height="350"
                    loading="lazy"
                    :placeholder="[250, 350]"
                  />
                </div>
                <div class="mt-4">
                  <span class="text-center hover:underline pt-4">
                    {{ $t(item.label) }}
                  </span>
                </div>
              </NuxtLink>
            </slide>

            <template #addons>
              <navigation />
            </template>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const breakpoints = ref({
  480: {
    itemsToShow: 1.9,
    snapAlign: "center",
  },
  640: {
    itemsToShow: 2.8,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 4,
    snapAlign: "center",
  },
  1280: {
    itemsToShow: 5,
    snapAlign: "center",
  },
});

const ladiesItems = ref([
  {
    id: 1,
    link: "/",
    imageSrc: "/slider_1_1.jpg",
    imageAlt: "SHIRTS",
    label: "SHIRTS",
  },
  {
    id: 2,
    link: "/",
    imageSrc: "/slider_1_2.jpg",
    imageAlt: "Polos & T-Shirts",
    label: "Polos & T-Shirts",
  },
  {
    id: 3,
    link: "/",
    imageSrc: "/slider_1_3.jpg",
    imageAlt: "Knitwear & Jumpers",
    label: "Knitwear & Jumpers",
  },
  {
    id: 4,
    link: "/",
    imageSrc: "/slider_1_4.jpg",
    imageAlt: "Jackets & Coats",
    label: "Jackets & Coats",
  },
  {
    id: 5,
    link: "/",
    imageSrc: "/slider_1_5.jpg",
    imageAlt: "FOOTWEAR",
    label: "FOOTWEAR",
  },
]);

const mensItems = ref([
  {
    id: 1,
    link: "/",
    imageSrc: "/slider_2_1.jpg",
    imageAlt: "SHIRTS",
    label: "SHIRTS",
  },
  {
    id: 2,
    link: "/",
    imageSrc: "/slider_2_2.jpg",
    imageAlt: "Polos & T-Shirts",
    label: "Polos & T-Shirts",
  },
  {
    id: 3,
    link: "/",
    imageSrc: "/slider_2_3.jpg",
    imageAlt: "Knitwear & Jumpers",
    label: "Knitwear & Jumpers",
  },
  {
    id: 4,
    link: "/",
    imageSrc: "/slider_2_4.jpg",
    imageAlt: "Jackets & Coats",
    label: "Jackets & Coats",
  },
  {
    id: 5,
    link: "/",
    imageSrc: "/slider_2_5.jpg",
    imageAlt: "FOOTWEAR",
    label: "FOOTWEAR",
  },
]);

const kidsItems = ref([
  {
    id: 1,
    link: "/",
    imageSrc: "/slider_3_1.jpg",
    imageAlt: "SHIRTS & POLOS",
    label: "SHIRTS & POLOS",
  },
  {
    id: 2,
    link: "/",
    imageSrc: "/slider_3_2.jpg",
    imageAlt: "Knitwear & Jumpers",
    label: "Knitwear & Jumpers",
  },
  {
    id: 3,
    link: "/",
    imageSrc: "/slider_3_3.jpg",
    imageAlt: "Jackets & Coats",
    label: "Jackets & Coats",
  },
  {
    id: 4,
    link: "/",
    imageSrc: "/slider_3_4.jpg",
    imageAlt: "FOOTWEAR",
    label: "FOOTWEAR",
  },
  {
    id: 5,
    link: "/",
    imageSrc: "/slider_3_5.jpg",
    imageAlt: "Baby Clothing",
    label: "Baby Clothing",
  },
]);

const selectedTab = ref("ladies");

const currentItems = computed(() => {
  if (selectedTab.value === "ladies") return ladiesItems.value;
  else if (selectedTab.value === "mens") return mensItems.value;
  else return kidsItems.value;
});

const handleClick = (label) => {
  selectedTab.value = label;
};
</script>

<style>
.active {
  @apply border-b-black border-b-2 !text-black;
}

.slider_button {
  @apply px-[2rem] pb-[1rem] uppercase text-[#757575];
}

.carousel__slide {
  padding: 5px;
}

.carousel .carousel__viewport .carousel__track {
  @apply ml-7;
}

.carousel__prev {
  @apply m-0;
}

.carousel__next {
  @apply m-0 bg-white h-1/2;
}
</style>
