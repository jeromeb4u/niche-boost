"use client";

import { useState, useEffect, useRef } from "react";
import {
  Zap,
  Link,
  Music,
  Type,
  Hash,
  Clock,
  TrendingUp,
  BarChart3,
  ArrowRight,
  Check,
  Star,
  Menu,
  X,
  Play,
  Loader2,
  ExternalLink,
} from "lucide-react";

// Navbar
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-lg bg-background/80 border-b border-border" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-background" />
          </div>
          <span className="text-xl font-bold text-text">NicheBoost</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-muted hover:text-text transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a href="#demo" className="bg-primary text-background px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
            Try Free
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-text p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-muted hover:text-text py-2 text-sm" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#demo" className="block bg-primary text-background px-5 py-2.5 rounded-lg font-semibold text-sm text-center mt-3" onClick={() => setMobileOpen(false)}>
            Try Free
          </a>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          <span className="text-sm text-muted">Now analyzing 2.4M+ creators</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-text">Reverse-engineer </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift">
            viral.
          </span>
          <br />
          <span className="text-text">Every time.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
          Paste any TikTok or YouTube URL. Get back exactly what made their content blow up — trending audio, caption formulas, hashtag strategy, posting time, and engagement prediction.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#demo" className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 animate-shimmer">
            Analyze Any URL
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#how-it-works" className="inline-flex items-center gap-2 border border-border text-text px-8 py-4 rounded-xl font-semibold text-lg hover:bg-surface transition-all">
            See How It Works
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Analysis Preview Demo
function AnalysisPreview() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = () => {
    if (!input) return;
    setLoading(true);
    setResults(false);
    setTimeout(() => {
      setLoading(false);
      setResults(true);
    }, 2000);
  };

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-muted text-lg">Paste any creator URL and watch the magic happen.</p>
        </div>

        <div ref={demoRef} className="bg-surface border border-border rounded-2xl p-6 md:p-8">
          {/* Input */}
          <div className="flex gap-3 mb-8">
            <div className="flex-1 relative">
              <Link className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                placeholder="Paste a TikTok or YouTube URL..."
                className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-4 text-text placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="bg-primary text-background px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
              Analyze
            </button>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-border rounded-full"></div>
                <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-muted">Analyzing content patterns...</p>
              <div className="flex gap-2 mt-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </div>
          )}

          {/* Results */}
          {results && !loading && (
            <div className="space-y-4 animate-in">
              <div className="flex items-center gap-2 mb-6">
                <Check className="w-5 h-5 text-success" />
                <span className="text-success font-semibold">Analysis complete for @trending_creator</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResultCard
                  icon={<Music className="w-6 h-6" />}
                  title="Trending Audio"
                  badge="+847% reach"
                  content="Original sound 'Midnight City' by M83 — used in 12.4K videos this week. Peak usage: Sat-Sun."
                  color="primary"
                />
                <ResultCard
                  icon={<Type className="w-6 h-6" />}
                  title="Caption Formula"
                  badge="82% engagement"
                  content="Pattern: Hook (question) + Value (tip) + CTA (comment). Avg 47 words. Emoji cluster at start."
                  color="secondary"
                />
                <ResultCard
                  icon={<Hash className="w-6 h-6" />}
                  title="Hashtag Strategy"
                  badge="2.1M impressions"
                  content="Top 3: #fyp #viral #lifehack. Mix of 1 large (10M+ posts) + 2 niche (under 1M posts)."
                  color="primary"
                />
                <ResultCard
                  icon={<Clock className="w-6 h-6" />}
                  title="Optimal Posting Time"
                  badge="3x more views"
                  content="Best window: 6PM - 8PM EST. Most viral posts published between 6:32 PM and 7:15 PM."
                  color="success"
                />
              </div>
              <div className="mt-6 bg-background border border-border rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <span className="text-sm">Predicted engagement rate: <strong className="text-secondary">8.4%</strong> (industry avg: 3.2%)</span>
                </div>
                <span className="text-xs text-muted">Based on 47 similar posts analyzed</span>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !results && (
            <div className="border-2 border-dashed border-border rounded-xl py-16 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-muted" />
              </div>
              <p className="text-muted">Enter a URL above to see your analysis</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ResultCard({ icon, title, badge, content, color }: { icon: React.ReactNode; title: string; badge: string; content: string; color: "primary" | "secondary" | "success" }) {
  const colorMap = {
    primary: "text-primary border-primary/30 bg-primary/5",
    secondary: "text-secondary border-secondary/30 bg-secondary/5",
    success: "text-success border-success/30 bg-success/5",
  };

  return (
    <div className={`border rounded-xl p-5 ${colorMap[color]} hover:-translate-y-1 transition-all duration-200`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold text-sm">{title}</span>
        </div>
        <span className="text-xs font-medium bg-surface px-2 py-1 rounded-full">{badge}</span>
      </div>
      <p className="text-sm text-muted leading-relaxed">{content}</p>
    </div>
  );
}

// Features Grid
function Features() {
  const features = [
    { icon: <Link className="w-7 h-7" />, title: "URL/Username Analysis", desc: "Paste any TikTok or YouTube URL, or enter a username. We handle it all." },
    { icon: <Music className="w-7 h-7" />, title: "Trending Audio Detection", desc: "Find which sounds are driving massive reach in your niche." },
    { icon: <Type className="w-7 h-7" />, title: "Caption Formula Extractor", desc: "Decode the exact structure successful creators use to hook viewers." },
    { icon: <Hash className="w-7 h-7" />, title: "Hashtag Strategy Decoder", desc: "Discover the perfect mix of broad and niche hashtags." },
    { icon: <Clock className="w-7 h-7" />, title: "Optimal Posting Time", desc: "Know exactly when your audience is most active." },
    { icon: <TrendingUp className="w-7 h-7" />, title: "Engagement Prediction", desc: "Predict how a piece of content will perform before you post." },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Everything you need to go viral</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Six powerful tools working together to reverse-engineer any viral piece of content.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <Link className="w-8 h-8" />,
      title: "Paste a URL",
      desc: "Enter any TikTok or YouTube video URL, or a creator's username.",
    },
    {
      num: "02",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Analyzes",
      desc: "Our models decode the audio, captions, hashtags, timing, and engagement patterns.",
    },
    {
      num: "03",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Steal What's Working",
      desc: "Get actionable insights you can apply immediately to your own content.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Three steps to viral intel</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-border mb-6">
                <span className="text-primary font-bold text-2xl">{step.num}</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 text-secondary">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted text-sm">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t border-dashed border-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Bar
function StatsBar() {
  const stats = [
    { value: "2.4M+", label: "Creators analyzed" },
    { value: "847M+", label: "Videos processed" },
    { value: "94%", label: "Prediction accuracy" },
    { value: "3.2x", label: "Average reach increase" },
  ];

  return (
    <section className="py-16 px-6 border-y border-border">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</div>
            <div className="text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const testimonials = [
    {
      quote: "I was stuck at 200 views for months. NicheBoost showed me my niche was using audio wrong. Applied their suggestions — hit 2.3M views in 3 weeks.",
      name: "Ava Martinez",
      handle: "@avamartinez",
      result: "2.3M views",
      avatar: "AM",
    },
    {
      quote: "The hashtag decoder alone was worth the subscription. I went from 12K to 89K followers in 6 weeks using their exact strategy.",
      name: "Marcus Chen",
      handle: "@marcuschen_",
      result: "89K followers",
      avatar: "MC",
    },
    {
      quote: "Caption formulas changed everything. My engagement rate jumped from 2.1% to 7.8%. I'm now getting 3-5 brand deals a month.",
      name: "Priya Sharma",
      handle: "@priyasharma",
      result: "7.8% engagement",
      avatar: "PS",
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-success text-sm font-semibold uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Creators winning with NicheBoost</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />)}
              </div>
              <p className="text-text mb-6 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted">{t.handle}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-xs text-success font-semibold">{t.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      desc: "Perfect for testing the waters.",
      features: ["3 analyses per month", "URL/Username analysis", "Basic engagement stats", "Community support"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Growth",
      price: "$15",
      period: "/mo",
      desc: "For creators serious about growth.",
      features: ["20 analyses per month", "Everything in Starter", "Trending audio detection", "Caption formula extractor", "Hashtag strategy decoder", "Optimal posting time", "Email support"],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Pro",
      price: "$39",
      period: "/mo",
      desc: "Unlimited power for serious creators.",
      features: ["Unlimited analyses", "Everything in Growth", "API access", "Data export", "Custom integrations", "Priority support", "Advanced analytics"],
      cta: "Go Pro",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Start free. Scale when ready.</h2>
          <p className="text-muted mt-3">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-6 border ${plan.featured ? "bg-surface border-primary/50 animate-pulse-glow scale-[1.02]" : "bg-surface border-border hover:border-primary/30"} transition-all`}>
              {plan.featured && (
                <div className="inline-block bg-primary text-background text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-xs text-muted mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${plan.featured ? "bg-primary text-background hover:bg-primary/90" : "border border-border text-text hover:bg-surface"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to reverse-engineer viral?</h2>
        <p className="text-muted text-lg mb-8">Join 50,000+ creators who cracked the code on viral content.</p>
        <a href="#demo" className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all animate-shimmer">
          Start Analyzing Free
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-background" />
            </div>
            <span className="text-lg font-bold text-text">NicheBoost</span>
          </div>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-text transition-colors">Privacy</a>
            <a href="#" className="hover:text-text transition-colors">Terms</a>
            <a href="#" className="hover:text-text transition-colors">Contact</a>
            <a href="#" className="hover:text-text transition-colors">Twitter</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} NicheBoost. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <AnalysisPreview />
      <Features />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}