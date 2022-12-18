<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';
const formData = reactive({
  stuname: "",
  email: "",
});
const handleAddStudentForm = async () => {
  console.log("Form Submitted", formData);
}
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <div class="text-3xl font-bold text-center text-white">
        <h1 class="text-3xl font-bold text-center text-white">
          Add Student
        </h1>
      </div>
    </div>

      <form @submit.prevent="handleAddStudentForm" class="w-full" id="AddStudentForm">
        <!-- Name -->
        <div class="flex items-center m-6">
          <div class="w-1/5">
            <label for="stuname" class="font-medium"> Name : </label>
          </div>
          <div class="w-4/5">
            <input type="text" id="stuname" v-model.trim="formData.stuname" class="border-2 border-gray-200 w-full py-2 px-4" placeholder="write your name" required>
          </div>
        </div>

        <!-- Email -->
        <div class="flex items-center m-6">
          <div class="w-1/5">
            <label for="email" class="font-medium"> Email : </label>
          </div>
          <div class="w-4/5">
            <input type="email" id="email" v-model.trim="formData.email" class="border-2 border-gray-200 w-full py-2 px-4" placeholder="write your name" required>
          </div>
        </div>

        <div class="m-8 flex justify-center">
          <button type="submit" class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6">
            Add
          </button>

          <RouterLink :to="{name:'list'}">
            <button type="button" class="bg-emerald-700 text-white font-medium py-2 rounded-md px-6 hover:bg-emerald-800">
              Back to Home
            </button>
          </RouterLink>
        </div>
      </form>
  </div>
</template>

<style>

</style>