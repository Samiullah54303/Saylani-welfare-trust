import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface NewsSectionProps {
  onNewsClick: (newsId: string) => void;
}

const NewsSection: React.FC<NewsSectionProps> = ({ onNewsClick }) => {
  const newsArticles = [
    {
      id: 'news-1',
      title: 'Saylani Welfare Opens New Children\'s Hospital Wing',
      summary: 'A state-of-the-art pediatric oncology wing has been inaugurated to provide advanced cancer treatment for children.',
      content: 'The new wing features 50 additional beds, advanced chemotherapy facilities, and specialized treatment rooms...',
      author: 'Dr. Sarah Khan',
      authorRole: 'Medical Director',
      date: '2024-01-20',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
      category: 'Healthcare',
      featured: true,
      tags: ['Healthcare', 'Children', 'Hospital', 'Oncology']
    },
    {
      id: 'news-2',
      title: 'Ramadan Food Distribution Program Launches Nationwide',
      summary: 'Special Ramadan initiative aims to provide iftar meals to 100,000 families across Pakistan during the holy month.',
      content: 'This year\'s program has been expanded to cover rural areas with mobile food distribution units...',
      author: 'Ahmad Ali',
      authorRole: 'Program Coordinator',
      date: '2024-01-18',
      readTime: '2 min read',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      category: 'Food Distribution',
      featured: false,
      tags: ['Ramadan', 'Food', 'Community', 'Support']
    },
    {
      id: 'news-3',
      title: 'Educational Scholarship Program Reaches 10,000 Students',
      summary: 'Milestone achievement as educational support program crosses 10,000 beneficiary students milestone.',
      content: 'The scholarship program now covers school fees, books, and uniforms for students from underprivileged families...',
      author: 'Fatima Sheikh',
      authorRole: 'Education Head',
      date: '2024-01-15',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
      category: 'Education',
      featured: false,
      tags: ['Education', 'Scholarship', 'Students', 'Milestone']
    },
    {
      id: 'news-4',
      title: 'Emergency Response Team Deployed for Flood Relief',
      summary: 'Rapid deployment of medical teams and relief supplies to flood-affected areas in Sindh province.',
      content: 'Our emergency response includes mobile medical units, clean water supplies, and temporary shelter...',
      author: 'Captain Retired Asif',
      authorRole: 'Emergency Coordinator',
      date: '2024-01-12',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
      category: 'Emergency Relief',
      featured: false,
      tags: ['Emergency', 'Flood', 'Relief', 'Response']
    },
    {
      id: 'news-5',
      title: 'Clean Water Project Brings Safe Drinking Water to 50 Villages',
      summary: 'Installation of solar-powered water filtration systems in remote villages across Balochistan and KPK.',
      content: 'Each system can provide clean drinking water to approximately 500 families and includes maintenance training...',
      author: 'Eng. Zubair Khan',
      authorRole: 'Water Projects Lead',
      date: '2024-01-10',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop',
      category: 'Water Projects',
      featured: false,
      tags: ['Water', 'Villages', 'Solar', 'Clean Water']
    },
    {
      id: 'news-6',
      title: 'Partnership with Tech Giants for Digital Literacy Program',
      summary: 'Major collaboration with technology companies to provide free IT training and certification programs.',
      content: 'The partnership will establish digital learning centers in 25 cities and provide laptops to students...',
      author: 'Maria Qureshi',
      authorRole: 'Technology Partnerships',
      date: '2024-01-08',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      category: 'Technology',
      featured: false,
      tags: ['Technology', 'Partnership', 'Digital', 'Training']
    }
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest <span className="text-primary">News & Updates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest initiatives, achievements, and impact stories 
            from communities across Pakistan.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Featured Image */}
              <div 
                className="relative group cursor-pointer animate-slideInRight"
                onClick={() => onNewsClick(featuredArticle.id)}
              >
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

                  {/* Read More Indicator */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full 
                                   flex items-center justify-center border border-white/30">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Content */}
              <div className="space-y-6 animate-slideUp">
                <div>
                  <Badge className="mb-4 bg-accent text-accent-foreground">
                    Breaking News
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-primary" />
                    <span>{featuredArticle.author}</span>
                    <span className="text-muted-foreground/60">•</span>
                    <span>{featuredArticle.authorRole}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{formatDate(featuredArticle.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{featuredArticle.readTime}</span>
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

                <Button
                  onClick={() => onNewsClick(featuredArticle.id)}
                  size="lg"
                  className="btn-hero"
                >
                  Read Full Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularArticles.slice(0, 6).map((article, index) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                       transition-all duration-300 hover:scale-105 cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onNewsClick(article.id)}
            >
              
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
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
                <h4 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary 
                             transition-colors leading-tight">
                  {article.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.summary}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
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

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated with Our Newsletter
          </h3>
          <p className="text-muted-foreground mb-6">
            Get the latest news, updates, and stories delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:ring-2 
                       focus:ring-primary focus:border-primary outline-none"
            />
            <Button className="btn-secondary px-6">
              Subscribe
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fadeIn">
          <Button 
            onClick={() => onNewsClick('all')}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All News Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;