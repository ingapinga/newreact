import React, {useState, useRef} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript [ebgn 1', body: 'Description'},
        {id: 2, title: 'Javascript [ebgn 2', body: 'Description'},
        {id: 3, title: 'Javascript [ebgn 3', body: 'Description'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">

        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <select>
                <option value="val1">По названию</option>
                <option value="val2">По описанию</option>
            </select>
        </div>
        {posts.length !== 0
            ? <PostList remove={removePost} posts={posts} title="Список сосисок"/>
            : <h1 style={{textAlign:'center'}}>нет постов</h1>
        }


    </div>
  );
}

export default App;


//()  !

{/*
    <h2>{val}</h2>
      <input
          type='text'
          value={val}
          onChange={event => setVal(event.target.value)}

      />
      <ClassCounter/>
      <PostItem post={{id: 14, title: 'Javascript', body: 'Description'}}/>
*/}
{/*        Неуправляемый компонент
        const bodyInputRef = useRef();
        <MyInput
            type="text"
            placeholder="Описание треша"
            ref={bodyInputRef}
        />*/}