export function loadSidebar() {
    const sidebarContainer = document.getElementById("sidebar-container");

    if (!sidebarContainer) return;

    sidebarContainer.innerHTML = `
        <aside id="sidebar" class="fixed inset-y-0 left-0 z-50 flex h-screen w-64 -translate-x-full flex-col bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:z-auto lg:translate-x-0">

            <!-- Brand + close button -->
            <div id="sidebar-brand" class="flex items-center justify-between border-b border-slate-800 px-4 py-4">
                <span class="text-lg font-bold text-white">Student's Portal</span>
                <button id="sidebar-close-button" type="button" aria-label="Close menu" class="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden">✕</button>
            </div>

            <!-- Main links -->
            <nav id="sidebar-nav" class="flex-1 space-y-1 overflow-y-auto p-3">

                <a id="nav-dashboard" href="/src/studentDashboard.html" aria-current="page" class="flex items-center gap-3 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-medium text-white">Dashboard</a>

                <a id="nav-courses" href="/src/courseinfo.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Courses</a>

                <a id="nav-exams" href="/src/examtimetable.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Exams</a>

                <a id="nav-assignments" href="/src/assignments.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Assignments</a>

                <a id="nav-finance" href="/src/fees.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Finance</a>

                <a id="nav-library" href="/src/library.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Library</a>

                <a id="nav-campus-map" href="/src/schoolmap.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Campus map</a>

                <a id="nav-support" href="/src/support.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Support</a>

            </nav>

            <!-- Profile -->
            <div id="sidebar-footer" class="border-t border-slate-800 p-3">
                <a id="nav-profile" href="/src/profile.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">My profile</a>
            </div>

        </aside>
    `;

// sidebar.js - controls how the sidebar slides in and out on small screens.
// On large screens (lg, 1024px and up) the sidebar is always visible via CSS.

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
const openButton = document.getElementById("sidebar-toggle-button");
const closeButton = document.getElementById("sidebar-close-button");
const navLinks = document.querySelectorAll("#sidebar-nav a, #nav-profile");
const desktopQuery = window.matchMedia("(min-width: 1024px)");

function openSidebar() {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden"); // stop the page scrolling behind
  openButton?.setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  openButton?.setAttribute("aria-expanded", "false");
}

// Open with the header menu button
openButton?.addEventListener("click", openSidebar);

// Close with the X button or by tapping the dark overlay
closeButton?.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// Close with the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSidebar();
});

// Close after choosing a link (phones and tablets only)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!desktopQuery.matches) closeSidebar();
  });
});

// Reset when the window grows to desktop size
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) closeSidebar();
})}