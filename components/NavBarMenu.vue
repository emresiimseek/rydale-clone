<template>
  <div class="header-menu-container">
    <div class="dropdown">
      <button class="dropbtn">Ladies</button>
      <div class="dropdown-content">ladies</div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Men's</button>
      <div class="dropdown-content">mens</div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Children's</button>
      <div class="dropdown-content">childrens</div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Accessories</button>
      <div class="dropdown-content">accessories</div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Pets</button>
      <div class="dropdown-content">pets</div>
    </div>
  </div>
</template>
<style>
.header-menu-container {
  @apply flex justify-start flex-[3] max-laptop:hidden gap-20 ml-20;
  button {
    @apply text-[20px] italic;
    font-family: "Droid";
    font-family: "Droid";
  }
}

.dropdown-content {
  @apply hidden absolute bg-white w-full  pt-20 pb-20 text-center shadow-sm;
}

.dropdown:hover .dropdown-content {
  @apply block absolute left-0 right-0 min-w-full  border-t-[1px] mt-4;
}
</style>
