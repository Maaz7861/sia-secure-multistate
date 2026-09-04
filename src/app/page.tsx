import LandingPageSkeleton from "@/components/LandingPageSkeleton";
import ComingSoonOverlay from "@/components/ComingSoonOverlay";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#021a19]">
      {/* Full-Length Scrollable Landing Page Skeleton in Background */}
      <LandingPageSkeleton />

      {/* Fixed Centered Floating Coming Soon Overlay with Animated Logo */}
      <ComingSoonOverlay />
    </main>
  );
}
