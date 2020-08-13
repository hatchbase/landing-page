<template>
  <div class="w-full h-screen bg-black home-grid">
    <div class="flex flex-col items-center justify-center">
      <p
        class="pb-12 pl-24 font-mono text-xl text-center text-white text-pink-500 transform -rotate-45 md:pb-12 md:pl-48 md:ml-64 md:text-4xl"
      >
        * coming soon *
      </p>
      <p class="text-center">
        <img src="~assets/svg/hatchbase.svg" class="w-auto px-2 md:px-0" />
      </p>
      <p
        class="pt-24 font-mono text-right text-yellow-500 transform md:pt-32 md:pr-12 md:text-4xl rotate-30"
      >
        the platform for collaboration in architecture
      </p>
    </div>
    <!-- FORM  -->
    <form
      method="post"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="early-access"
    >
      <input name="bot-field" class="hidden" />
      <input type="hidden" name="form-name" value="early-access" />
      <div
        class="w-full px-2 py-8 md:mx-auto md:flex md:items-center md:justify-center md:w-2/3 lg:w-1/2"
      >
        <input
          type="email"
          name="email"
          class="inline-flex items-center w-full h-12 p-2 font-mono text-lg font-bold bg-white rounded shadow-inner md:rounded-none md:rounded-tl md:rounded-bl md:w-1/2 lg:w-2/3 focus:outline-none focus:shadow-outline"
          placeholder="ENTER YOUR EMAIL"
        />
        <div class="h-2 md:hidden" />
        <button
          name="subscribe"
          type="submit"
          class="inline-flex items-center justify-center w-full h-12 p-2 px-4 font-mono text-lg font-bold text-teal-900 bg-teal-500 rounded md:rounded-none md:rounded-tr md:rounded-br md:w-1/2 lg:w-auto hover:bg-teal-300 focus:outline-none focus:shadow-outline"
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
