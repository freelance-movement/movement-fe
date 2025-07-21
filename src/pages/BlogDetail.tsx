import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Eye,
  ThumbsUp,
  Share2,
} from "lucide-react";
import { blogPosts } from "../data/content";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const BlogDetail: React.FC = () => {
  const params = useParams();
  const postId = params.id;

  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button className="bg-blue hover:bg-blue/90 text-white">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== postId).slice(0, 3);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/blog">
              <motion.div
                whileHover={{ x: -4 }}
                className="inline-flex items-center text-gray-600 hover:text-navy mb-8 transition-colors duration-300"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Blog
              </motion.div>
            </Link>

            <div className="mb-8">
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span className="px-3 py-1 bg-red/10 text-red rounded-full mr-4">
                  {post.category}
                </span>
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{post.date}</span>
                <Clock size={16} className="mr-2" />
                <span className="mr-4">{post.readTime}</span>
                <User size={16} className="mr-2" />
                <span>Celene Rodriguez</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye size={16} className="mr-2" />
                    <span>2,345 views</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp size={16} className="mr-2" />
                    <span>89 likes</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 bg-blue/10 text-blue rounded-lg hover:bg-blue/20 transition-colors duration-300"
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="h-96 bg-gradient-to-br from-navy via-blue to-red rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-6xl"
                  >
                    <i className="fas fa-newspaper"></i>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Article Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              {/* Sample article content */}
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-navy">
                  Understanding the current loan market is crucial for making
                  informed financial decisions. In this comprehensive guide,
                  we'll explore the latest trends and provide actionable
                  insights for potential borrowers.
                </p>

                <h2 className="text-3xl font-bold text-navy mt-12 mb-6">
                  Current Market Overview
                </h2>
                <p>
                  The loan market has experienced significant changes in recent
                  months, with interest rates fluctuating and new lending
                  programs emerging. As a seasoned loan specialist, I've
                  observed several key trends that are shaping the industry and
                  affecting borrowers across various demographics.
                </p>

                <p>
                  One of the most notable developments has been the shift in
                  lending criteria, with financial institutions adapting to
                  changing economic conditions. This has created both
                  opportunities and challenges for prospective borrowers, making
                  professional guidance more valuable than ever.
                </p>

                <h2 className="text-3xl font-bold text-navy mt-12 mb-6">
                  Key Factors to Consider
                </h2>

                <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">
                  Interest Rate Environment
                </h3>
                <p>
                  Interest rates continue to be a primary concern for borrowers.
                  The current environment presents unique opportunities for
                  those who understand how to navigate the market effectively.
                  Working with an experienced loan specialist can help you
                  identify the best timing and products for your specific
                  situation.
                </p>

                <h3 className="text-2xl font-semibold text-navy mt-8 mb-4">
                  Credit Score Impact
                </h3>
                <p>
                  Your credit score remains one of the most important factors in
                  loan approval and rate determination. Recent changes in credit
                  scoring models have created new opportunities for borrowers
                  who may have been previously overlooked by traditional lending
                  criteria.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue p-6 rounded-r-lg my-8">
                  <h4 className="text-xl font-semibold text-navy mb-2">
                    Pro Tip
                  </h4>
                  <p className="text-gray-700">
                    Don't wait for "perfect" market conditions. The best loan is
                    one that meets your current needs and financial situation.
                    Market timing is less important than finding the right
                    product with favorable terms.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-navy mt-12 mb-6">
                  Strategic Recommendations
                </h2>
                <p>
                  Based on current market conditions and my experience working
                  with hundreds of clients, here are my top recommendations for
                  prospective borrowers:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Get pre-approved to understand your borrowing capacity
                  </li>
                  <li>
                    Review and optimize your credit profile before applying
                  </li>
                  <li>Consider different loan products to find the best fit</li>
                  <li>
                    Work with a specialist who understands current market
                    dynamics
                  </li>
                  <li>
                    Don't delay if you find favorable terms - market conditions
                    can change quickly
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-navy mt-12 mb-6">
                  Looking Ahead
                </h2>
                <p>
                  The loan market will continue to evolve, and staying informed
                  about these changes is crucial for making smart financial
                  decisions. Whether you're a first-time borrower or looking to
                  refinance existing debt, understanding market trends and
                  working with the right professional can make a significant
                  difference in your outcomes.
                </p>

                <p>
                  As always, every borrower's situation is unique, and what
                  works for one person may not be the best solution for another.
                  That's why personalized consultation and expert guidance
                  remain invaluable in navigating today's complex lending
                  landscape.
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 p-8 bg-gradient-to-r from-navy to-blue rounded-3xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Your Options?
              </h3>
              <p className="text-gray-200 mb-6">
                Get personalized advice based on your unique financial situation
                and goals.
              </p>
              <Link href="/contact">
                <Button className="bg-red hover:bg-red/90 text-white px-8 py-3">
                  Schedule Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-6">
              Related Articles
            </h2>
            <p className="text-xl text-gray-600">
              Continue reading for more insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${relatedPost.id}`}>
                  <Card className="shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                    <div className="h-48 bg-gradient-to-br from-navy via-blue to-red relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="text-white text-3xl"
                        >
                          <i className="fas fa-lightbulb"></i>
                        </motion.div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-red/80 text-white rounded-full text-xs font-semibold">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <Calendar size={14} className="mr-2" />
                        <span className="mr-3">{relatedPost.date}</span>
                        <Clock size={14} className="mr-2" />
                        <span>{relatedPost.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center text-blue font-semibold text-sm">
                        Read Article
                        <ArrowLeft className="ml-2 rotate-180" size={14} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
