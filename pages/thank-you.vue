<template>
  <div class="w-full h-screen bg-black home-grid">
    <div class="flex flex-col items-center justify-center">
      <p
        class="pb-12 pl-48 ml-64 font-mono text-4xl text-center text-white text-pink-500 transform -rotate-45"
      >
        * coming soon *
      </p>
      <p class="text-center">
        <img src="~assets/svg/hatchbase.svg" />
      </p>
      <p
        class="pt-32 pr-12 font-mono text-4xl text-center text-yellow-500 transform rotate-30"
      >
        the platform for collaboration in architecture
      </p>
    </div>

    <div class="w-1/3 py-8 mx-auto">
      <p class="font-mono text-center text-teal-500">
        <strong>THANK YOU.</strong><br />WE'LL KEEP YOU IN THE LOOP.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.home-grid {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
