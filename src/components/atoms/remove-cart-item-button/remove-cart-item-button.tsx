'use client';

import { useFormStatus } from 'react-dom';

export const RemoveCartItemButton = () => {
  const status = useFormStatus();

  return (
    <button
      className="p-3 text-sm text-gray-700 hover:underline disabled:cursor-wait"
      disabled={status.pending}
      type="submit"
    >
      Remove
    </button>
  );
};
