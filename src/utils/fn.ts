import toast from "react-hot-toast"

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const notify = (msg: string, type: 'success' | 'error') => {
  toast[type](msg, { position: 'top-right' })
}

export const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

export const throttle = (callback: (...args: any) => void, delay = 1000) => {
  let shouldWait = false;

  return (...args: any) => {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}