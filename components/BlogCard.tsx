import { formatDistanceToNow } from 'date-fns'

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <article className="blog-card glass rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold flex-1 hover:text-cyan-400 transition-colors duration-300">
          {blog.title}
        </h3>
        <span className="text-cyan-400 text-sm whitespace-nowrap ml-4">
          {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
        </span>
      </div>

      <p className="text-gray-300 mb-4 line-clamp-2">{blog.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {blog.tags?.split(',').map((tag: string) => (
          <span
            key={tag.trim()}
            className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full"
          >
            {tag.trim()}
          </span>
        ))}
      </div>

      <a
        href={`/blog/${blog.id}`}
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
      >
        Read More →
      </a>
    </article>
  )
}
