import { Switch, Route, Link } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { LanguageProvider } from './contexts/LanguageContext';
// import Header from "./components/Header";
import Footer from './components/Footer';
// import FloatingCTA from "./components/FloatingCTA";
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import NotFound from './pages/not-found';

function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/services/:id" component={ServiceDetail} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:id" component={BlogDetail} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <LanguageProvider>
                    <div className="min-h-screen bg-white">
                        {/* <Header /> */}
                        <header className="relative z-30 px-6 pt-8">
                            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                                <Link
                                    to="/"
                                    className="flex items-center space-x-4 animate-slide-in-left cursor-pointer"
                                >
                                    <div className="bg-red p-3 rounded-2xl">
                                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                            <span className="text-red font-black text-sm">CN</span>
                                        </div>
                                    </div>
                                    <div className="text-gray-800">
                                        <div className="font-black text-xl">Celene Ngo</div>
                                        <div className="text-red font-semibold text-sm tracking-wider">
                                            MOVEMENT MORTGAGE
                                        </div>
                                    </div>
                                </Link>

                                <div className="hidden lg:flex items-center space-x-12 animate-slide-in-right">
                                    <Link
                                        to="/"
                                        className="text-gray-800 hover:text-red font-medium text-lg transition-all duration-300 relative group"
                                    >
                                        Home
                                        <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red group-hover:w-full transition-all duration-300 rounded-full"></div>
                                    </Link>
                                    <Link
                                        to="/services"
                                        className="text-gray-800 hover:text-red font-medium text-lg transition-all duration-300 relative group"
                                    >
                                        Services
                                        <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red group-hover:w-full transition-all duration-300 rounded-full"></div>
                                    </Link>
                                    <Link
                                        to="/blog"
                                        className="text-gray-800 hover:text-red font-medium text-lg transition-all duration-300 relative group"
                                    >
                                        Blog
                                        <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red group-hover:w-full transition-all duration-300 rounded-full"></div>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="text-gray-800 hover:text-red font-medium text-lg transition-all duration-300 relative group"
                                    >
                                        Contact
                                        <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red group-hover:w-full transition-all duration-300 rounded-full"></div>
                                    </Link>
                                </div>

                                <div className="animate-slide-in-right">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://apply.movement.com/#/milestones?referrerId=celene.ngo%40movement.com"
                                        className="bg-red hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                    >
                                        Start My Application
                                    </a>
                                </div>
                            </nav>
                        </header>
                        <main>
                            <Router />
                        </main>

                        <Footer />
                        {/* <FloatingCTA /> */}
                        <Toaster />
                    </div>
                </LanguageProvider>
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
