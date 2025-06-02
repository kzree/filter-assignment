import clsx from 'clsx';

export const Input = (
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
) => {
  return (
    <input
      className={clsx(
        'border rounded transition-all px-3 h-10',
        'border-gray-300 hover:border-gray-500 active:border-gray-500',
      )}
      {...props}
    />
  );
};
