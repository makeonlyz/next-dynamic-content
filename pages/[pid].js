import { useRouter } from 'next/router'
const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    const url = `http://www.google.com/${pid}`
  
    return (
      <>
        <h1>Post: {pid}</h1>
        <p>{url}</p>
      </>
    )
  }
  
  export default Post