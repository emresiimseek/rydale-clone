<template>
  <div class="banner">
    <div class="banner-content">
      <div class="title">
        {{ $t("EGG-CELLENT EASTER WITH UP TO") }}
      </div>
      <div class="middle-text">
        {{ $t("50% OFF") }}
      </div>
      <div class="subtitle">
        {{ $t("SELECTED LINES") }}
      </div>
    </div>
    <div class="buttons">
      <NuxtLink to="/" class="action-button"> {{ $t("LADIES") }} </NuxtLink
      ><NuxtLink to="/" class="action-button"> {{ $t("MEN’S") }} </NuxtLink
      ><NuxtLink to="/" class="action-button">
        {{ $t("KID’S") }}
      </NuxtLink>
    </div>
  </div>
</template>
s
<style scoped>
.banner {
  @apply relative flex flex-col justify-center items-center h-[33vw]  max-tablet:h-[120vw] w-full bg-[#20414b] bg-contain bg-no-repeat bg-bottom max-tablet:bg-[url('../assets/images/banner-mobile.png')] bg-[url('../assets/images/banner.png')] max-tablet:pb-[25vw] mt-16;
}

.banner-content {
  @apply relative flex flex-col text-center text-lg text-white 
         gap-[5vw]
         max-laptop:gap-[3vw]
         max-tablet:gap-[60px]
         -translate-y-[4vw];
}

.title {
  @apply relative text-white tracking-[3px] 
         text-[1.35vw]
         max-tablet:text-[4vw];
}

.middle-text {
  @apply text-white tracking-wide 
  text-[8vw] 
         desktop:text-[7.5vw] 
         desktop:-tracking-tighter max-tablet:text-[20vw] max-tablet:tracking-[3px];

  font-weight: bolder;
}

.subtitle {
  @apply text-[1.5vw] 
        max-tablet:text-[4.2vw]
        mb-[2vw]
        max-tablet:mb-[10vw]
        tracking-[3px];
}

.buttons {
  @apply gap-[1vw] max-tablet:gap-[3vw] flex;
}

.action-button {
  @apply bg-[#f5b129] rounded-lg
          max-laptop:rounded
         max-tablet:text-[3.5vw]
         max-tablet:pt-[1.75vw]
         max-tablet:pb-[1.75vw]
         max-tablet:pr-[8vw]
         max-tablet:pl-[8vw]
         font-black 
         uppercase 
         text-[1.25vw] 
         text-[#20414b] 
         pt-[.5vw] 
         pb-[.5vw] 
         pr-[2.75vw] 
         pl-[2.75vw] 
         transition ease-in-out delay-200 
         hover:transition-all 
         hover:scale-110 
         -translate-y-[4vw] max-tablet:font-[600];
}
</style>
