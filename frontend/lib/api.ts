import axios from "axios";

/**
 * Backend base URL
 * Example: http://localhost:5000/api
 */
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

/* ================= TYPES ================= */

export interface Quote {
  id?: number | string;
  quote: string;
  author?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

/* ================= APIS ================= */

export const quotesApi = {
  getRandomQuote: async (): Promise<Quote> => {
    try {
      const response = await axios.get<Quote>(
        "https://quoteslate.vercel.app/api/quotes/random"
      );
      return response.data;
    } catch (error) {
      console.error("Quote API failed, using fallback", error);

      const fallbacks: Quote[] = [
        {
          quote: "Believe you can and you're halfway there.",
          author: "Theodore Roosevelt",
        },
        {
          quote: "The only way to do great work is to love what you do.",
          author: "Steve Jobs",
        },
        {
          quote:
            "Every day may not be good, but there is something good in every day.",
          author: "Alice Morse Earle",
        },
      ];

      return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
  },
};

export const contactApi = {
  submitContactForm: async (
    data: ContactFormData
  ): Promise<ContactResponse> => {
    const response = await apiClient.post<ContactResponse>("/contact", data);
    return response.data;
  },
};

/* ================= EXPORTS ================= */

export { apiClient };
export { API_BASE_URL };
