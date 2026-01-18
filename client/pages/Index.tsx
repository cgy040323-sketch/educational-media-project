import Header from "@/components/Header";
import PhotoCarousel from "@/components/PhotoCarousel";
import EducationalCases from "@/components/EducationalCases";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Header />
      <main>
        <PhotoCarousel />
        <EducationalCases />
      </main>
    </div>
  );
}
