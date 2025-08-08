import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DAO Explorer
            </h1>
            <div className="space-x-6">
              {["home", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="pt-24 pb-12 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to the Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Exploring systems for enhancing decentralized autonomous organizations!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Explore Projects
                </button>
                <button
                  onClick={() => setActiveSection("about")}
                  className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all hover:bg-gray-800"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="pt-24 pb-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About the Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  Building the infrastructure and tools that will power the next generation of 
                  decentralized autonomous organizations, making them more efficient, transparent, 
                  and accessible to everyone.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Focus Areas</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Governance mechanisms</li>
                  <li>• Voting systems</li>
                  <li>• Treasury management</li>
                  <li>• Member coordination</li>
                  <li>• Proposal frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="pt-24 pb-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Zeitgeist",
                  description: "Prediction market platform for decentralized forecasting",
                  tech: ["Substrate", "Rust", "TypeScript"]
                },
                {
                  title: "Bleevit DAOs",
                  description: "Enhanced DAO management and governance tools",
                  tech: ["React", "Tauri", "Web3"]
                },
                {
                  title: "XCM Integration",
                  description: "Cross-chain messaging for multi-chain DAOs",
                  tech: ["Polkadot", "XCM", "Substrate"]
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <section className="pt-24 pb-12 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Interested in collaborating on DAO infrastructure? Let's build the future together.
            </p>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-blue-400">GitHub:</span>
                  <span className="text-gray-300">github.com/your-username</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-purple-400">Email:</span>
                  <span className="text-gray-300">your.email@example.com</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-pink-400">Twitter:</span>
                  <span className="text-gray-300">@yourhandle</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-400">
            © 2025 Bleevit DAOs. Exploring systems for enhancing decentralized autonomous organizations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;