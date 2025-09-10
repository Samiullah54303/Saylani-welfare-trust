import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Eye, ArrowRight } from 'lucide-react';

interface MediaSectionProps {
  onVideoClick: (videoId: string) => void;
}

const MediaSection: React.FC<MediaSectionProps> = ({ onVideoClick }) => {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const mediaUpdates = [
    {
      id: 'video-1',
      title: 'Saylani Children Hospital - Saving Lives Daily',
      description: 'Take a behind-the-scenes look at our state-of-the-art children\'s hospital and meet the dedicated medical team providing world-class healthcare.',
      thumbnail: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
      duration: '5:32',
      views: '125K',
      date: '2024-01-15',
      category: 'Healthcare'
    },
    {
      id: 'video-2',
      title: 'Daily Food Distribution - Feeding Hope',
      description: 'Witness how our daily meal program reaches 50,000+ people across Pakistan, bringing nutrition and hope to families in need.',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      duration: '3:45',
      views: '89K',
      date: '2024-01-10',
      category: 'Food Distribution'
    },
    {
      id: 'video-3',
      title: 'Flood Relief Operations - Immediate Response',
      description: 'Our rapid response teams in action, providing emergency relief and rehabilitation support to flood-affected communities.',
      thumbnail: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
      duration: '7:18',
      views: '67K',
      date: '2024-01-08',
      category: 'Emergency Relief'
    },
    {
      id: 'video-4',
      title: 'Education Program Success Stories',
      description: 'Meet students whose lives have been transformed through our education and IT literacy programs, breaking barriers and building futures.',
      thumbnail: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
      duration: '4:22',
      views: '92K',
      date: '2024-01-05',
      category: 'Education'
    },
    {
      id: 'video-5',
      title: 'Clean Water Initiative - Rural Impact',
      description: 'Discover how our clean water projects are bringing safe drinking water to remote villages across Pakistan.',
      thumbnail: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop',
      duration: '6:15',
      views: '43K',
      date: '2024-01-03',
      category: 'Water Projects'
    },
    {
      id: 'video-6',
      title: 'Volunteer Stories - Hearts in Service',
      description: 'Inspiring stories from our volunteers who dedicate their time and energy to serve humanity with compassion.',
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      duration: '4:08',
      views: '156K',
      date: '2024-01-01',
      category: 'Volunteer Stories'
    }
  ];

  const categories = ['All', 'Healthcare', 'Food Distribution', 'Education', 'Emergency Relief', 'Water Projects', 'Volunteer Stories'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All' 
    ? mediaUpdates 
    : mediaUpdates.filter(video => video.category === selectedCategory);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatViews = (views: string) => {
    return views;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Media <span className="text-primary">Updates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with our latest activities, success stories, and impact through 
            our comprehensive media coverage and documentary features.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
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

        {/* Featured Video */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Featured Video Thumbnail */}
            <div 
              className="relative group cursor-pointer animate-slideInRight"
              onClick={() => onVideoClick(filteredVideos[0].id)}
              onMouseEnter={() => setHoveredVideo(filteredVideos[0].id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={filteredVideos[0].thumbnail}
                  alt={filteredVideos[0].title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full 
                                 flex items-center justify-center border-2 border-white/30 
                                 transition-all duration-300 ${
                    hoveredVideo === filteredVideos[0].id 
                      ? 'scale-110 bg-primary/80' 
                      : 'hover:scale-110 hover:bg-white/30'
                  }`}>
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2 bg-accent text-accent-foreground">
                    {filteredVideos[0].category}
                  </Badge>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {filteredVideos[0].title}
                  </h3>
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(filteredVideos[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{formatViews(filteredVideos[0].views)}</span>
                    </div>
                    <span>{filteredVideos[0].duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Video Details */}
            <div className="space-y-6 animate-slideUp">
              <div>
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  Featured Video
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {filteredVideos[0].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {filteredVideos[0].description}
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{formatDate(filteredVideos[0].date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <span>{formatViews(filteredVideos[0].views)} views</span>
                </div>
              </div>

              <Button
                onClick={() => onVideoClick(filteredVideos[0].id)}
                size="lg"
                className="btn-hero"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </Button>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredVideos.slice(1).map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onVideoClick(video.id)}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                            transition-all duration-300 hover:scale-105">
                
                {/* Video Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full 
                                   flex items-center justify-center border border-white/30">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs 
                                px-2 py-1 rounded">
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      {video.category}
                    </Badge>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h4 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary 
                               transition-colors">
                    {video.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(video.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{formatViews(video.views)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fadeIn">
          <Button 
            onClick={() => onVideoClick('all')}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Media Updates
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;