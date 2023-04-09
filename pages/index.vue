<script setup>
import Block1 from "@/components/block1.vue";
import Block2 from "@/components/Home/Block2.vue";
import Block3 from "@/components/Home/Block3.vue";
const {count, addHandle} = useAddHandle();
const {$hello} = useNuxtApp();
const a = 123;
</script>

<template>
  <div>
    <h1>this is HomePage(router?)</h1>
  </div>
  <Block1 />
  <Block2 />
  <Block3 />
  <GlobalBlock1 />
  <h3>最終值{{ count }}</h3>
  <button @click="addHandle">自我累加</button>
  <br>
  {{ $hello('clad000')}}
  <h3 v-timeformat="1681047538464"></h3>
</template>

<style scoped></style>
