<template>
  <div>deviceType: {{ deviceData.deviceType }}</div>
</template>

<script setup lang="ts">
import { useGroot } from "groot";
import { onMounted, ref } from "vue";

const { getDeviceData } = useGroot();
const deviceData = ref<any>({
  deviceType: "",
});

onMounted(() => {
  deviceData.value = getDeviceData();
});
</script>
