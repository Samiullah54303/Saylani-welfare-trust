import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Play, Calendar, Eye, Search, Filter, Download } from 'lucide-react';

const Media = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Food Distribution', 'Education', 'Emergency Relief', 'Success Stories', 'Events'];

  const mediaItems = [
    {
      id: 1,
      title: 'Saylani Children Hospital - Saving Lives Daily',
      description: 'Take a behind-the-scenes look at our state-of-the-art children\'s hospital and meet the dedicated medical team providing world-class healthcare.',
      thumbnail: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
      type: 'video',
      duration: '5:32',
      views: '125K',
      date: '2024-01-15',
      category: 'Healthcare',
      featured: true
    },
    {
      id: 2,
      title: 'Daily Food Distribution - Feeding Hope',
      description: 'Witness how our daily meal program reaches 50,000+ people across Pakistan, bringing nutrition and hope to families in need.',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      type: 'video',
      duration: '3:45',
      views: '89K',
      date: '2024-01-10',
      category: 'Food Distribution',
      featured: false
    },
    {
      id: 3,
      title: 'Education Success Stories - Breaking Barriers',
      description: 'Meet students whose lives have been transformed through our education and IT literacy programs, breaking barriers and building futures.',
      thumbnail: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
      type: 'video',
      duration: '4:22',
      views: '92K',
      date: '2024-01-05',
      category: 'Education',
      featured: false
    },
    {
      id: 4,
      title: 'Annual Qurbani Program 2024',
      description: 'Comprehensive coverage of our annual Qurbani distribution program reaching thousands of families during Eid ul-Adha.',
      thumbnail: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop',
      type: 'photo_gallery',
      photos: 45,
      views: '156K',
      date: '2024-06-20',
      category: 'Events',
      featured: false
    },
    {
      id: 5,
      title: 'Flood Relief Operations - Immediate Response',
      description: 'Our rapid response teams in action, providing emergency relief and rehabilitation support to flood-affected communities.',
      thumbnail: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
      type: 'video',
      duration: '7:18',
      views: '67K',
      date: '2024-08-15',
      category: 'Emergency Relief',
      featured: false
    },
    {
      id: 6,
      title: 'Clean Water Initiative - Rural Impact',
      description: 'Discover how our clean water projects are bringing safe drinking water to remote villages across Pakistan.',
      thumbnail: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop',
      type: 'documentary',
      duration: '15:30',
      views: '43K',
      date: '2024-07-03',
      category: 'Success Stories',
      featured: false
    },
    {
      id: 7,
      title: 'Volunteer Training Program',
      description: 'Behind the scenes of our comprehensive volunteer training programs that empower community members to serve effectively.',
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      type: 'photo_gallery',
      photos: 32,
      views: '25K',
      date: '2024-06-15',
      category: 'Events',
      featured: false
    },
    {
      id: 8,
      title: 'Medical Camp - Rural Outreach',
      description: 'Free medical camps in remote areas providing healthcare services to underserved communities across Pakistan.',
      thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop',
      type: 'video',
      duration: '6:45',
      views: '78K',
      date: '2024-05-20',
      category: 'Healthcare',
      featured: false
    },
    {
      id: 9,
      title: 'Ramadan Distribution Drive 2024',
      description: 'Special Ramadan food packages and iftar distribution reaching 100,000+ families during the holy month.',
      thumbnail: 'https://images.unsplash.com/photo-1609501676725-7186f08fa40b?w=600&h=400&fit=crop',
      type: 'photo_gallery',
      photos: 68,
      views: '203K',
      date: '2024-03-25',
      category: 'Events',
      featured: false
    }
  ];

  const filteredMedia = mediaItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredItem = mediaItems.find(item => item.featured);
  const regularItems = filteredMedia.filter(item => !item.featured);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'video':
      case 'documentary':
        return Play;
      case 'photo_gallery':
        return Download;
      default:
        return Play;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Media <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive media collection featuring videos, documentaries, 
              photo galleries, and stories showcasing our impact across Pakistan.
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
                  placeholder="Search media content..."
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

        {/* Featured Media */}
        {featuredItem && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Featured Media Thumbnail */}
                <div className="relative group cursor-pointer animate-slideInRight">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={featuredItem.thumbnail}
                      alt={featuredItem.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full 
                                     flex items-center justify-center border-2 border-white/30 
                                     group-hover:scale-110 group-hover:bg-primary/80 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground font-semibold">
                        Featured
                      </Badge>
                    </div>

                    {/* Category & Duration */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-end">
                        <Badge className="bg-primary text-primary-foreground mb-2">
                          {featuredItem.category}
                        </Badge>
                        {featuredItem.duration && (
                          <span className="bg-black/70 text-white text-sm px-2 py-1 rounded">
                            {featuredItem.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Media Details */}
                <div className="space-y-6 animate-slideUp">
                  <div>
                    <Badge className="mb-4 bg-accent text-accent-foreground">
                      Featured Content
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                      {featuredItem.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredItem.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{formatDate(featuredItem.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-5 h-5 text-primary" />
                      <span>{featuredItem.views} views</span>
                    </div>
                    {featuredItem.duration && (
                      <div className="flex items-center space-x-2">
                        <Play className="w-5 h-5 text-primary" />
                        <span>{featuredItem.duration}</span>
                      </div>
                    )}
                  </div>

                  <Button size="lg" className="btn-hero">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Now
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Media Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Media <span className="text-primary">Collection</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Browse our complete collection of videos, documentaries, and photo galleries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularItems.map((item, index) => {
                const MediaIcon = getMediaIcon(item.type);
                return (
                  <div
                    key={item.id}
                    className="group cursor-pointer animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                                  transition-all duration-300 hover:scale-105">
                      
                      {/* Media Thumbnail */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-300"></div>
                        
                        {/* Media Type Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full 
                                         flex items-center justify-center border border-white/30">
                            <MediaIcon className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Duration/Count */}
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs 
                                      px-2 py-1 rounded">
                          {item.type === 'photo_gallery' ? `${item.photos} photos` : item.duration}
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-primary text-primary-foreground text-xs">
                            {item.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Media Info */}
                      <div className="p-6">
                        <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary 
                                     transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(item.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{item.views}</span>
                            </div>
                          </div>
                          
                          <Badge variant="outline" className="text-xs">
                            {item.type.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Load More Content
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want to Stay Updated?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest media updates, 
              stories, and impact reports directly in your inbox.
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

export default Media;