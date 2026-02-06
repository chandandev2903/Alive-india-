document.addEventListener("DOMContentLoaded", () => {
    const serviecMenu = `
    <ul class="space-y-3 sm:space-y-4">
     <nav class="fixed w-full top-0 left-0 z-50 px-6 py-4">
    <div class="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border border-white/20">
      <div class="flex items-center justify-between">

        <!-- Left Side - Logo -->
        <div class="flex items-center">
          <a href="#" class="text-white font-bold text-2xl">
            ALIVE INDIA
          </a>
        </div>

        <!-- Center - Menu Items -->
        <div class="hidden md:flex items-center gap-8">
          <a href="index.html"
            class="text-white text-[18px] font-medium hover:text-blue-300 transition-colors duration-300 relative group">
            Home
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="aboutus.html"
            class="text-white text-[18px] font-medium hover:text-blue-300 transition-colors duration-300 relative group">
            About
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="service.html"
            class="text-white text-[18px] font-medium hover:text-blue-300 transition-colors duration-300 relative group">
            Service
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#"
            class="text-white text-[18px] font-medium hover:text-blue-300 transition-colors duration-300 relative group">
            Gallery
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="contact.html"
            class="text-white text-[18px] font-medium hover:text-blue-300 transition-colors duration-300 relative group">
            Contact
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <!-- Right Side - Social Media + Contact Button -->
        <div class="flex items-center gap-4">
          <!-- Social Media Icons -->
          <div class="hidden md:flex items-center gap-3">
            <a href="#"
              class="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <i class="fab fa-instagram text-white text-lg"></i>
            </a>
            <a href="#"
              class="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <i class="fab fa-youtube text-white text-lg"></i>
            </a>
            <a href="#"
              class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <i class="fab fa-linkedin-in text-white text-lg"></i>
            </a>
            <a href="#"
              class="w-10 h-10 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-white/20">
              <i class="fab fa-x-twitter text-white text-lg"></i>
            </a>
          </div>

          <!-- Contact Button -->
          <a href="#contact"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
            Contact Us
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>
  </nav>
  `;
    document.getElementById("alive-menu").innerHTML = serviecMenu;
});
