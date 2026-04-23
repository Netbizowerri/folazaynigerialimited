import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from '@phosphor-icons/react';
import { formatDate } from '../../utils/formatDate';

interface BlogCardProps {
  post: any;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={post.featuredImage || 'https://picsum.photos/seed/folio/800/600'} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-[#DDAF2D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {post.category || 'General'}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-[#6B7280] mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {formatDate(post.publishedAt || post.createdAt)}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} /> {post.author || 'Folazay Admin'}
          </span>
        </div>
        
        <h3 className="font-heading text-xl font-bold mb-3 text-[#1C1C1C] group-hover:text-[#1A5086] line-clamp-2 transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-sm text-[#6B7280] line-clamp-3 mb-6 flex-grow">
          {post.metaDescription || 'Read more about this insightful topic from Folazay Nigeria Limited.'}
        </p>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="flex items-center text-[#1A5086] font-bold gap-2 group-hover:gap-3 transition-all duration-300 mt-auto"
        >
          Read More <ArrowRight weight="bold" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
