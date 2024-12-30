'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Custom404 = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 max-w-sm mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <Button 
          onClick={handleReturnHome}
          className="mt-8 inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default Custom404;