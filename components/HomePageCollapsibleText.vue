<template>
  <div class="flex justify-center px-8 mt-8">
    <div class="flex justify-center flex-wrap">
      <div class="w-full">
        <h1 class="text-center font-serif font-normal text-xl">
          Country Clothing & Country Wear From Rydale
        </h1>
        <div class="flex justify-center items-center">
          <div class="w-20 my-4 border-b-2 border-black"></div>
        </div>
      </div>
      <div
        class="expand-div transition-max-height overflow-hidden"
        :class="expandClass"
      >
        <p class="static-text px-3 text-center">
          Explore our great range of British country clothing, footwear and
          country gifts along with rural style shirts and accessories. All
          inspired and designed in the heart of Yorkshire. Any countryside
          outing requires the right type of attire and outfit. At Rydale, our
          brand provides an array of great outdoor clothing, footwear, and
          accessories. All inspired and designed right in the heart of
          Yorkshire, here in the UK. We provide a range of fantastic indoor and
          country outdoor clothing options - from
          <a
            href="https://www.rydale.com/collections/mens-tweed-blazers"
            style="color: #3888e4"
            >quality country tweed jackets</a
          >, casual rural style wear, a wide collection of
          <a
            href="https://www.rydale.com/collections/mens-hats-caps"
            style="color: #3888e4"
            >flat caps</a
          >, British eventing equestrian outfits, traditional English clay and
          pheasant
          <a
            href="https://www.rydale.com/collections/mens-shooting-clothing"
            style="color: #3888e4"
            >shooting clothing</a
          >, fashion jodhpurs, farmers clothing,
          <a
            href="https://www.rydale.com/collections/ladies-country-boots-footwear"
            style="color: #3888e4"
            >country boots, </a
          >and much more. Go ahead and explore our apparel collections of men’s,
          women’s and children wear for inspired country clothing UK fashion in
          a range of different sizes including plus size. Let us know if you
          have any questions with regards to any of the clothing pieces and
          country fashion wears we will be more than happy to help. We offer a
          huge range of country clothing for men - whether you are looking for
          tweed jackets or waistcoats, smart checked shirts, leather boots or
          classic polo shirts, we have it all. Explore our extensive selection
          of menswear and find something that is perfect for a country gent. Our
          collection of ladies clothing offers everything from wax jackets and
          coats, patterned blouses and casual dresses to long and short leather
          boots, bags in all different styles and traditional knits. Make sure
          you check out our selection of womenswear for a completely stylish and
          functional country outfit. Not forgetting the kids, explore our wide
          range of children’s clothing and make your little one’s smile with a
          new pair of wellies, a cosy fleece or a raincoat for adventuring in
          the Great British outdoors. Here at Rydale, we have something for all
          the family, no matter what they enjoy doing. We even cater for all the
          popular outdoor country pursuits, with outdoor clothing specifically
          designed for shooting, farming, horse riding, walking and fishing. So,
          make sure you’re well equipped for whatever your next day out in the
          country brings and get kitted out with our Rydale branded clothing and
          accessories. Rydale is an excellent place to recreate that traditional
          British style. Our excellent customer service further compliments our
          high-quality clothing ranges. Our customer services team is able to
          advise on all aspects of the brand, whether that be fit, sizing or
          materials.&nbsp;
        </p>
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

<script setup>
const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const expandClass = computed(() =>
  isExpanded.value ? "h-full" : "max-h-[116px]"
);
</script>

<style scoped>
.transition-max-height {
  transition: max-height 0.5s ease-out;
}
</style>
