export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="text-center p-8 bg-white rounded-3xl shadow-2xl max-w-md">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Obisnook!</h1>
                <button
                className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                >
                    Let's Get Started!
                </button>
            </div>
        </div>
    );
}