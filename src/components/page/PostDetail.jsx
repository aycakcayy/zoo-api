import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function PostDetail(props) {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [params.postId]); 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 offset-3">
            <div className="card mt-2 ">
              <div className="card-body">
                <h1 className="mt-2 ">Detail</h1>
                <hr />
                <p className="card-subtitle mb-2 ">
                  <strong>Data ID: </strong>
                  {data.id}
                </p>
                <p className="card-title">
                  <strong>User ID:</strong> {data.userId}
                </p>
                <p className="card-text">
                  <strong>Title:</strong> {data.title}
                </p>
                <p className="card-text">
                  <strong>Body: </strong>
                  {data.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostDetail;
