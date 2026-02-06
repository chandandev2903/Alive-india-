// active-nav.js
document.addEventListener('DOMContentLoaded', function() {
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('ul.space-y-3 li a');
  
  navLinks.forEach(link => {
    const li = link.closest('li');
    const href = link.getAttribute('href');
    
    // Check if this link matches the current page
    if (href === currentPage) {
      // Add active styles to parent li
      li.classList.remove('text-slate-500', 'dark:text-slate-400', 'hover:text-white', 'pl-6');
      li.classList.add('text-white', 'font-semibold');
      
      // Add icon and underline to link content
      const linkText = link.textContent.trim();
      link.innerHTML = `
        <span class="material-icons text-sm mr-2">play_arrow</span>
        <span class="underline underline-offset-4 decoration-white">${linkText}</span>
      `;
    } else {
      // Ensure inactive styles are present
      li.classList.add('text-slate-500', 'dark:text-slate-400', 'hover:text-white', 'pl-6');
      li.classList.remove('text-white', 'font-semibold');
    }
  });
});