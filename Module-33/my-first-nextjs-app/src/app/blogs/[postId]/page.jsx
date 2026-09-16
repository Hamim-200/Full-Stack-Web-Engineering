const blogsData = [
    {
        id: 1,
        title: "Getting Started with React",
        author: "Hamim Ahmed",
        date: "September 10, 2026",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        description:
            "Learn the basics of React, including components, props, state, and how to build your first React application.",
    },
    {
        id: 2,
        title: "Why TypeScript is Important for Modern Development",
        author: "Hamim Ahmed",
        date: "September 8, 2026",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
        description:
            "Discover how TypeScript improves JavaScript development with static typing, better tooling, and improved code quality.",
    },
    {
        id: 3,
        title: "Understanding REST APIs",
        author: "Hamim Ahmed",
        date: "September 5, 2026",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
        description:
            "A beginner-friendly introduction to REST APIs, HTTP methods, endpoints, requests, responses, and JSON data.",
    },
    {
        id: 4,
        title: "Building Better Projects as a Beginner Developer",
        author: "Hamim Ahmed",
        date: "September 2, 2026",
        category: "Career",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        description:
            "Explore practical tips for choosing projects, organizing your code, solving problems, and improving your development skills.",
    },
    {
        id: 5,
        title: "Frontend Development Roadmap for Beginners",
        author: "Hamim Ahmed",
        date: "August 28, 2026",
        category: "Learning",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        description:
            "A simple roadmap covering HTML, CSS, JavaScript, React, Git, APIs, and other essential skills for becoming a frontend developer.",
    },
];

const PostDetailPage = async ({ params }) => {

    const { postId } = await params;
    const post = blogsData.find(post => post.id === parseInt(postId));


    return (
        <div>
            <h2>Post Details Page: {postId}</h2>

            {
                post && <div>
                    <h3>{post.title}</h3>
                    <p>By {post.author}</p>
                    <p>{post.description}</p>
                </div>
            }
        </div>
    );
};

export default PostDetailPage;