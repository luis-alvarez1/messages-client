import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(
      input: { title: $title, content: $content, author: $author }
    ) {
      _id
      title
      content
      author
    }
  }
`;

export const MessageForm = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [createMessage] = useMutation(CREATE_MESSAGE);

  const history = useHistory();

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={ async (e) => {
                e.preventDefault();

                await createMessage({ variables: { title, content, author } });

                history.push("/");
              }}
            >
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Content..."
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>

              <button className="btn btn-primary btn-block">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
