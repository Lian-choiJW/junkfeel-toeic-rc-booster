import { AdPlaceholder } from "@/components/AdPlaceholder";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[1fr_280px]">
      <div>
        <h1 className="text-3xl font-black text-ink">RC 학습 블로그</h1>
        <p className="mt-2 leading-7 text-slate-600">네이버 블로그 유입 글의 웹앱 내부 샘플입니다.</p>
        <div className="mt-6 grid gap-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} title={post.title} excerpt={post.excerpt} body={post.body} />
          ))}
        </div>
      </div>
      <div className="grid content-start gap-4">
        <AdPlaceholder label="Blog Side Ad Placeholder" />
        <AdPlaceholder label="Ad Placeholder" />
      </div>
    </section>
  );
}
