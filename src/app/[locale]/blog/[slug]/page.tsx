import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return [];
}

export default function BlogPostPage() {
  // Redirect all blog post requests to the blog listing for now
  redirect('/blog');
}
