import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
    // Calculator,
    // Search,
    // Tag,
    // Award,
    // Handshake,
    Clock,
    Heart,
    Users,
    Zap,
    Star,
    ChevronDown,
    // Phone,
    // Calendar,
    // Mail,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import {
    // agentInfo,
    stats,
    services,
    testimonials,
    blogPosts,
} from '../data/content';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import HeroHome from './HeroHome';

const Home: React.FC = () => {
    const { t } = useLanguage();
    const { ref: heroRef } = useInView({ threshold: 0.3 });
    const { ref: statsRef, isInView: statsInView } = useInView({
        threshold: 0.5,
    });

    const loansCount = useCounter({ end: stats.loans, isInView: statsInView });
    const experienceCount = useCounter({
        end: stats.experience,
        isInView: statsInView,
    });
    const averageCloseCount = useCounter({
        end: stats.averageClose,
        isInView: statsInView,
    });

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
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className="">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Modern Professional Background */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue to-navy"></div> */}

                {/* Subtle Geometric Pattern */}
                {/* <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(255,255,255,0.1) 20px,
                rgba(255,255,255,0.1) 21px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 20px,
                rgba(255,255,255,0.1) 20px,
                rgba(255,255,255,0.1) 21px
              )
            `,
            }}
          />
        </div> */}

                {/* Floating elements for visual interest */}
                {/* <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-10 w-48 h-48 bg-red/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/3 rounded-full blur-lg"
          />
        </div> */}

                {/* Subtle gradient overlay for depth */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/20" /> */}

                {/* Hero Content */}

                {/* Scroll Indicator */}

                <HeroHome />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* Differentiator Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl lg:text-5xl font-bold text-navy mb-6"
                        >
                            {t('differentiators.title')}
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            {t('differentiators.subtitle')}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                icon: Clock,
                                title: t('differentiators.items.0.title'),
                                description: t('differentiators.items.0.description'),
                                color: 'from-red to-red/80',
                            },
                            {
                                icon: Heart,
                                title: t('differentiators.items.1.title'),
                                description: t('differentiators.items.1.description'),
                                color: 'from-blue to-navy',
                            },
                            {
                                icon: Users,
                                title: t('differentiators.items.2.title'),
                                description: t('differentiators.items.2.description'),
                                color: 'from-red to-red/80',
                            },
                            {
                                icon: Zap,
                                title: t('differentiators.items.3.title'),
                                description: t('differentiators.items.3.description'),
                                color: 'from-blue to-navy',
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                    <CardContent className="p-8">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                                        >
                                            <item.icon className="text-white" size={24} />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-navy mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden border-t-4 border-t-red">
                {/* Animated Top Border */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red via-red to-blue w-full origin-left"
                />
                {/* Professional Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red/5 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-navy/5 to-blue/5 rounded-full blur-2xl"></div>
                </div>

                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(30,64,175,0.8) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(220,38,38,0.8) 1px, transparent 1px)
            `,
                            backgroundSize: '100px 100px',
                        }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-block px-4 py-2 bg-gradient-to-r from-red/10 to-blue/10 rounded-full mb-6"
                        >
                            <span className="text-navy font-semibold text-sm uppercase tracking-wider">
                                Our Expertise
                            </span>
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-navy via-blue to-navy bg-clip-text text-transparent"
                        >
                            {t('services.title')}
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            {t('services.subtitle')}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.slice(0, 3).map((service, index) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-blue/30 hover:shadow-2xl transition-all duration-500 h-full group overflow-hidden">
                                    <CardContent className="p-8 relative">
                                        {/* Card background gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-red-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative z-10">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`w-16 h-16 bg-gradient-to-br ${
                                                    index % 3 === 0
                                                        ? 'from-red to-red/80'
                                                        : index % 3 === 1
                                                        ? 'from-blue to-navy'
                                                        : 'from-navy to-blue'
                                                } rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                            >
                                                <i
                                                    className={`${service.icon} text-white text-2xl`}
                                                />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold mb-4 text-navy group-hover:text-blue transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <ul className="space-y-3 mb-8">
                                                {service.benefits.map((benefit, benefitIndex) => (
                                                    <li
                                                        key={benefitIndex}
                                                        className="flex items-center text-sm text-gray-700"
                                                    >
                                                        <div
                                                            className={`w-2 h-2 ${
                                                                index % 3 === 0
                                                                    ? 'bg-red'
                                                                    : index % 3 === 1
                                                                    ? 'bg-blue'
                                                                    : 'bg-navy'
                                                            } rounded-full mr-3 flex-shrink-0`}
                                                        />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button
                                                    className={`w-full ${
                                                        index % 3 === 0
                                                            ? 'bg-red hover:bg-red/90'
                                                            : index % 3 === 1
                                                            ? 'bg-blue hover:bg-blue/90'
                                                            : 'bg-navy hover:bg-navy/90'
                                                    } text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                                                >
                                                    Learn More
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link href="/services">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-red to-blue text-white border-none hover:from-red/90 hover:to-blue/90 shadow-xl hover:shadow-2xl px-8 py-3"
                                >
                                    View All Services
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="ml-2"
                                    >
                                        →
                                    </motion.span>
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-16 bg-red relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wider"
                        >
                            STAY CONNECTED
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-white/90 mb-12 text-lg"
                        >
                            follow me on social media
                        </motion.p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center items-center space-x-4 lg:space-x-8">
                            {[
                                {
                                    platform: 'twitter',
                                    icon: 'fab fa-twitter',
                                    color: '#1DA1F2',
                                    url: 'https://twitter.com/loansbycelene',
                                },
                                {
                                    platform: 'instagram',
                                    icon: 'fab fa-instagram',
                                    color: '#E4405F',
                                    url: 'https://instagram.com/loansbycelene',
                                },
                                {
                                    platform: 'facebook',
                                    icon: 'fab fa-facebook',
                                    color: '#4267B2',
                                    url: 'https://facebook.com/loansbycelene',
                                },
                                {
                                    platform: 'linkedin',
                                    icon: 'fab fa-linkedin',
                                    color: '#0077B5',
                                    url: 'https://linkedin.com/in/celene-rodriguez',
                                },
                                {
                                    platform: 'youtube',
                                    icon: 'fab fa-youtube',
                                    color: '#FF0000',
                                    url: 'https://youtube.com/@loansbycelene',
                                },
                            ].map((social, index) => (
                                <motion.button
                                    key={social.platform}
                                    onClick={() =>
                                        window.open(social.url, '_blank', 'noopener,noreferrer')
                                    }
                                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                        type: 'spring',
                                        stiffness: 100,
                                    }}
                                    whileHover={{
                                        scale: 1.15,
                                        y: -5,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    viewport={{ once: true }}
                                    className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl group"
                                    style={{
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <i
                                        className={`${social.icon} text-2xl lg:text-3xl transition-all duration-300 group-hover:scale-110`}
                                        style={{ color: social.color }}
                                    />
                                </motion.button>
                            ))}
                        </div>

                        {/* Additional Contact CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-12"
                        >
                            <p className="text-white/80 text-sm mb-4">
                                Connect with me for the latest loan tips and market updates
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <Link href="/contact">
                                    <span className="inline-flex items-center px-6 py-3 bg-white text-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg cursor-pointer">
                                        <span className="mr-2">📞</span>
                                        Get in Touch Today
                                    </span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl lg:text-5xl font-bold text-navy mb-6"
                        >
                            {t('testimonials.title')}
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            {t('testimonials.subtitle')}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                variants={itemVariants}
                                whileHover={{ y: -4, scale: 1.02 }}
                            >
                                <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                                    <CardContent className="p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} fill="currentColor" />
                                                ))}
                                            </div>
                                            <span className="ml-2 text-sm text-gray-500">
                                                {testimonial.rating}.0
                                            </span>
                                        </div>
                                        <blockquote className="text-gray-700 mb-6 leading-relaxed">
                                            "{testimonial.content}"
                                        </blockquote>
                                        <div className="flex items-center">
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover mr-4"
                                            />
                                            <div>
                                                <div className="font-semibold text-navy">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {testimonial.location}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Statistics Section */}
            <section ref={statsRef} className="py-20 bg-navy text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                    >
                        <motion.div variants={itemVariants} className="group">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={statsInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-5xl lg:text-6xl font-bold text-red mb-4"
                            >
                                {loansCount}+
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2">{t('stats.loans.title')}</h3>
                            <p className="text-gray-300">{t('stats.loans.description')}</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="group">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={statsInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-5xl lg:text-6xl font-bold text-red mb-4"
                            >
                                {stats.rating}/5
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2">
                                {t('stats.satisfaction.title')}
                            </h3>
                            <p className="text-gray-300">{t('stats.satisfaction.description')}</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="group">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={statsInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-5xl lg:text-6xl font-bold text-red mb-4"
                            >
                                {experienceCount}+
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2">
                                {t('stats.experience.title')}
                            </h3>
                            <p className="text-gray-300">{t('stats.experience.description')}</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="group">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={statsInView ? { scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-5xl lg:text-6xl font-bold text-red mb-4"
                            >
                                {averageCloseCount} days
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2">
                                {t('stats.average.title')}
                            </h3>
                            <p className="text-gray-300">{t('stats.average.description')}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl lg:text-5xl font-bold text-navy mb-6"
                        >
                            Latest Insights
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            {t('blog.subtitle')}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {blogPosts.slice(0, 3).map((post) => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover transition-transform duration-300"
                                    />
                                    <CardContent className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <span>{post.date}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className="text-red font-semibold hover:text-red/80 transition-colors flex items-center"
                                        >
                                            Read More <span className="ml-2">→</span>
                                        </motion.button>
                                    </CardContent>
                                </Card>
                            </motion.article>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link href="/blog">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="bg-navy text-white hover:bg-blue">
                                    View All Articles
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
