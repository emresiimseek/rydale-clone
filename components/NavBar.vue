<template>
  <div class="navbar-container">
    <div class="max-tablet:block hidden">
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
    <img
      src="../assets/images/header_logo.svg"
      width="112px"
      class="flex-[0.1] max-tablet:mr-auto max-laptop:absolute"
      height="45px"
    />

    <NavBarMenu />
    <div class="flex-[0.8] items-center max-desktop:hidden">
      <input
        type="text"
        id="name"
        placeholder="Search"
        class="bg-[#f1f1f1] w-full rounded-2xl italic font-thin pt-2 pb-2 indent-5 outline-none"
      />
      <font-awesome-icon
        icon="magnifying-glass"
        size="lg"
        class="-translate-x-[2vw] absolute translate-y-[0.5vw]"
        color="#424242"
      />
    </div>

    <NavBarDelivery class="max-desktop:invisible" />
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
  @apply bg-white z-30  max-tablet:pl-0 max-tablet:p-0 pr-8 pl-8 top-0 fixed h-16 flex-shrink-0 flex-grow-0 flex items-center w-full max-laptop:justify-around;
}
</style>
