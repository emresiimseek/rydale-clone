<template>
  <div class="navbar-container">
    <div class="max-laptop:flex hidden">
      <button
        class="relative w-10 h-8 hover:text-black items-center justify-center flex z-50 text-gray-800"
      >
        <font-awesome-icon icon="bars" size="lg" color="#424242" />
      </button>
      <button
        class="relative w-10 h-8 hover:text-black items-center justify-center flex z-50 text-gray-800"
      >
        <font-awesome-icon icon="magnifying-glass" size="lg" color="#424242" />
      </button>
    </div>

    <NuxtPicture
      src="/header_logo.svg"
      format="svg"
      width="112px"
      height="45px"
    />

    <NavBarMenu />
    <div class="flex-[0.8] items-center max-laptop:hidden relative">
      <input
        type="text"
        id="name"
        :placeholder="$t('Search', { name: 'vue-i18n' })"
        class="bg-[#f1f1f1] w-full rounded-2xl italic font-thin pt-2 pb-2 indent-5 outline-none placeholder:italic placeholder:text-sm"
      />
      <font-awesome-icon
        icon="magnifying-glass"
        size="lg"
        class="-translate-x-[2vw] absolute translate-y-[0.5vw] max-desktop:translate-y-[0.8vw] max-desktop:-translate-x-[3vw]"
        color="#424242"
      />
    </div>

    <NavBarDelivery class="max-laptop:hidden" />

    <LanguageSwitcher />
    <div class="flex">
      <button
        class="relative w-10 h-8 hover:text-black items-center justify-center flex z-50 text-gray-800"
      >
        <font-awesome-icon icon="heart" size="lg" color="#424242" />
      </button>
      <button class="relative w-10 h-8 max-desktop:hidden">
        <font-awesome-icon icon="user" size="lg" color="#424242" />
      </button>
      <button class="relative w-10 h-8">
        <font-awesome-icon icon="shopping-bag" size="lg" color="#424242" />
      </button>
    </div>
  </div>
</template>
<style>
.navbar-container {
  @apply bg-white z-30   pr-8 pl-8 max-laptop:pl-0 max-laptop:pr-0 top-0 fixed h-16 flex-shrink-0 flex-grow-0 flex items-center w-full max-laptop:justify-between;
}

picture img {
  @apply rounded-full;
}
</style>
