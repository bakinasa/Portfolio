const blocks = [
    {
        title: "Automated system localization of the sound source",
        description: "Android app for localising the source of sound. This application is based on Unity, written in C#. In\n" +
            "                    this project, I acted as a teamleader, working on the physics and code of the app.",
        link: "https://github.com/bakinasa",
    },
    {
        title: "A bot for booking classrooms",
        description: "In this job, my team and I were making a bot for booking classrooms in a university. We made\n" +
            "                    interesting mechanisms for displaying the schedule in the form of pictures directly in the bot, as\n" +
            "                    well as realised the display of weeks as buttons for easy selection of the day.",
        link: "https://github.com/bakinasa",
    },
    {
        title: "Rooma",
        description: "Designed and implemented the main page of the platform main games of the platform. Connected APIs for dynamically loading data from the database. Used React and Tailwind CSS to create responsive and attractive user interfaces.",
        link: "https://github.com/bakinasa",
    },
    {
        title: "Quackit - Social News/Forum Social Network Frontend Developer",
        description: "Contributing to the frontend development of a social news and forum platform using React and Tailwind CSS.",
        link: "https://github.com/bakinasa",
    },
    {
        title: "Diagnostic test method for plasma spectroscopy in China International College ",
        description: "Developing an artificial intelligence model and integrating it into a custom-built website using Python and Flask",
        link: "https://github.com/bakinasa",
    },
    {
        title: "Unicat - Service for Comparing Products Team Lead/Frontend Developer",
        description: "Managed the team, set tasks and deadlines. Developed key features such as creating product cards, search functions and product comparison using Python with Django.",
        link: "https://github.com/bakinasa",
    },
];

export default function Page() {
    return (
        <section className="relative flex min-h-min flex-col items-center justify-between p-6 lg:p-24">
            <h1 className="text-4xl mb-10 font-bold">Projects</h1>

            <div
                className="absolute z-0 top-1/3 w-full h-[480px] lg:h-[360px] -translate-x-1/2 rounded-full bg-gradient-radial from-yellow-100 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-yellow-400 dark:opacity-10"></div>

            <div className="relative z-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-5xl">
                {blocks.map((block, index) => (
                    <a
                        key={index}
                        href={block.link}
                        className="group relative rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className="mb-3 text-2xl font-semibold">
                            {block.title}{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            {block.description}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}
