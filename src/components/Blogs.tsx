import { useEffect, useState } from 'react'
  import Blog from "./Blog";
     import post from './Interfaces'

//bajar las props de un componente
//agregar return type
//max guarning - cantidad
//cambiar warning y erros


const Blogs = function(){
const [posts, setPosts] = useState<post[]>([])

        useEffect(() => {fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => setPosts(data))}, [])

  return (<div>
{
posts.map(({ title, body}) => <Blog title={title} body={body}  />)
}
    </div>
  )
}

export default Blogs
