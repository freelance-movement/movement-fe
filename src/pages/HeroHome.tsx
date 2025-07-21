import { Button } from "../components/ui/button";
import { Phone, Mail, Shield, Award, Star } from "lucide-react";
import celeneImage from "../assets/image_1753106882018.png";

export default function HeroHome() {
  const handleStartApplication = () => {
    // TODO: Implement redirect to application form
    window.open(
      "https://apply.movement.com/#/milestones?referrerId=celene.ngo%40movement.com",
      "_blank"
    );
  };

  return (
    <div className="font-inter">
      {/* Red & White Modern Hero Section */}
      <section className="hero-bg min-h-screen relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-full">
          {/* Golden Circle Pattern */}
          <div className="absolute top-20 right-10 w-96 h-96 opacity-10">
            <div className="absolute inset-0 border-4 border-red-500 rounded-full"></div>
            <div className="absolute inset-4 border-4 border-red-400 rounded-full"></div>
            <div className="absolute inset-8 border-4 border-red-300 rounded-full"></div>
            <div className="absolute inset-12 border-4 border-red-200 rounded-full"></div>
            <div className="absolute inset-16 border-4 border-red-100 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red rounded-2xl flex items-center justify-center">
              <span className="text-white font-black text-2xl">RM</span>
            </div>
          </div>
        </div>

        {/* Header Navigation */}
        {/* <header className="relative z-30 px-6 pt-8">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4 animate-slide-in-left">
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
            </div>

            <div className="hidden lg:flex items-center space-x-12 animate-slide-in-right">
              <a
                href="#"
                className="text-gray-800 hover:text-red font-medium text-lg transition-all duration-300 relative group"
              >
                Home
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red group-hover:w-full transition-all duration-300 rounded-full"></div>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-red font-medium text-lg transition-all duration-300 relative group"
              >
                Services
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red group-hover:w-full transition-all duration-300 rounded-full"></div>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-red font-medium text-lg transition-all duration-300 relative group"
              >
                About
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red group-hover:w-full transition-all duration-300 rounded-full"></div>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-red font-medium text-lg transition-all duration-300 relative group"
              >
                Contact
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-red group-hover:w-full transition-all duration-300 rounded-full"></div>
              </a>
            </div>

            <div className="animate-slide-in-right">
              <a
                href="tel:7144174004"
                className="bg-red hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </nav>
        </header> */}

        {/* Main Content Grid */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[calc(100vh-300px)]">
            {/* Left Column - Main Content */}
            <div className="space-y-12 animate-slide-in-left">
              {/* Main Headlines */}
              <div className="space-y-8">
                <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
                  <span className="text-red">YOUR MORTGAGE,</span>
                  <span className="block text-gray-900 bg-gray-900 text-white px-4 py-2 inline-block transform -rotate-1">
                    EXPERTLY GUIDED
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-2xl">
                Trusted by homeowners everywhere. Experience a streamlined
                mortgage process with personalized service from your dedicated
                loan officer.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  onClick={handleStartApplication}
                  className="bg-gray-900 hover:bg-black text-white px-12 py-6 rounded-none font-bold text-xl shadow-2xl h-auto transform hover:scale-105 transition-all duration-300 border-2 border-gray-900"
                >
                  START MY APPLICATION
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-black text-red mb-2">NMLS</div>
                  <div className="text-gray-600 text-sm font-medium">
                    # 1053510
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-red mb-2">500+</div>
                  <div className="text-gray-600 text-sm font-medium">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-red mb-2">4.99</div>
                  <div className="text-gray-600 text-sm font-medium">
                    Star Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Family Image */}
            <div className="relative animate-slide-in-right">
              {/* Main Family Image */}
              <div className="relative">
                <div className="w-full max-w-md mx-auto h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-0 border border-gray-100 overflow-hidden">
                  {/* Profile Card Content */}
                  <div className="text-center w-full h-full flex flex-col">
                    {/* Top Section - Profile Image */}
                    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                      <img
                        src={celeneImage}
                        alt="Celene Ngo - Professional Loan Officer"
                        className="w-48 h-48 object-cover rounded-2xl shadow-xl border-4 border-white"
                      />
                    </div>

                    {/* Bottom Section - Name & Title */}
                    <div className="bg-white px-6 py-8 space-y-3">
                      <h3 className="text-3xl font-bold text-gray-900 tracking-tight font-poppins">
                        Celene Ngo
                      </h3>
                      <p className="text-lg text-gray-600 font-medium font-poppins">
                        Loan Officer
                      </p>

                      {/* Social Icons Row */}
                      <div className="flex justify-center space-x-4 pt-4">
                        <a
                          href="tel:7144174004"
                          className="w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors group"
                        >
                          <Phone className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                        </a>
                        <a
                          href="mailto:celene.ngo@movement.com"
                          className="w-10 h-10 bg-red-50 hover:bg-red-100 rounded-xl flex items-center justify-center transition-colors group"
                        >
                          <Mail className="w-4 h-4 text-red group-hover:scale-110 transition-transform" />
                        </a>
                        <div className="w-10 h-10 bg-green-50 hover:bg-green-100 rounded-xl flex items-center justify-center transition-colors group cursor-pointer">
                          <Shield className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="w-10 h-10 bg-yellow-50 hover:bg-yellow-100 rounded-xl flex items-center justify-center transition-colors group cursor-pointer">
                          <Star className="w-4 h-4 text-yellow-600 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="pt-3 space-y-1">
                        <p className="text-xs text-gray-500 font-medium">
                          Movement Mortgage • NMLS # 1053510
                        </p>
                        <p className="text-xs text-gray-400">
                          Fort Myers, FL • 4.99⭐ Rating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Animated Overlay Cards */}
                <div
                  className="absolute bottom-0 -left-16 bg-white p-5 rounded-2xl shadow-xl border-2 border-green-100 animate-slow-bounce hover:animate-pulse transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-xl group-hover:animate-pulse">
                      <Shield className="text-white w-6 h-6 group-hover:animate-bounce" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors">
                        NMLS Licensed
                      </div>
                      <div className="text-gray-600 font-medium text-sm">
                        # 1053510
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                    ✓
                  </div>
                </div>

                <div
                  className="absolute -top-12 -right-2 bg-white p-5 rounded-2xl shadow-xl border-2 border-red-100 animate-gentle-sway hover:animate-spin transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-xl group-hover:animate-pulse">
                      <Award className="text-white w-6 h-6 group-hover:animate-spin" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg group-hover:text-red transition-colors">
                        Top 1% Originator
                      </div>
                      <div className="text-gray-600 font-medium text-sm">
                        Industry Leader
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                    🏆
                  </div>
                </div>

                <div
                  className="absolute top-2/3 -left-6 bg-white p-4 rounded-2xl shadow-xl border-2 border-yellow-100 animate-wiggle hover:animate-bounce transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-500 group-hover:text-yellow-600">
                      <Star className="w-4 h-4 fill-current animate-star-twinkle group-hover:animate-spin" />
                      <Star
                        className="w-4 h-4 fill-current animate-star-twinkle group-hover:animate-spin"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <Star
                        className="w-4 h-4 fill-current animate-star-twinkle group-hover:animate-spin"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <Star
                        className="w-4 h-4 fill-current animate-star-twinkle group-hover:animate-spin"
                        style={{ animationDelay: "0.3s" }}
                      />
                      <Star
                        className="w-4 h-4 fill-current animate-star-twinkle group-hover:animate-spin"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                    <span className="font-bold text-gray-900 text-base animate-pulse group-hover:text-yellow-600">
                      4.99
                    </span>
                    <span className="text-gray-600 text-xs">(Trusted)</span>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                    ⭐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Bar */}
        {/* <div className="absolute bottom-0 left-0 right-0 bg-red py-4 z-30">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-8">
              <a
                href="tel:7144174004"
                className="flex items-center text-white hover:text-red-100 transition-colors duration-300 group"
              >
                <div className="bg-white/20 p-3 rounded-2xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="font-bold text-lg">(714) 417-4004</div>
                  <div className="text-red-100 text-sm">
                    Call Celene Ngo Direct
                  </div>
                </div>
              </a>

              <a
                href="mailto:celene.ngo@movement.com"
                className="flex items-center text-white hover:text-red-100 transition-colors duration-300 group"
              >
                <div className="bg-white/20 p-3 rounded-2xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="font-bold text-lg">
                    celene.ngo@movement.com
                  </div>
                  <div className="text-red-100 text-sm">
                    Email Your Loan Officer
                  </div>
                </div>
              </a>
            </div>

            <div className="text-red-100 text-sm font-medium">
              Celene Ngo • Movement Mortgage • 4575 Via Royale, Ste 201, Fort
              Myers, FL 33919
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
