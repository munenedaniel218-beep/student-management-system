
export function loadStaffSidebar() {

    const staffSidebarContainer = document.getElementById("staff-sidebar-container");

    if (!staffSidebarContainer) return;

    staffSidebarContainer.innerHTML = `
        <aside id="staff-sidebar" class="fixed inset-y-0 left-0 z-50 flex h-screen w-64 -translate-x-full flex-col bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:z-auto lg:translate-x-0">

            <div id="staff-sidebar-brand" class="flex items-center justify-between border-b border-slate-800 px-4 py-4">

                <span class="text-lg font-bold text-white">Staff Portal</span>

                <button id="staff-sidebar-close-button" type="button" aria-label="Close menu" class="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden">
                    ✕
                </button>

            </div>

            <nav id="staff-sidebar-nav" class="flex-1 space-y-1 overflow-y-auto p-3">

                <a id="staff-nav-dashboard" href="/src/teachers/staffDashboard.html" class="flex items-center gap-3 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-medium text-white">
                    Dashboard
                </a>

                <a id="staff-nav-courses" href="/src/teachers/staffcourses.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    My Courses
                </a>

                <a id="staff-nav-timetable" href="/src/teachers/teachingtimetable.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    Class Timetable
                </a>

                <a id="staff-nav-students" href="/src/teachers/studentrecords.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    Student Records
                </a>

                <a id="staff-nav-marks" href="/src/teachers/marksrecording.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    Marks Recording
                </a>

                <a id="staff-nav-assignments" href="/src/teachers/taskview.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    Assignments
                </a>

                <a id="staff-nav-attendance" href="/src/teachers/attendance.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    Attendance
                </a>

                <a id="staff-nav-announcements" href="/src/teachers/announcements.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    Announcements
                </a>

                <a id="staff-nav-activity" href="/src/teachers/staffactivity.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    Activity
                </a>

            </nav>

            <div id="staff-sidebar-footer" class="border-t border-slate-800 p-3">

                <a id="staff-nav-profile" href="/src/teachers/staffprofile.html" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    My Profile
                </a>

            </div>

        </aside>
    `;

    const sidebar = document.getElementById("staff-sidebar");
    const openButton = document.getElementById("sidebar-toggle-button");
    const closeButton = document.getElementById("staff-sidebar-close-button");

    if (openButton) {
        openButton.addEventListener("click", () => {
            sidebar.classList.remove("-translate-x-full");
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            sidebar.classList.add("-translate-x-full");
        });
    }
}
