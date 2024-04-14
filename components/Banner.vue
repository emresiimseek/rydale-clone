<template>
  <div class="banner">
    <div class="banner-content">
      <div class="title">EGG-CELLENT EASTER WITH UP TO</div>
      <div class="middle-text">50% OFF</div>
      <div class="subtitle">SELECTED LINES</div>
    </div>

    <div class="buttons">
      <NuxtLink to="/about" class="action-button"> LADIES </NuxtLink
      ><NuxtLink to="/about" class="action-button"> MEN’S </NuxtLink
      ><NuxtLink to="/about" class="action-button"> KID’S </NuxtLink>
    </div>
  </div>
</template>
<style>
.banner {
  @apply relative flex flex-col justify-center items-center h-[33vw] w-full bg-[#20414b] bg-contain bg-no-repeat bg-bottom bg-[url('../assets/images/banner.avif')] mt-16;
}

.banner-content {
  @apply relative flex flex-col text-center text-lg text-white 
         gap-[5px]
         tablet:gap-7 
         laptop:gap-[5vw] 
         -translate-y-[4vw];
}

.title {
  @apply relative text-white tracking-[800] 
         mobile:text-[1.5vw] 
         tablet:text-[1.2vw] 
         laptop:text-[1.35vw]
         text-[16px];
}

.middle-text {
  @apply text-white tracking-wide 
         text-[8vw] 
         desktop:text-[7.5vw] 
         desktop:-tracking-tighter;
  font-weight: bolder;
}

.subtitle {
  @apply text-[1.5vw] 
         desktop:text-[1.35vw] 
         desktop:mb-[2vw] 
         desktop:tracking-wider;
}

.buttons {
  @apply gap-[1vw] flex;
}

.action-button {
  @apply bg-[#f5b129] rounded 
         font-black 
         tracking-widest 
         uppercase 
         text-[1.25vw] 
         desktop:text-[1.25vw] 
         text-[#20414b] 
         pt-[.5vw] 
         pb-[.5vw] 
         pr-[2.75vw] 
         pl-[2.75vw] 
         desktop:font-black 
         transition ease-in-out delay-200 
         hover:transition-all 
         hover:scale-110 
         -translate-y-[4vw];
}
</style>
