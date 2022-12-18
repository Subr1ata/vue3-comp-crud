<script setup>
function handleUpdateStudentForm() {
  console.log("Updated");
}
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Edit Student</h1>
    </div>

    <form @submit.prevent="handleUpdateStudentForm" class="w-full">
      <!-- ID -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label for="stuid" class="font-medium"> ID : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuid"
            class="border-2 border-gray-200 w-full py-2 px-4"
            readonly
            disabled
          />
        </div>
      </div>

      <!-- Name -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label for="stuname" class="font-medium"> Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuname"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
          />
        </div>
      </div>

      <!-- Email -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label for="email" class="font-medium"> Email : </label>
        </div>
        <div class="w-4/5">
          <input
            type="email"
            id="email"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
          />
        </div>
      </div>

      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="
            bg-purple-700
            text-white
            font-medium
            py-2
            px-6
            rounded-md
            hover:bg-purple-800
            mr-6
          "
        >
          Save
        </button>

        <RouterLink :to="{ name: 'list' }">
          <button
            type="button"
            class="
              bg-emerald-700
              text-white
              font-medium
              py-2
              px-6
              rounded-md
              hover:bg-emerald-800
            "
          >
            Back to Home
          </button>
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<style>
</style>