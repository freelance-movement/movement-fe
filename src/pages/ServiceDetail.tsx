import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Calendar,
  Award,
  Users,
} from "lucide-react";
// import { useLanguage } from "../contexts/LanguageContext";
import { services } from "../data/content";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const ServiceDetail: React.FC = () => {
  // const { t } = useLanguage();
  const params = useParams();
  const serviceId = params.id;

  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/services">
            <Button className="bg-blue hover:bg-blue/90 text-white">
              <ArrowLeft className="mr-2" size={16} />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-navy via-blue to-navy text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-10 w-60 h-60 bg-red/10 rounded-full blur-2xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Link href="/services">
              <motion.div
                whileHover={{ x: -4 }}
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-300"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to All Services
              </motion.div>
            </Link>

            <div className="flex items-start space-x-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-24 h-24 bg-gradient-to-br from-red to-red/80 rounded-3xl flex items-center justify-center shadow-2xl"
              >
                <i className={`${service.icon} text-white text-4xl`} />
              </motion.div>

              <div className="flex-1">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                    <Star
                      className="text-yellow-400 mr-2"
                      size={16}
                      fill="currentColor"
                    />
                    <span className="text-sm">Premium Service</span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                    <Award className="text-green-400 mr-2" size={16} />
                    <span className="text-sm">Expert Guidance</span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                    <Users className="text-blue-400 mr-2" size={16} />
                    <span className="text-sm">Personalized Support</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white border-t-4 border-t-red relative">
        {/* Animated Top Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red via-red to-blue w-full origin-left"
        />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">
              A streamlined approach to getting you the loan you need
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  desc: "We discuss your financial goals and loan requirements",
                },
                {
                  step: 2,
                  title: "Application Review",
                  desc: "Complete application review and document collection",
                },
                {
                  step: 3,
                  title: "Loan Processing",
                  desc: "Professional processing and underwriting of your application",
                },
                {
                  step: 4,
                  title: "Final Approval",
                  desc: "Final approval and closing coordination",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Connection Line */}
                  {index < 3 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red/50 to-blue/50 z-0 origin-left"
                    />
                  )}

                  <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-red to-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-4">
                      {process.title}
                    </h3>
                    <p className="text-gray-600">{process.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="space-y-12"
              >
                {/* Detailed Article Content */}
                <motion.div variants={itemVariants}>
                  <h2 className="text-4xl font-bold text-navy mb-8">
                    About {service.title}
                  </h2>

                  <div className="prose prose-lg max-w-none">
                    {/* Hero Image */}
                    <div className="mb-12">
                      <img
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt={service.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
                      />
                    </div>

                    {/* Introduction */}
                    <div className="mb-12">
                      <p className="text-gray-700 text-xl leading-relaxed mb-8 font-medium">
                        When it comes to {service.title.toLowerCase()},
                        understanding your options and working with the right
                        professional can make all the difference in securing the
                        best terms and saving thousands of dollars over the life
                        of your loan.
                      </p>

                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        With over a decade of experience in the mortgage
                        industry, I've helped hundreds of families navigate the
                        complexities of home financing. Each client's situation
                        is unique, which is why I take a personalized approach
                        to understand your specific circumstances, financial
                        goals, and long-term objectives.
                      </p>
                    </div>

                    {/* Two Column Content with Images */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                      <div>
                        <h3 className="text-3xl font-bold text-navy mb-6">
                          Understanding Your Options
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          The loan landscape offers various products designed to
                          meet different financial situations and goals. Whether
                          you're a first-time homebuyer, looking to refinance,
                          or seeking an investment property loan, understanding
                          the nuances of each option is crucial.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          I work closely with each client to evaluate their
                          income, credit profile, down payment capacity, and
                          long-term financial plans to recommend the most
                          suitable loan program.
                        </p>

                        {/* Key Benefits List */}
                        <ul className="space-y-3 text-gray-700">
                          {service.benefits
                            .slice(0, 4)
                            .map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle
                                  className="text-green-500 mr-3 mt-1 flex-shrink-0"
                                  size={20}
                                />
                                <span className="text-lg">{benefit}</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                          alt="Consultation meeting"
                          className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
                        />
                        <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-xl">
                          <h4 className="text-xl font-bold text-navy mb-3">
                            Expert Consultation
                          </h4>
                          <p className="text-gray-700">
                            Every loan journey begins with a comprehensive
                            consultation where we discuss your goals, review
                            your financial situation, and explore all available
                            options.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Service Features Section */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                      <div className="lg:order-2">
                        <h3 className="text-3xl font-bold text-navy mb-6">
                          Why This Service Stands Out
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          In today's competitive lending environment, having
                          access to multiple loan products and lenders is
                          essential. I maintain relationships with a diverse
                          network of financial institutions, from national banks
                          to local credit unions and specialized lenders.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          This extensive network allows me to shop your loan
                          across multiple lenders simultaneously, ensuring you
                          receive the most competitive rates and terms available
                          for your specific situation.
                        </p>

                        <div className="bg-navy/5 border-l-4 border-l-navy p-6 rounded-r-xl">
                          <h4 className="text-xl font-bold text-navy mb-3">
                            Competitive Advantage
                          </h4>
                          <p className="text-gray-700">
                            "Working with multiple lenders has allowed me to
                            save my clients an average of 0.25% on their
                            interest rate compared to going directly to a single
                            bank."
                          </p>
                        </div>
                      </div>

                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                          alt="Financial analysis"
                          className="w-full h-80 object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Call to Action Section */}
                    <div className="bg-gradient-to-br from-navy/5 via-blue/5 to-red/5 rounded-2xl p-8 mb-8 border border-gray-200">
                      <h3 className="text-3xl font-bold text-navy mb-6">
                        Ready to Get Started?
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Taking the first step toward securing your loan doesn't
                        have to be overwhelming. I'm here to guide you through
                        every aspect of the process, from initial consultation
                        through closing day.
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Contact me today for a free, no-obligation consultation
                        where we'll discuss your goals, review your options, and
                        create a customized strategy to help you achieve your
                        financial objectives.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                          <Button className="bg-red hover:bg-red/90 text-white px-8 py-3">
                            <Calendar className="mr-2" size={18} />
                            Schedule Free Consultation
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3"
                        >
                          <Phone className="mr-2" size={18} />
                          Call (555) 123-4567
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sticky top-32 space-y-8"
              >
                {/* Contact Card */}
                <Card className="p-8 bg-gradient-to-br from-navy to-blue text-white">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6">
                      Ready to Get Started?
                    </h3>
                    <p className="text-gray-200 mb-8">
                      Contact me today for a free consultation and personalized
                      loan assessment.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <Phone className="mr-3" size={20} />
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-3" size={20} />
                        <span>celene@loansbycelene.com</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-red hover:bg-red/90 text-white mb-4">
                        <Calendar className="mr-2" size={16} />
                        Schedule Consultation
                      </Button>
                    </Link>

                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-navy"
                    >
                      <Phone className="mr-2" size={16} />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-navy mb-6">
                      Quick Facts
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Processing Time</span>
                        <span className="font-semibold text-navy">
                          24-48 hours
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Interest Rates</span>
                        <span className="font-semibold text-navy">
                          From 3.25%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Loan Terms</span>
                        <span className="font-semibold text-navy">
                          15-30 years
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Down Payment</span>
                        <span className="font-semibold text-navy">
                          As low as 3%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-6">
              Related Services
            </h2>
            <p className="text-xl text-gray-600">
              Explore our other loan products that might interest you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter((s) => s.id !== serviceId)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/services/${relatedService.id}`}>
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-8">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${
                            index % 2 === 0
                              ? "from-blue to-navy"
                              : "from-red to-red/80"
                          } rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <i
                            className={`${relatedService.icon} text-white text-2xl`}
                          />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-blue transition-colors duration-300">
                          {relatedService.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {relatedService.description}
                        </p>
                        <div className="flex items-center text-blue font-semibold">
                          Learn More
                          <ArrowLeft className="ml-2 rotate-180" size={16} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
