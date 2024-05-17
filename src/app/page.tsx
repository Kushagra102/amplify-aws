import Post from "@/components/Post";
import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import { onDeletePost } from "./_actions/actions";

export default async function Home() {

  const { data: posts } = await cookieBasedClient.models.Post.list({
    selectionSet: ['id', 'title'],
    authMode: 'apiKey'
  })

  console.log("posts", posts)

  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-2xl pb-10">List Of All Titles</h1>
      {posts?.map(async (post, idx) => (
        <Post 
          key={idx}
          post={post}
          onDelete={onDeletePost}
          isSignedIn={await isAuthenticated()}
        />
      ))}
    </main>
  );
}
