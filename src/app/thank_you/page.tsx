'use client';
import { useAtom } from 'jotai';
import { customeratom } from '@/hooks/Atom';

const ThankYouPage = () => {
  const [customer] = useAtom(customeratom);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Thank you, {customer.name}!</h1>
      <p className="text-lg mb-6">
        We&apos;ve received your message. We&apos;ll be in touch with you at {customer.email} shortly.
      </p>
      <p className="text-lg">
        You can also reach us at {customer.phone}.
      </p>
    </div>
  );
};

export default ThankYouPage;