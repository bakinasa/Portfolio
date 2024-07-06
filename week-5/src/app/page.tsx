export default function Main() {
    return (
        <section id="bio" className="m-8 mt-20 p-8">
            <div
                className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-yellow-100 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-yellow-100 after:via-yellow-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-500 before:dark:opacity-10 after:dark:from-yellow-200 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
            ></div>

            <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

            <div className="flex flex-col lg:flex-row mb-8">
                <div className="flex-1 p-5 border-l-2 border-gray-950">
                    <h3 className="text-2xl font-semibold mb-4">Summary</h3>
                    <p>
                        Creative Frontend Developer. Well versed in React, Tailwind CSS, JavaScript. Focused on creating
                        well adaptable user-friendly interfaces and beautiful animations. Have experience in UI-UX design.
                        Studying backend and machine learning to better understand the complete process of building full-fledged
                        applications.
                    </p>
                    <div className="flex-1 mt-3">
                        <h3 className="text-2xl font-semibold mb-4">Education</h3>
                        <p>
                            <strong>Innopolis University</strong> | Year 2022-2026
                        </p>
                        <p>
                            Informatics and computer engineering, Security Information Track
                        </p>
                    </div>
                </div>
                <div className="flex-1 p-5">
                    <h3 className="text-2xl font-semibold mb-4">My Experience Includes</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="flex items-start"><span className="mr-2">🤖</span>Creating Bots</li>
                        <li className="flex items-start"><span className="mr-2">👾</span>Frontend Development</li>
                        <li className="flex items-start"><span className="mr-2">🗃️</span>Working with Databases</li>
                        <li className="flex items-start"><span className="mr-2">🔧</span>Working with APIs</li>
                        <li className="flex items-start"><span className="mr-2">🧠</span>Machine Learning</li>
                        <li className="flex items-start"><span className="mr-2">📱</span>Application Development</li>
                        <li className="flex items-start"><span className="mr-2">✨</span>Design and 3D Modeling</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row mb-8">
                <div className="flex-1 p-5">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Professional Skills</h3>
                    <div className="flex flex-wrap">
                        <div className="flex-1 p-5">
                            <h4 className="text-xl font-semibold mb-2">Programming Languages</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>HTML/CSS/JS/TS</li>
                                <li>C++</li>
                                <li>Python, Java</li>
                            </ul>
                        </div>
                        <div className="flex-1 p-5">
                            <h4 className="text-xl font-semibold mb-2">Technologies</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Web: React, Vite, Tailwind CSS, Django</li>
                                <li>Other: Git, REST API, WebSocket, NPM, Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="flex flex-wrap justify-between items-center p-6 mt-8 border-t-2 border-b-2 border-black">
                <p className="w-full sm:w-auto mb-4 sm:mb-0">
                    If you have any questions or suggestions, feel free to contact me <strong> → </strong>
                </p>
                <a href="mailto:your.email@example.com" className="p-4 bg-gray-800 text-white rounded-lg transition hover:bg-gray-600">
                    Write me
                </a>
            </div>
        </section>
    );
}
