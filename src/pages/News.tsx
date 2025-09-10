import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, ArrowRight, TrendingUp } from 'lucide-react';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Food Distribution', 'Education', 'Emergency Relief', 'Technology', 'Partnerships', 'Community'];

  const newsArticles = [
    {
      id: 1,
      title: 'Saylani Welfare Opens New Children\'s Hospital Wing',
      summary: 'A state-of-the-art pediatric oncology wing has been inaugurated to provide advanced cancer treatment for children.',
      content: 'The new wing features 50 additional beds, advanced chemotherapy facilities, and specialized treatment rooms designed specifically for pediatric oncology care. This expansion represents a significant milestone in Saylani\'s commitment to providing world-class healthcare to children from all backgrounds.',
      author: 'Dr. Sarah Khan',
      authorRole: 'Medical Director',
      authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-20',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
      category: 'Healthcare',
      featured: true,
      trending: true,
      tags: ['Healthcare', 'Children', 'Hospital', 'Oncology', 'Medical Care'],
      views: '15.2K',
      comments: 234
    },
    {
      id: 2,
      title: 'Ramadan Food Distribution Program Launches Nationwide',
      summary: 'Special Ramadan initiative aims to provide iftar meals to 100,000 families across Pakistan during the holy month.',
      content: 'This year\'s expanded program includes mobile food distribution units reaching rural areas for the first time. The initiative will run throughout Ramadan, providing nutritious iftar packages to families in need across all four provinces.',
      author: 'Ahmad Ali',
      authorRole: 'Program Coordinator',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-18',
      readTime: '2 min read',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      category: 'Food Distribution',
      featured: false,
      trending: true,
      tags: ['Ramadan', 'Food', 'Community', 'Support', 'Iftar'],
      views: '12.8K',
      comments: 189
    },
    {
      id: 3,
      title: 'Educational Scholarship Program Reaches 10,000 Students Milestone',
      summary: 'Historic achievement as educational support program crosses 10,000 beneficiary students milestone with expanded coverage.',
      content: 'The scholarship program now covers school fees, books, uniforms, and digital learning resources for students from underprivileged families. The milestone represents years of dedicated work in educational empowerment.',
      author: 'Fatima Sheikh',
      authorRole: 'Education Head',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b332c2ae?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-15',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
      category: 'Education',
      featured: false,
      trending: false,
      tags: ['Education', 'Scholarship', 'Students', 'Milestone', 'Achievement'],
      views: '8.9K',
      comments: 156
    },
    {
      id: 4,
      title: 'Emergency Response Team Deployed for Flood Relief',
      summary: 'Rapid deployment of medical teams and relief supplies to flood-affected areas in Sindh province shows immediate impact.',
      content: 'Our emergency response includes mobile medical units, clean water supplies, temporary shelter arrangements, and food distribution. The team has already served over 5,000 families in the affected regions.',
      author: 'Captain Retired Asif',
      authorRole: 'Emergency Coordinator',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-12',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
      category: 'Emergency Relief',
      featured: false,
      trending: true,
      tags: ['Emergency', 'Flood', 'Relief', 'Response', 'Community'],
      views: '11.3K',
      comments: 298
    },
    {
      id: 5,
      title: 'Clean Water Project Brings Safe Drinking Water to 50 Villages',
      summary: 'Installation of solar-powered water filtration systems in remote villages across Balochistan and KPK provinces.',
      content: 'Each system can provide clean drinking water to approximately 500 families and includes comprehensive maintenance training for local community members. This sustainable approach ensures long-term impact.',
      author: 'Eng. Zubair Khan',
      authorRole: 'Water Projects Lead',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-10',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop',
      category: 'Community',
      featured: false,
      trending: false,
      tags: ['Water', 'Villages', 'Solar', 'Clean Water', 'Sustainability'],
      views: '7.2K',
      comments: 124
    },
    {
      id: 6,
      title: 'Partnership with Tech Giants for Digital Literacy Program',
      summary: 'Major collaboration with leading technology companies to provide free IT training and certification programs nationwide.',
      content: 'The partnership will establish digital learning centers in 25 cities and provide laptops to deserving students. The program includes courses in web development, digital marketing, and basic computer literacy.',
      author: 'Maria Qureshi',
      authorRole: 'Technology Partnerships',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-08',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      category: 'Technology',
      featured: false,
      trending: false,
      tags: ['Technology', 'Partnership', 'Digital', 'Training', 'Education'],
      views: '6.8K',
      comments: 87
    },
    {
      id: 7,
      title: 'Annual Qurbani Distribution Reaches Record Numbers',
      summary: 'This year\'s Qurbani program distributed meat to over 200,000 families across Pakistan during Eid ul-Adha.',
      content: 'The program included proper packaging, cold storage facilities, and systematic distribution to ensure freshness and quality. Special arrangements were made for remote areas and flood-affected regions.',
      author: 'Imam Muhammad Hassan',
      authorRole: 'Religious Affairs Coordinator',
      authorImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      date: '2024-06-25',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop',
      category: 'Community',
      featured: false,
      trending: false,
      tags: ['Qurbani', 'Eid', 'Distribution', 'Community', 'Food'],
      views: '13.5K',
      comments: 267
    },
    {
      id: 8,
      title: 'Mobile Healthcare Units Reach Rural Communities',
      summary: 'New fleet of mobile healthcare units brings essential medical services to remote areas lacking hospital access.',
      content: 'The mobile units are equipped with diagnostic equipment, medicines, and staffed by qualified doctors and nurses. They follow a rotating schedule to ensure regular healthcare access for rural populations.',
      author: 'Dr. Ahmed Malik',
      authorRole: 'Rural Healthcare Director',
      authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      date: '2024-05-15',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop',
      category: 'Healthcare',
      featured: false,
      trending: false,
      tags: ['Healthcare', 'Mobile Units', 'Rural', 'Medical', 'Access'],
      views: '9.4K',
      comments: 178
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles.find(article => article.featured);
  const trendingArticles = filteredArticles.filter(article => article.trending && !article.featured).slice(0, 3);
  const regularArticles = filteredArticles.filter(article => !article.featured && !article.trending);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Latest <span className="text-primary">News</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stay informed about our latest initiatives, achievements, success stories, 
              and community impact across Pakistan through our comprehensive news coverage.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={`${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'border-primary/30 text-primary hover:bg-primary/10'
                    } transition-all duration-300`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Featured Image */}
                <div className="relative group cursor-pointer animate-slideInRight">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-accent text-accent-foreground font-semibold">
                        Featured Story
                      </Badge>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-primary text-primary-foreground">
                        {featuredArticle.category}
                      </Badge>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-6 left-6 flex space-x-4 text-white text-sm">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </span>
                      <span>{featuredArticle.views} views</span>
                    </div>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="space-y-6 animate-slideUp">
                  <div>
                    <Badge className="mb-4 bg-accent text-accent-foreground">
                      Breaking News
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {featuredArticle.summary}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={featuredArticle.authorImage}
                      alt={featuredArticle.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-foreground">{featuredArticle.author}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{featuredArticle.authorRole}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredArticle.date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {featuredArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button size="lg" className="btn-hero">
                    Read Full Story
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Trending News */}
        {trendingArticles.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center space-x-3 mb-12">
                <TrendingUp className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-foreground">Trending News</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {trendingArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                             transition-all duration-300 hover:scale-105 cursor-pointer animate-slideUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    
                    {/* Article Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Trending Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground font-semibold">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      </div>

                      {/* Category */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground text-xs">
                          {article.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary 
                                   transition-colors leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {article.summary}
                      </p>

                      {/* Author & Meta */}
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={article.authorImage}
                          alt={article.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">{article.author}</div>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(article.date)}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="flex items-center justify-between">
                        <span className="text-primary text-sm font-medium group-hover:underline">
                          Read More
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 
                                             transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular News Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              All <span className="text-primary">News Articles</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                           transition-all duration-300 hover:scale-105 cursor-pointer animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {article.category}
                      </Badge>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-4 right-4 text-white text-xs bg-black/50 
                                  backdrop-blur-sm px-2 py-1 rounded">
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary 
                                 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Author & Meta */}
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={article.authorImage}
                        alt={article.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{article.author}</div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.views} views</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{article.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm font-medium group-hover:underline">
                        Read More
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 
                                           transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Informed with Our Newsletter
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest news, updates, and impact stories delivered directly to your inbox. 
              Be the first to know about our new initiatives and achievements.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="btn-secondary px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;