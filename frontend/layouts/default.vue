<template>
  <div>
    <animated-lights></animated-lights>
    <Nuxt />
  </div>
</template>
<script>
import AnimatedLights from "~/layouts/components/animated-lights";
export default {
  components: {AnimatedLights}
}
</script>
