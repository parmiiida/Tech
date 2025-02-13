export interface BlogPost {
    title: string;
    category: string;
    image: string;
    date: string; // ISO date string
    paragraph:string ;
  }

  export const blogPosts: BlogPost[] = [
    {
      title: "How we built multi-region support for Linear",
      category: "Craft",
      image: "/purple.jpg",
      date: "2025-02-05",
      paragraph:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
      title: "Rethinking the startup MVP: Building a competitive product",
      category: "Product Building",
      image: "/images/blog2.png",
      date: "2025-01-28",
      paragraph:"lorem"
    },
    {
      title: "Why and how Scale migrated to Linear",
      category: "Linear Community",
      image: "/images/blog3.png",
      date: "2025-01-20",
      paragraph:"lorem"
    },
    {
      title: "A design reset (part I)",
      category: "Craft",
      image: "/images/blog4.png",
      date: "2025-01-15",
      paragraph:"lorem"
    },
    {
      title: "Why and how we do work trials at Linear",
      category: "Company Building",
      image: "/images/blog5.png",
      date: "2025-01-10",
      paragraph:"lorem"
    },
    {
      title: "Why and how we do work trials at Linear",
      category: "Company Building",
      image: "/images/blog5.png",
      date: "2025-01-05",
      paragraph:"lorem"
    },
  ];

  // Add this function below the blogPosts array
  export const getBlogPosts = () => {
    return blogPosts; // Returns static data for now
  };
