import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen bg-cover bg-center w-full bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg)] flex flex-col justify-between text-black">
      <div className="px-6 pt-6">
        <img src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="Uber Logo" className="w-36 max-w-full h-auto" />
      </div>

      <div className="flex-1"></div>

      <div className="p-6 bg-white rounded-t-2xl shadow-md w-full max-w-md mx-auto">
        <h2 className="text-lg font-medium mb-4">Get started with Uber</h2>
        <Link to="/user-login" className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-2">
          Continue
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
