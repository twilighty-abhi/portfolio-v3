interface Book {
  title: string;
  author: string;
  description: string;
  link?: string;
  category: string;
  yearRead?: number;
  coverImage: string;
}
// Any category newly typed will be created. 
export const books: Book[] = [
  {
    title: "Portfolio website",
    author: "Abhiram NJ",
    description: "Few word on how the book is.",
    category: "any category",
    link: "https://abhiramnj.com",
    coverImage: "/portfolio.png"
  }
];

export const categories = Array.from(new Set(books.map(book => book.category))); 