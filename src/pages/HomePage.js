import { useEffect, useState ,useRef} from "react";
import { PostCard } from "../components";
import { db } from "../firebase/config";
import { collection,getDocs } from "firebase/firestore";
import { useTitle } from "../hooks/useTitle";
import { SkeletonCard } from "../components";

export const HomePage = () => {


useTitle("Home");
const [toggle,setToggle]=useState(false);
  const [posts,setPosts]=useState(new Array(2).fill(false));
  const postsRef=useRef(collection(db,"posts"));
   
  
  useEffect(()=>{
    async function getPosts(){
      const data=await getDocs(postsRef.current);
      setPosts(data.docs.map((document)=>({...document.data(),id:document.id})))
      // console.log(data.docs)
    }
    // console.log("-----")
    
    getPosts();

  },[postsRef,toggle])


  // const posts = [
  //   { id:1,
  //     title: "lorem ipsum",
  //     description: "lorem10 lorem10lorem10lorem10lorem10lorem10lorem10lorem10",
  //     author:"Ashish",
  //   },
  //   { id:2,
  //     title: "lorem ipsum lorem 20",
  //     description: "lorem10 lorem10loorem10lorem10lorem10lorem10",
  //     author:"daniel",
  //   },
  // ];

  return (
    <section>
      {
        posts.map((post,index)=>(
          post?(<PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />)
          :
          (
           <SkeletonCard key={index} />
          )
          
        ))
      }
      
    </section>
  );
};
