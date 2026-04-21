import { redirect } from 'next/navigation'

export default async function ImageSlugToGalleryRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  redirect(`/gallery/${slug}`)
}
