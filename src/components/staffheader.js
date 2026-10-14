
export function loadStaffHeader() {
    const headerContainer = document.getElementById("staff-header");

    if (!headerContainer) return;

    headerContainer.innerHTML = `
        <header id="staff-dashboard-header" class="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
            <div class="flex items-center justify-between gap-3 px-4 py-3 md:px-6">

                <!-- Left: Menu + Staff Information -->
                <div id="staff-info" class="flex min-w-0 items-center gap-3">

                    <!-- Mobile sidebar button -->
                    <button id="sidebar-toggle-button" type="button" aria-label="Open menu" class="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden">
                        ☰
                    </button>

                    <!-- Staff profile image -->
                    <img id="staff-avatar" src="/src/assets/premium_photo-1734640922274-ce7e12b5d7af.avif" alt="Profile photo of Dr Munene" class="h-10 w-10 shrink-0 rounded-full border-2 border-amber-500 object-cover sm:h-11 sm:w-11">

                    <!-- Staff details -->
                    <div class="min-w-0">

                        <h2 class="truncate text-sm font-semibold text-slate-900 sm:text-base">
                            Welcome, <span id="staff-header-name">Dr Munene</span>
                        </h2>

                        <p class="truncate text-xs text-slate-500 sm:text-sm">
                            <span id="staff-department" class="hidden sm:inline">Computer Science &nbsp;|&nbsp; </span>
                            Staff ID: <span id="staff-header-id">lec234</span>
                        </p>

                    </div>

                </div>


                <!-- Right: Status + Notifications + Logout -->
                <div id="staff-header-actions" class="flex shrink-0 items-center gap-2 sm:gap-4">

                    <!-- Staff Status -->
                    <span id="staff-status" class="inline-flex items-center gap-2 rounded-full bg-green-100 px-2.5 py-1 text-sm font-semibold text-green-700">

                        <span class="h-2 w-2 rounded-full bg-green-500"></span>

                        <span class="hidden sm:inline">
                            Active Staff
                        </span>

                    </span>


                    <!-- Notifications -->
                    <a id="staff-notification-button" href="/src/teachers/announcements.html" aria-label="Staff notifications" class="relative rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">

                        🔔

                        <span id="staff-notification-count" class="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-semibold text-white">
                            3
                        </span>

                    </a>


                    <!-- Logout -->
                    <a id="staff-logout-button" href="/index.html" aria-label="Log out" class="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-3">

                        <span>↪</span>

                        <span class="hidden sm:inline">
                            Log out
                        </span>

                    </a>

                </div>

            </div>
        </header>
    `;
}