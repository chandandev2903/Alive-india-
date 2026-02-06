document.addEventListener("DOMContentLoaded", () => {
    const serviecMenu = `
    <ul class="space-y-3 sm:space-y-4">
              <li
                class="flex items-center text-slate-500 dark:text-slate-400 hover:text-white cursor-pointer transition-colors pl-6 text-sm sm:text-base">
                <a href="service.html">Alive India in Concert</a>
              </li>
              <li
                class="flex items-center text-slate-500 dark:text-slate-400 hover:text-white cursor-pointer transition-colors pl-6 text-sm sm:text-base">
                <a href="Band-E-Mataram.html">Band-E-Mataram</a>
              </li>
              <li
                class="flex items-center text-slate-500 dark:text-slate-400 hover:text-white cursor-pointer transition-colors pl-6 text-sm sm:text-base">
                <a href="Sounds-of-india.html">Sounds of India</a>
              </li>
              <li
                class="flex items-center text-slate-500 dark:text-slate-400 hover:text-white cursor-pointer transition-colors pl-6 text-sm sm:text-base">
                <a href="Get-Alive-Nights.html">Get Alive Nights</a>
              </li>
            </ul>
  `;
    document.getElementById("alive-menu").innerHTML = serviecMenu;
});
