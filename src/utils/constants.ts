import { ToastOptions, toast } from "react-toastify";

interface Configuration extends ToastOptions<{}> {
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  autoClose: number;
  theme: "light" | "dark";
}

export const _apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const _clientSecret = process.env.NEXT_PUBLIC_SECRET;

export const phoneRegExp = /^[1-9]\d{9}$/;
export const yearRegExp = /^(20|20)\d{2}$/;
export const salleEmailRegExp = /^[A-Za-z0-9._%+-]+@.*?ulsaoaxaca\.edu\.mx$/;

export const notify = (action: string, message: string) => {
  const configuration: Configuration = {
    position: "top-right",
    autoClose: 1500,
    theme: "light",
  };

  action === "success"
    ? toast.success(message, configuration)
    : toast.error(message, configuration);
};
