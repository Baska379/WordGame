export const randomStr = function (): string {
  return (
    (Math.ceil(Math.random() * 10000) * 1000).toString(32) +
    (Math.ceil(Math.random() * 10000) * 1000).toString(32)
  );
};
