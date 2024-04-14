<template>
  <NavBar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "reset-body",
      },
    };
  },
};
</script>

<style>
.reset-body {
  @apply m-0;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #292929 transparent;
  box-sizing: border-box;
}
</style>
