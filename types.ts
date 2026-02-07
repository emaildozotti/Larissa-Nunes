export interface Testimonial {
  text: string;
  author: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Augment the window object to include AOS
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
    };
  }
}