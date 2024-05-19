export default async function BlogDetails(
  { params, }: { params: { slug: string } }){
    
    const { slug } = params;
  return (<div className="">this is the { slug}</div>)
  
  }