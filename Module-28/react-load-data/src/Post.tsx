import { use } from "react"
import './Post.css'

export default function Post({ postDataPromise }: { postDataPromise: Promise<any> }) {


    const post = use(postDataPromise);
    return (
        <div className="post-container ">
            <h3>Post Data & Details</h3>

            <div className="post-grid">
                {post.map((p: any) => (
                    <div className="post-card" key={p.id}>
                        <h4>ID: {p.id}</h4>
                        <h4>Title: {p.title}</h4>
                        <p>Body: {p.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}