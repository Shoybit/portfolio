export default function Education() {
    return (
        <section id="education" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gray-900 dark:bg-gray-900">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-white mb-8 md:mb-12">
                    Education<span className="text-primary">.</span>
                </h2>

                <div className="bg-gray-800  dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 hover-lift">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="bg-primary/10 p-4 md:p-6 rounded-lg">
                            <i className="fas fa-graduation-cap text-primary text-3xl md:text-4xl"></i>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white  dark:text-white mb-2">Diploma in Engineering</h3>
                            <p className="text-base md:text-lg text-gray-300 dark:text-gray-300 mb-1">
                                <span className="font-semibold">Technology Name:</span> Computer Science & Technology
                            </p>
                            <p className="text-gray-400 dark:text-gray-400 mb-1">
                                <span className="font-semibold">Institute:</span> Graphic Arts Institute, Dhaka
                            </p>
                            <p className="text-gray-400 dark:text-gray-400">
                                <span className="font-semibold">Year:</span> 2023-2027
                            </p>

                            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700 dark:border-gray-700">
                                <h4 className="font-semibold text-white dark:text-white mb-3">Key Courses & Skills Learned:</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-900/30 dark:bg-blue-900/30 text-blue-400 dark:text-blue-400 rounded-full text-xs md:text-sm">Programming Fundamentals</span>
                                    <span className="px-2 py-1 md:px-3 md:py-1 bg-green-900/30 dark:bg-green-900/30 text-green-400 dark:text-green-400 rounded-full text-xs md:text-sm">Web Development</span>
                                    <span className="px-2 py-1 md:px-3 md:py-1 bg-purple-900/30 dark:bg-purple-900/30 text-purple-400 dark:text-purple-400 rounded-full text-xs md:text-sm">Database Management</span>
                                    <span className="px-2 py-1 md:px-3 md:py-1 bg-yellow-900/30 dark:bg-yellow-900/30 text-yellow-400 dark:text-yellow-400 rounded-full text-xs md:text-sm">Software Engineering</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-primary text-white rounded-full font-semibold text-sm md:text-base ">
                                Currently Enrolled
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
