import { useRouter } from 'next/router'
import axios from 'axios';

//97409

function Page({ data }) {
    return (
       <> 
            <h1>{data.id}</h1>
            <p>{data.title['rendered']}</p>
            <p>{data.content['rendered']}</p>
       </>
    );
}



export async function getServerSideProps({params}) {
    const pid = params.pid
    const res = await fetch(`https://lolitopia.com/?rest_route=/wp/v2/posts/${pid}`)
    const data = await res.json()

    return {
      props: { data },
    }
}
export default Page


