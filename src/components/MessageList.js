import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

export const MessageList = () => {
  const { loading, data, error } = useQuery(GET_MESSAGES);

  console.log(data);
  if (loading) {
    return (
      <div className="alert alert-dark" role="alert">
        Loading...
      </div>
    );
  } else if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error}
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {data.messages.map((message) => {
            return (
              <div className="card m-2" key={message._id}>
                <div className="card-body">
                  <h4>{message.title}</h4>
                  <p>{message.content}</p>
                  <p>-{message.author}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
