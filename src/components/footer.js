
export function loadFooter() {
    const footerContainer = document.getElementById("dashboard-footer");

    if (!footerContainer) {
        console.log("Footer container not found");
        return;
    }

    footerContainer.innerHTML = `
        <footer id="main-footer" class="mt-12 bg-gray-900 pt-10 pb-6 text-white">

            <div id="footer-content" class="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">

                <!-- Column 1 -->
                <div id="footer-about">
                    <h3 class="mb-3 text-xl font-bold">Student Portal</h3>

                    <p class="text-sm text-gray-300">
                        Your academic dashboard for classes, fees, announcements, and campus tools.
                    </p>
                </div>


                <!-- Column 2 -->
                <div id="footer-links">
                    <h3 class="mb-3 text-xl font-bold">Quick Links</h3>

                    <ul class="space-y-2 text-gray-300">
                        <li><a href="/src/studentDashboard.html" class="transition hover:text-white">Dashboard</a></li>
                        <li><a href="/src/courses.html" class="transition hover:text-white">Courses</a></li>
                        <li><a href="/src/exams.html" class="transition hover:text-white">Exams</a></li>
                        <li><a href="/src/finance.html" class="transition hover:text-white">Finance</a></li>
                    </ul>
                </div>


                <!-- Column 3 -->
                <div id="footer-support">
                    <h3 class="mb-3 text-xl font-bold">Support</h3>

                    <ul class="space-y-2 text-gray-300">
                        <li>Email: support@school.edu</li>
                        <li>Phone: +254 700 000 000</li>
                        <li><a href="/src/support.html" class="transition hover:text-white">Help Center</a></li>
                    </ul>
                </div>

            </div>


            <!-- Bottom Bar -->
            <div id="footer-bottom" class="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                © 2026 Student Portal. All Rights Reserved.
            </div>

        </footer>
    `;
}
