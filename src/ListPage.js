import Post from "./Post"

//provide list of all results of searches
const ListPage = ({ searchResults }) => {

    const results = searchResults.map(post => <Post key={post.id} post={post} />)

    const content = results?.length ? results : <article><p>No Matching Alert Posts</p></article>

    return (
        <main>{content}</main>
    )
}
export default ListPage