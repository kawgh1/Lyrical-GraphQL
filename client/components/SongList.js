import React from "react";
// graphql
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function SongList(props) {
    console.log(props);
    return <div>SongList</div>;
}

const query = gql`
    {
        songs {
            title
        }
    }
`;

// This code calls the query function which immediately returns a function and calls it on Songlist
// This bonds our GraphQL Query to our Component just before rendering it to the screen
// the data returned from the GraphQL query is placed inside the Component's props
export default graphql(query)(SongList);
