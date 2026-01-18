import Header from "./Header";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen w-full bg-black">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-brand-lightblue md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-brand-lightblue/70 md:text-xl">
            {description || "此页面内容正在开发中"}
          </p>
          <p className="mb-8 text-base text-brand-lightblue/50">
            This page content is under development
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-lg font-bold text-brand-lightblue transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-5 w-5" />
            返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}
