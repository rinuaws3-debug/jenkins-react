import './App.css';

function App() {
  return (
    <div className="App">
      {/* 🔹 Navbar */}
      <nav className="navbar">
        <div className="nav-logo">EmvigoTech</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 🔹 Hero Section */}
      <header className="hero" id="home">
        <h1>Emvigo-test</h1>
        <p>A clean and modern starting point for your project.</p>
        <button className="cta-button">Get Started</button>
      </header>

      {/* 🔹 Features Section */}
      <section className="features" id="features">
        <div className="feature-card">
          <h2>⚡ Fast</h2>
          <p>React makes your UI super fast and dynamic.</p>
        </div>
        <div className="feature-card">
          <h2>🎨 Customizable</h2>
          <p>Style everything the way you like with CSS.</p>
        </div>
        <div className="feature-card">
          <h2>🛠 Easy to Extend</h2>
          <p>Add more components and build your dream app.</p>
        </div>
      </section>
      <section className="about" id="about">
        <h2>About</h2>
        <p>This is a simple React starter app with a custom layout.</p>
      </section>

      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email us at hello@example.com</p>
      </section>


      {/* 🔹 Footer Section */}
      <footer className="footer" id="contact">
        <p>© 2025 MyReactApp — Built with React</p>
      </footer>
    </div>
  );
}

export default App;

