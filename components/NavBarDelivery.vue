<template>
  <div class="flex items-center mr-4 ml-4">
    <NuxtImg
      src="/car.webp"
      format="webp"
      width="40px"
      height="20px"
      class="w-10 h-auto"
    >
    </NuxtImg>

    <div class="ml-4 leading-none whitespace-no-wrap flex-grow">
      <div class="font-bold text-gray-600 uppercase">
        {{ $t("Free Delivery") }}
      </div>
      <div class="class=" text-sm italic>
        {{ $t("on orders over £60*") }}
      </div>
    </div>
  </div>
</template>
