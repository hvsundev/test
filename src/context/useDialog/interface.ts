export interface ToastOptions {
  message: string;
  type?: "success" | "error" | "info" | "warning";
}

export interface ConfirmOptions {
  title: string;
  description?: string;
}

export interface DialogContextType {
  showConfirm: (options: ConfirmOptions) => Promise<boolean>;
  showToast: (options: ToastOptions) => void;
}
