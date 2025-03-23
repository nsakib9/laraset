<template>
  <div class="font-sans text-gray-800">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Learn. Grow. Earn.</h1>
      <p class="text-lg md:text-xl mb-6">Unlock your potential with hands-on courses, real projects, and free tools.</p>
      <button class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
        Get Started
      </button>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-6 md:px-16">
      <h2 class="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <div class="text-teal-500 text-4xl mb-4">🎓</div>
          <h3 class="text-xl font-bold mb-2">Expert Guidance</h3>
          <p>Learn from industry experts with years of experience.</p>
        </div>
        <div class="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <div class="text-teal-500 text-4xl mb-4">💻</div>
          <h3 class="text-xl font-bold mb-2">Real Projects</h3>
          <p>Work on real-world projects to build your portfolio.</p>
        </div>
        <div class="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
          <div class="text-teal-500 text-4xl mb-4">💰</div>
          <h3 class="text-xl font-bold mb-2">Earn as You Learn</h3>
          <p>Monetize your skills while learning new ones.</p>
        </div>
      </div>
    </section>

  <!-- Tools Section -->
<section class="py-16 px-6 md:px-16 bg-gray-100">
  <h2 class="text-3xl font-bold text-center mb-12">Free Tools for You</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <!-- Tool Card -->
    <div class="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
      <div class="text-center">
        <div class="text-4xl text-teal-500 mb-4">🔧</div>
        <h3 class="text-xl font-bold mb-2">GitHub Pro</h3>
        <p class="text-gray-600">Access premium GitHub features for free.</p>
      </div>
    </div>
    <!-- Tool Card -->
    <div class="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
      <div class="text-center">
        <div class="text-4xl text-teal-500 mb-4">🤖</div>
        <h3 class="text-xl font-bold mb-2">AI Code Assistant</h3>
        <p class="text-gray-600">Boost your productivity with AI-powered coding tools.</p>
      </div>
    </div>
    <!-- Tool Card -->
    <div class="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
      <div class="text-center">
        <div class="text-4xl text-teal-500 mb-4">🎨</div>
        <h3 class="text-xl font-bold mb-2">Design Resources</h3>
        <p class="text-gray-600">Get free templates and design assets for your projects.</p>
      </div>
    </div>
    <!-- Add more tools as needed -->
    <div class="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
      <div class="text-center">
        <div class="text-4xl text-teal-500 mb-4">📄</div>
        <h3 class="text-xl font-bold mb-2">Resume Builder</h3>
        <p class="text-gray-600">Create professional resumes in minutes.</p>
      </div>
    </div>
    
    <!-- Cover Letter Generator Tool Card -->
<div class="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
  <div class="text-center">
    <div class="text-4xl text-teal-500 mb-4">✍️</div>
    <h3 class="text-xl font-bold mb-2">Cover Letter Generator</h3>
    <p class="text-gray-600 mb-4">Generate personalized cover letters effortlessly.</p>
    <router-link
      to="/cover-letter-generator"
      class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition"
    >
      Try Now
    </router-link>
  </div>
</div>


  </div>
</section>

    <!-- How It Works Section -->
    <section class="py-16 px-6 md:px-16">
      <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-4xl text-teal-500 mb-4">📋</div>
          <h3 class="font-bold">Enroll</h3>
          <p>Sign up for a course.</p>
        </div>
        <div>
          <div class="text-4xl text-teal-500 mb-4">📖</div>
          <h3 class="font-bold">Learn</h3>
          <p>Master new skills.</p>
        </div>
        <div>
          <div class="text-4xl text-teal-500 mb-4">🛠️</div>
          <h3 class="font-bold">Apply</h3>
          <p>Work on real projects.</p>
        </div>
        <div>
          <div class="text-4xl text-teal-500 mb-4">💵</div>
          <h3 class="font-bold">Earn</h3>
          <p>Monetize your skills.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 px-6 md:px-16 bg-gray-100">
      <h2 class="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6 bg-white shadow-lg rounded-lg">
          <img src="https://via.placeholder.com/100" alt="Student 1" class="rounded-full mx-auto mb-4">
          <p>"This platform changed my life! I landed my first freelance job."</p>
          <h3 class="font-bold mt-2">- John Doe</h3>
        </div>
        <div class="text-center p-6 bg-white shadow-lg rounded-lg">
          <img src="https://via.placeholder.com/100" alt="Student 2" class="rounded-full mx-auto mb-4">
          <p>"The tools and courses are amazing. Highly recommend!"</p>
          <h3 class="font-bold mt-2">- Jane Smith</h3>
        </div>
        <div class="text-center p-6 bg-white shadow-lg rounded-lg">
          <img src="https://via.placeholder.com/100" alt="Student 3" class="rounded-full mx-auto mb-4">
          <p>"I love the hands-on projects. They helped me build my portfolio."</p>
          <h3 class="font-bold mt-2">- Alex Brown</h3>
        </div>
      </div>
    </section>

    <!-- Final Call-to-Action Section -->
    <section class="py-16 px-6 md:px-16 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <h2 class="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
      <p class="mb-6">Sign up today and unlock your potential!</p>
      <button class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
        Join Now
      </button>
    </section>

    <!-- Add this section -->
    <section class="py-16 px-6 md:px-16 text-center">
      <h2 class="text-3xl font-bold mb-4">Explore Our Tools</h2>
      <router-link to="/cover-letter-generator" class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
        Cover Letter Generator
      </router-link>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 md:px-16 bg-gray-800 text-white">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Online Learning Platform. All rights reserved.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-teal-500">Facebook</a>
          <a href="#" class="hover:text-teal-500">Twitter</a>
          <a href="#" class="hover:text-teal-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style>
/* Add any additional custom styles here */
</style>