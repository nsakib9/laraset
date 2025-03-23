<template>
    <div class="font-sans text-gray-800">
      <!-- Header Section -->
      <header class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-12">
        <h1 class="text-4xl font-bold">কভার লেটার জেনারেটর</h1>
        <p class="text-lg mt-2">আপনার কভার লেটার তৈরি করুন সহজেই এবং দ্রুত।</p>
      </header>
  
      <!-- Tab-Based Form Interface -->
      <section class="py-12 px-6 md:px-16">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <!-- Tabs -->
          <div class="flex border-b mb-6">
  <button
    :class="[
      'tab-button px-4 py-2 font-bold transition-colors duration-300',
      activeTab === 'basic'
        ? 'text-white bg-blue-600 border-blue-600 rounded-t-lg'
        : 'text-gray-600 hover:text-blue-600'
    ]"
    @click="activeTab = 'basic'"
  >
    বেসিক
  </button>
  <button
    :class="[
      'tab-button px-4 py-2 font-bold transition-colors duration-300',
      activeTab === 'advanced'
        ? 'text-white bg-blue-600 border-blue-600 rounded-t-lg'
        : 'text-gray-600 hover:text-blue-600'
    ]"
    @click="activeTab = 'advanced'"
  >
    এডভান্স
  </button>
</div>
  
          <!-- বেসিক (Basic) Form -->
          <form
            v-if="activeTab === 'basic'"
            @submit.prevent="submitForm('basic')"
            class="tab-content"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="নাম" class="input-field" v-model="basicForm.name" required />
              <input type="email" placeholder="ইমেইল" class="input-field" v-model="basicForm.email" required />
              <input type="text" placeholder="আবেদন পদের নাম" class="input-field" v-model="basicForm.jobTitle" required />
              <textarea
                placeholder="সংক্ষিপ্ত বিবরণ"
                class="input-field"
                rows="4"
                v-model="basicForm.description"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn-primary mt-4">জেনারেট করুন</button>
          </form>
  
          <!-- এডভান্স (Advanced) Form -->
          <form
            v-if="activeTab === 'advanced'"
            @submit.prevent="submitForm('advanced')"
            class="tab-content"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="নাম" class="input-field" v-model="advancedForm.name" required />
              <input type="email" placeholder="ইমেইল" class="input-field" v-model="advancedForm.email" required />
              <input type="text" placeholder="আবেদন পদের নাম" class="input-field" v-model="advancedForm.jobTitle" required />
              <input type="text" placeholder="ঠিকানা" class="input-field" v-model="advancedForm.address" required />
              <textarea
                placeholder="শিক্ষাগত যোগ্যতা"
                class="input-field"
                rows="2"
                v-model="advancedForm.education"
                required
              ></textarea>
              <textarea
                placeholder="পেশাগত অভিজ্ঞতা"
                class="input-field"
                rows="2"
                v-model="advancedForm.experience"
                required
              ></textarea>
              <textarea
                placeholder="দক্ষতা"
                class="input-field"
                rows="2"
                v-model="advancedForm.skills"
                required
              ></textarea>
              <textarea
                placeholder="অতিরিক্ত মন্তব্য"
                class="input-field"
                rows="4"
                v-model="advancedForm.comments"
              ></textarea>
            </div>
            <button type="submit" class="btn-primary mt-4">জেনারেট করুন</button>
          </form>
        </div>
      </section>
  
      <!-- Previously Generated Cover Letters Section -->
      <section class="py-12 px-6 md:px-16 bg-gray-100">
        <h2 class="text-3xl font-bold text-center mb-8">পূর্বে তৈরি করা কভার লেটার</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="letter in generatedLetters"
            :key="letter.id"
            class="bg-white shadow-lg rounded-lg p-4"
          >
            <h3 class="font-bold text-lg">{{ letter.jobTitle }}</h3>
            <p class="text-sm text-gray-600 mt-2">{{ letter.snippet }}</p>
            <p class="text-xs text-gray-400 mt-4">তারিখ: {{ letter.date }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "CoverLetterGenerator",
    data() {
      return {
        activeTab: "basic", // Default tab
        basicForm: {
          name: "",
          email: "",
          jobTitle: "",
          description: "",
        },
        advancedForm: {
          name: "",
          email: "",
          jobTitle: "",
          address: "",
          education: "",
          experience: "",
          skills: "",
          comments: "",
        },
        generatedLetters: [
          // Example data for previously generated letters
          {
            id: 1,
            jobTitle: "সফটওয়্যার ইঞ্জিনিয়ার",
            snippet: "আমি সফটওয়্যার ইঞ্জিনিয়ার পদের জন্য আবেদন করছি...",
            date: "2025-03-23",
          },
        ],
      };
    },
    methods: {
      submitForm(type) {
        if (type === "basic") {
          console.log("Basic Form Data:", this.basicForm);
          // Call API to generate cover letter and save to database
        } else if (type === "advanced") {
          console.log("Advanced Form Data:", this.advancedForm);
          // Call API to generate cover letter and save to database
        }
        alert("কভার লেটার সফলভাবে তৈরি হয়েছে!");
      },
    },
  };
  </script>
  
  <style>
  .input-field {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .input-field:focus {
    border-color: #3b82f6;
  }
  .btn-primary {
    background-color: #14b8a6;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: bold;
    transition: background-color 0.2s;
  }
  .btn-primary:hover {
    background-color: #0d9488;
  }
  .tab-button {
    flex: 1;
    /* text-center; */
    padding: 0.75rem;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }
  .active-tab {
    color: #3b82f6;
    border-color: #3b82f6;
  }
  </style>