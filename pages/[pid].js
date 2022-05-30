function Page({ data }) {
    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.id}</p>
        </>
    );
}
export async function getServerSideProps({params}) {
    const pid = params.pid
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${pid}`)
    const data = await res.json()

    return {
      props: { data },
    }
}
export default Page