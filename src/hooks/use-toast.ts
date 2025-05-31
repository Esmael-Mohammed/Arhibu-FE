type ToastOptions = {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function useToast() {
  const toast = (options: ToastOptions) => {
    // Replace this with your toast library or custom implementation
    alert(`${options.title}\n${options.description || ""}`);
  };

  return { toast };
}