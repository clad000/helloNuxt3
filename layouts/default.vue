<!-- npx nuxi init projectName -->
<!-- npm run dev -->
<!-- npx nuxi add page pageName(ex: index) -->
<!-- pages 類似超連結到多個分頁的概念 -->
<!-- npx nuxi add layout layoutName  -->
<!-- layouts 取代原本預設的 App.vue，共用的 Header Footer 可以用此方式 -->
<!-- npx nuxi add component componentName -->
<!-- global 設定，限制原本可以 auto component 必須改用 import 方式-->
<!-- setup script -->
<!-- npx nuxi add composable composableName 共用邏輯 function-->
<script setup></script>

<template>
  <div id="default">
    <header>Header</header>

    <slot />
    <footer>Footer</footer>
  </div>
</template>

<style scoped></style>
