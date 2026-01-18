import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-black">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-6 text-8xl font-extrabold text-brand-lightblue md:text-9xl">
            404
          </h1>
          <p className="mb-4 text-2xl font-bold text-brand-lightblue md:text-3xl">
            页面未找到
          </p>
          <p className="mb-8 text-lg text-brand-lightblue/70">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-lg font-bold text-brand-lightblue transition-opacity hover:opacity-80"
          >
            <Home className="h-5 w-5" />
            返回首页
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
