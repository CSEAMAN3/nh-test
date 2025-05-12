'use client';

import { useModal } from '@/components/ModalProvider';

export function BookingButton({ className = '' }: { className?: string }) {
  const { open } = useModal();

  return (
    <button
      onClick={open}
      className={`bg-primary-accent text-primary font-bold px-4 py-2 rounded hover:bg-electric-orange hover:text-off-white transition duration-200 ${className}`}
    >
      Book Your First Session
    </button>
  );
}
