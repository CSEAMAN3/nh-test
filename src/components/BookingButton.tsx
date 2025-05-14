'use client';

import { useModal } from '@/components/ModalProvider';

export function BookingButton({ className = '' }: { className?: string }) {
  const { open } = useModal();

  return (
    <button
      onClick={open}
      className={`font-bold rounded transition duration-200 cursor-pointer ${className}`}
    >
      Book Your First Session
    </button>
  );
}
