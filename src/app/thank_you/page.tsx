'use client';
import { useAtom } from 'jotai';
import { customeratom } from '@/hooks/Atom';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ThankYouPage = () => {
  const [customer] = useAtom(customeratom);
  const router = useRouter();

  const handlePhoneClick = () => {
    window.location.href = "tel:+919830334496";
  };

  const handleReturnHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Thank you, {customer.name}!</h1>
      <p className="text-lg mb-6">
        We&apos;ve received your message. We&apos;ll be in touch with you at {customer.email} shortly.
      </p>
      <div className="text-lg flex mb-6">
        You can also reach us at <p onClick={handlePhoneClick} className='hover:text-blue-500 hover:border-blue-500 border-b-2 ml-1 cursor-pointer'>+91 9830334496</p>.
      </div>
      <Button 
        onClick={handleReturnHome}
        className="inline-flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Return Home
      </Button>
    </div>
  );
};

export default ThankYouPage;