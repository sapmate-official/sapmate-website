export interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface VisibilityState {
    stats?: boolean;
    about?: boolean;
    contact?: boolean;
    [key: string]: boolean | undefined;
}
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }