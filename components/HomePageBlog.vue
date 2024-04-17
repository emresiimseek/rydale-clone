<template>
  <div class="flex justify-center mt-4">
    <div class="flex flex-wrap w-full max-w-4xl">
      <div class="flex flex-wrap flex-[1]">
        <div class="w-full flex flex-col justify-center items-center mt-8">
          <h2>
            <span class="text-center font-medium text-3xl font-serif">
              {{ $t("Rydale Life") }}
            </span>
          </h2>
          <div class="w-10 border border-gray-300 my-2"></div>
          <p class="text-center italic font-light mb-2 text-lg">
            {{ $t("Great reads from our blog") }}
          </p>
          <NuxtLink to="/" class="underline">
            {{ $t("See All") }}
          </NuxtLink>
        </div>
      </div>

      <div
        class="w-full flex flex-wrap mt-8 p-5 desktop:flex-[3] laptop:flex-[3]"
      >
        <div class="w-1/3 max-laptop:w-1/2 mt-8 p-5">
          <NuxtLink to="/">
            <div
              class="transition-shadow relative block shadow-md hover:shadow-xl border border-gray-200 h-full"
            >
              <NuxtImg
                format="jpg"
                loading="lazy"
                src="/news_1.jpg"
                class="w-full"
                placeholder
              />
              <p class="p-2 text-sm">
                <span>
                  {{ $t("5 Brunch Outfit Ideas") }}
                </span>
                <span>&gt;</span>
              </p>
            </div>
          </NuxtLink>
        </div>

        <!-- second -->
        <div class="w-1/3 mt-8 p-5 max-laptop:w-1/2 max-laptop:hidden">
          <NuxtLink to="/">
            <div
              class="transition-shadow relative block shadow-md hover:shadow-xl border border-gray-200 h-full"
            >
              <NuxtImg
                format="jpg"
                loading="lazy"
                src="/news_2.jpg"
                class="w-full h-auto"
                placeholder
              />
              <p class="p-2 text-sm">
                <span>
                  {{ $t("Dog Friendly Beaches in Norfolk ") }}
                </span>
                <span>&gt;</span>
              </p>
            </div>
          </NuxtLink>
        </div>

        <!-- last -->
        <div class="w-1/3 mt-8 p-5 max-laptop:w-1/2">
          <NuxtLink to="/">
            <div
              class="transition-shadow relative block shadow-md hover:shadow-xl border border-gray-200 h-full"
            >
              <font-awesome-icon
                class="absolute top-0 right-0 text-white text-lg py-1 px-2"
                icon="fa-brands fa-instagram"
              />

              <NuxtImg
                format="gif"
                loading="lazy"
                src="/insta.gif"
                class="w-full h-auto"
                placeholder
              />
              <p class="p-2 text-sm">
                <span>
                  {{ $t("Don't forget to follow us on instagram") }}
                </span>
                <span>&gt;</span>
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
