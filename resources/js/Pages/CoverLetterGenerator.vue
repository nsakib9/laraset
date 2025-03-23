<template>
  <div class="font-sans text-gray-800">
    <header class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-12">
      <h1 class="text-4xl font-bold">Cover Letter Generator</h1>
      <p class="text-lg mt-2">Create professional cover letters effortlessly with AI assistance.</p>
    </header>

    <section class="py-12 px-6 md:px-16">
      <h2 class="text-3xl font-bold text-center mb-8">Generate Your Cover Letter</h2>
      <form class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" class="input-field" required>
          <input type="email" placeholder="Email" class="input-field" required>
          <input type="text" placeholder="Job Title" class="input-field" required>
          <textarea placeholder="Cover Letter Prompt" class="input-field" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn-primary mt-4">Generate Cover Letter</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CoverLetterGenerator',
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
</style>