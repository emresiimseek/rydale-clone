<template>
  <div class="relative">
    <button href="#" class="flex items-center" @click="toggleVisibility">
      <NuxtPicture
        :src="`/flag_${$i18n.locale}.png`"
        width="23"
        height="23"
        class="lang_img"
      />
    </button>

    <ul
      v-on-clickaway="hideDropdown"
      v-if="isVisible"
      ref="dropdown"
      class="absolute bg-white shadow overflow-hidden rounded w-32 border mt-2 py-1 left-1/2 transform -translate-x-1/2"
    >
      <li>
        <a
          href="#"
          @click.prevent="setLocale('en')"
          class="flex items-center px-3 py-3 hover:bg-gray-200 border-b-[1px]"
        >
          <NuxtPicture
            src="/flag_en.png"
            width="23"
            height="23"
            class="lang_img"
          />
          <span class="ml-1">EN</span>
        </a>

        <a
          href="#"
          @click.prevent="setLocale('fr')"
          class="flex items-center px-3 py-3 hover:bg-gray-200"
        >
          <NuxtPicture
            src="/flag_fr.png"
            width="23"
            height="23"
            class="lang_img"
          />
          <span class="ml-1">FR</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { $i18n, $router } = getCurrentInstance().proxy;

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const setLocale = (locale) => {
  $i18n.locale = locale;

  $router.push({
    params: { lang: locale },
  });

  hideDropdown();
};

const hideDropdown = () => {
  isVisible.value = false;
};
</script>
<style>
.lang_img > img {
  @apply rounded-[50%];
}
</style>
