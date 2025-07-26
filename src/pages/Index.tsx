import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10 animate-glow" />
            <span className="text-xl font-bold text-foreground">Nexus</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Build Something
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Create beautiful, modern websites with our cutting-edge tools and intuitive design system.
              Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-elegant transition-all duration-300 transform hover:scale-105 animate-float">
                Start Building
              </button>
              <button className="border border-border text-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Nexus?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you create exceptional digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built for speed and performance. Your websites will load instantly and provide smooth user experiences.
              </p>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v12a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Responsive Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every component is fully responsive and looks perfect on all devices, from mobile to desktop.
              </p>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">User Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intuitive design and seamless user experience that your visitors will love and remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already building amazing things with Nexus.
          </p>
          <button className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/50 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className="text-lg font-bold text-foreground">Nexus</span>
              </div>
              <p className="text-muted-foreground">
                Building the future of web development, one project at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Updates</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Careers</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Community</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Nexus. All rights reserved. Built with passion and purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;