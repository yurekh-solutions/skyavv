import { Loader2 } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center mesh-bg-soft">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl vibrant-gradient shadow-lg mb-4 animate-pulse">
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
        <p className="text-sm text-gray-500 font-medium">Loading...</p>
      </div>
    </div>
  );
}
