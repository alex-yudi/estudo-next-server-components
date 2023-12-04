type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export default async function BlogPost() {
    const postData = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const postDataJson: Post = await postData.json()

    console.log('Rendered on server --- BlogPost.tsx')
    return (
        <div>
            <h1>
                {postDataJson.title}
            </h1>

            <p>
                {postDataJson.body}
            </p>

        </div>

    )

}