<template>
    <RouterLink to="/" class="logo">
        <span>MyPrj</span>.COM
    </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.logo{
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>