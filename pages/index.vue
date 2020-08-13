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
    <!-- FORM  -->
    <form
      method="post"
      action="/thank-you"
      data-netlify="true"
      name="early-access"
    >
      <div class="flex items-center justify-center w-1/3 py-8 mx-auto">
        <input
          type="text"
          name="EMAIL"
          class="inline-flex items-center w-2/3 h-12 p-2 font-mono text-lg font-bold bg-white rounded-tl rounded-bl shadow-inner focus:outline-none focus:shadow-outline"
          placeholder="ENTER YOUR EMAIL"
        />

        <button
          name="subscribe"
          type="submit"
          class="flex items-center justify-center w-1/3 h-12 p-2 font-mono text-lg font-bold text-teal-900 bg-teal-500 rounded-tr rounded-br hover:bg-teal-300 focus:outline-none focus:shadow-outline"
        >
          GET EARLY ACCESS
        </button>
      </div>
    </form>
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
