export async function GET() {
    const res = await fetch('http://127.0.0.1:1337/api/posts?populate=*');
    return res;
}
