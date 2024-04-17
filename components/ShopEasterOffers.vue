<template>
  <div class="relative">
    <h2 class="card-title">Shop Easter Offers</h2>
    <div class="relative mx-auto grid-container max-w-[1500px] mt-10 mb-2">
      <div v-for="item in items" :key="item.price" class="flex-auto">
        <div v-if="item.bgImage" class="overflow-hidden relative">
          <a href="" class="w-full h-full">
            <div
              class="object-cover transition ease-in-out delay-200 hover:transition-all hover:scale-110"
            >
              <NuxtImg
                v-if="item.bgImage"
                format="jpg"
                loading="lazy"
                width="369"
                height="492"
                :src="item.bgImage"
                :alt="item.buttonText"
                :placeholder="[369, 492]"
              />
            </div>

            <button
              class="bg-white absolute bottom-[20px] w-[90%] text-[18px] p-3 left-[50%] text-center -translate-x-[50%] rounded-2xl font-extrabold transition ease-in-out delay-200 hover:transition-all hover:scale-105 max-laptop:text-[12px]"
            >
              {{ item.buttonText }}
            </button>
          </a>

          <div class="price">{{ item.price }}</div>
        </div>
        <div
          v-else
          class="relative h-full w-full"
          :style="`background-color:${item.bgColor}`"
        >
          <a
            href=""
            class="w-full h-full pt-[20%] pr-[5%] pl-[5%] absolute text-center"
          >
            <div
              class="text-[24px] text-[#20414b] tracking-[2px] font-[600] mb-[20px] max-laptop:text-[4vw] max-laptop:mb-[2vw]"
            >
              {{ item.subtitle }}
            </div>
            <div
              class="tracking-[2px] text-[#20414b] font-[900] text-[64px] mb-[40px] max-laptop:text-[9vw] max-laptop:mb-[3vw]"
            >
              {{ item.offText }}
            </div>
            <div
              class="text-[24px] text-[#20414b] tracking-[2px] font-[700] mb-[40px] max-laptop:text-[4vw] max-laptop:mb-[3vw]"
              v-html="item.title"
            ></div>

            <button
              class="bg-white absolute bottom-[20px] w-[90%] text-[18px] p-3 left-[50%] text-center -translate-x-[50%] rounded-2xl font-extrabold transition ease-in-out delay-200 hover:transition-all hover:scale-105 max-laptop:text-[12px]"
            >
              {{ item.buttonText }}
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    price: "£65",
    buttonText: "SHOP SHOOTING JACKETS",
    bgImage: "card_image_1.jpg",
    bgImageUrl: null,
  },
  {
    price: "£65",
    buttonText: "SHOP THE OFFER",
    bgColor: "#f5b129",
    subtitle: "HOP TO IT...",
    offText: "60% OFF",
    title: "SELECTED <br/> POLO DRESSES",
  },
  {
    price: "£29.99",
    buttonText: "SHOP QUILTED JACKETS",
    bgImage: "card_image_3.jpg",
    bgImageUrl: null,
  },
  {
    price: "£14.99",
    buttonText: "SHOP CANVAS TRAINERS",
    bgImage: "card_image_4.jpg",
    bgImageUrl: null,
  },
  {
    buttonText: "SHOP THE OFFER",
    bgColor: "#f587a1",
    subtitle: "EGG-STRA SPECIAL",
    offText: "£5 OFF",
    title: "SELECTED LADIES <br/> RUGBY SHIRTS",
  },
  {
    price: "£25",
    buttonText: "SHOP PHEASANT GILET",
    bgImage: "card_image_6.jpg",
    bgImageUrl: null,
  },
  {
    buttonText: "SHOP GIFT CARDS",
    bgImage: "card_image_7.jpg",
    bgImageUrl: null,
  },
  {
    price: "£7.49",
    buttonText: "SHOP BABY CLOTHING",
    bgImage: "card_image_8.jpg",
    bgImageUrl: null,
  },
  {
    price: "£35",
    buttonText: "SHOP MEN’S DECK SHOES",
    bgImage: "card_image_9.jpg",
    bgImageUrl: null,
  },
  {
    price: "£9.99",
    buttonText: "CHECKED SHIRTS",
    bgImage: "card_image_10.jpg",
    bgImageUrl: null,
  },
  {
    price: "£19.99",
    buttonText: "SHOP POLO SHIRTS",
    bgImage: "card_image_11.jpg",
    bgImageUrl: null,
  },
  {
    buttonText: "SHOP THE OFFER",
    bgColor: "#f5b129",
    subtitle: "HAPPY EASTER",
    offText: "£9 OFF",
    buttonText: "SHOP THE OFFER",
    title: "COUNTRY <br/> BEDDING",
  },
]);
</script>

<style scoped>
.card-title {
  @apply text-[21px] text-center pb-5 mt-[30px] relative;
  font-family: "Droid";
}

.card-title::after {
  @apply absolute bg-black w-[100px] h-[2px] bottom-[5px]  left-[50%] -translate-x-[50%]  content-[''];
}

.price {
  @apply absolute  top-[15px] text-[#ff0000] font-bold right-[15px];
}

.subtitle {
  @apply text-[24px] text-[#20414b];
}

.grid-container {
  @apply grid grid-cols-4 gap-2 max-laptop:grid-cols-2;
}
</style>
