<template>
  <div class="relative border-t border-solid border-gray-300 mt-8 py-8">
    <div class="max-w-[1280px] mx-auto flex max-laptop:flex-col flex-row">
      <div class="w-1/3 flex max-laptop:hidden">
        <div class="w-1/2 px-2">
          <ul>
            <li>
              <NuxtLink to="/"> About Rydale </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Careers at Rydale </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Find a Stockist </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Shows & Events </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Contact Rydale </NuxtLink>
            </li>
            <li>
              <NuxtLink to="tel:01377337160">Tel: 01377 337160</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="w-1/2 px-2 max-laptop:text-right text-left">
          <ul
            class="footer-menu text-15px min-w-140 ml-4 tracking-[.5px] leading-[1.75]"
          >
            <li>
              <NuxtLink to="/"> Help & FAQ </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Returns & Refunds </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Delivery Info </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Terms & Conditions </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Privacy Policy </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Choose Your Country or Region </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/"> Sitemap </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-1/3 max-laptop:w-1/2 mx-auto flex max-laptop:flex-row flex-col items-end gap-3"
      >
        <NuxtLink to="/" class="w-full">
          <NuxtPicture
            src="/header_logo.svg"
            format="svg"
            width="160px"
            class="mx-auto max-laptop:w-[114px] max-laptop:h-[46px] flex items-center justify-center"
            height="65px"
          />
        </NuxtLink>
        <div
          class="w-1/3 flex mx-auto text-xl max-laptop:w-auto max-laptop:h-12 items-center justify-center"
        >
          <div class="flex desktop:gap-10 max-desktop:gap-5">
            <NuxtLink class="text-center w-full" to="/">
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </NuxtLink>
            <NuxtLink to="/" class="text-center w-full">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </NuxtLink>
            <NuxtLink to="/" class="text-center w-full">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </NuxtLink>
            <NuxtLink to="/" class="text-center w-full">
              <font-awesome-icon icon="fa-brands fa-pinterest" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="w-1/3 max-laptop:w-full mb-4 px-3a max-laptop:text-center text-right order-1"
      >
        <h3>
          Subscribe for your chance to
          <NuxtLink class="underline font-semibold">
            win a £100 Gift Card!*
          </NuxtLink>
        </h3>
      </div>
    </div>
    <div
      class="max-w-[1280px] mx-auto flex max-laptop:flex-col flex-row mt-6 px-0"
    >
      <div class="flex items-center flex-grow">
        <div class="mt-4 text-xs tracking-wider max-laptop:mx-auto">
          Copyright Rydale Country Clothing | YTC Ltd 3768619
        </div>
        <div
          class="flex justify-center flex-row ml-auto gap-2 max-laptop:hidden"
        >
          <NuxtImg
            v-for="(method, index) in paymentMethods"
            :key="index"
            :src="method.src"
            :alt="method.alt"
            format="png"
            :width="method.width || ''"
            :height="method.height || ''"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const paymentMethods = ref([
  { src: "/paypal.png", alt: "maestro", width: "29", height: "8" },
  { src: "/amazonpay.png", alt: "amazonpay" },
  { src: "/master.png", alt: "master", width: "38", height: "24" },
  { src: "/visa.png", alt: "visa", width: "38", height: "24" },
  { src: "/maestro.png", alt: "maestro", width: "38", height: "24" },
  { src: "/klarna.png", alt: "klarna", width: "38", height: "24" },
]);
</script>
