import React, {useState} from "react";

import axios from  'axios';

export default () => {
    const [content , setContent] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();
     const postId = 6
        await axios.post(`http://localhost:8008/posts/${postId}/comments`, {
            content
        }); 

        setContent('');
    }
   
   return <div>
       
    </div>
}