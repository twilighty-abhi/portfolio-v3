interface PageContent {
  title: string;
  subtitle: string;
  content: string[];
}

interface Content {
  about: PageContent;
}

export const content: Content = {
  about: {
    title: "About",
    subtitle: "How am i living through life?",
    content: [
      `I'm a curious explorer with a passion for building and breaking things. I love to tinker with technology, constantly seeking new challenges and opportunities to learn.`,
      `In my free time, I enjoy diving into various projects, experimenting with new ideas, and sharing my experiences with others. Whether it's coding, designing, or simply exploring new concepts, I'm always eager to embrace the next adventure. Join me on this journey of discovery and creativity!`,
    ]
  }
}; 