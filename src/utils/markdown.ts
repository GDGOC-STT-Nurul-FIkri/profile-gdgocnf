export interface PostMetadata {
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

/**
 * Load semua metadata post dari file JSON.
 */
export const loadPostsMetadata = async (): Promise<
  (PostMetadata & { slug: string })[]
> => {
  try {
    const res = await fetch("/content/posts.json");
    if (!res.ok) {
      console.warn("Gagal fetch posts.json:", res.status);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to load posts metadata:", error);
    return [];
  }
};

/**
 * Load konten lengkap sebuah post berdasarkan slug.
 * Validasi metadata juga dilakukan.
 */
export const loadPost = async (slug: string): Promise<Post | null> => {
  try {
    // Ambil metadata dari posts.json
    const resMeta = await fetch("/content/posts.json");
    if (!resMeta.ok) return null;
    const postsMeta: (PostMetadata & { slug: string })[] = await resMeta.json();

    const metadata = postsMeta.find((p) => p.slug === slug);
    if (!metadata) return null;

    // Ambil isi markdown post berdasarkan slug
    const resContent = await fetch(`/content/posts/${slug}.md`);
    if (!resContent.ok) return null;
    const content = await resContent.text();

    return {
      slug,
      metadata,
      content,
    };
  } catch (error) {
    console.error("Error loading post data:", error);
    return null;
  }
};

/**
 * Load konten halaman About.
 */
export const loadAbout = async (): Promise<string> => {
  try {
    const res = await fetch("/content/about.md");
    if (!res.ok) return "";

    return await res.text();
  } catch (error) {
    console.error("Error loading about.md:", error);
    return "";
  }
};
