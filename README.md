# Lyrical-GraphQL

Starter project from a GraphQL course by Stephen Grider on Udemy.com

# Overview

-   This app is basically a basic website that allows users to submit their own lyrics to songs

-   ![lyrical-graphql-mockup](https://raw.githubusercontent.com/kawgh1/Lyrical-GraphQL/main/diagrams/lyrical-graphql-mockup.png)

# Architecture

-   Webpack server is responsible for taking all the client side React code and shipping it down to the browser

    -   ![lyrical-graphql-architecture](https://raw.githubusercontent.com/kawgh1/Lyrical-GraphQL/main/diagrams/lyrical-graphql-architecture.png)

    -   ## Apollo Setup
    -   ![apollo-diagram](https://raw.githubusercontent.com/kawgh1/Lyrical-GraphQL/main/diagrams/apollo-diagram.png)

        -   The **Apollo Store** communicates directly with the GraphQL server and stores data that comes back from it - think of it as a data store that exists on the client side of the application
        -   The **Apollo Store has no idea that our React App exists and doesnt care**, it's totally front-end agnostic and only talks with the **Apollo Provider** that wraps our React App
        -   The **Apollo Provider** is what takes data from the Apollo Store and sends it to our React App on the front end client side - it is the glue layer
        -   Most of the Apollo Setup and Configuration is around the **Apollo Provider**

                index.js

                // GraphQL + Apollo
                import ApolloClient from "apollo-client";
                import { ApolloProvider } from "react-apollo";

                const client = new ApolloClient({});

                const Root = () => {

                return (
                    <ApolloProvider client={client}>
                        <div>Lyrical</div>
                    </ApolloProvider>
                    );
                };

# GraphQL + Apollo + React Strategy

-   1.) Identify data required
-   2.) Write query in GraphiQL Dashboard (for practice) and in component file
-   3.) Bond query + component
-   4.) Access data!

# Tools

-   ### Dotenv for hiding environment (MongoDB user access) variables
-   **npm install dotenv**
-   https://appdividend.com/2019/06/06/what-is-process-env-in-node-js-environment-variables-in-node-js/

-   ### GraphQL Dashboard

    -   http://localhost:4000/graphql
    -   Always a great idea to review the auto generated docs of a GraphQL Server by visiting the root URL /graphql
    -   It will display the GraphQL Schema for the application and the available Mutations

        **Schema**

            songs: [SongType]
            song(id: ID!): SongType
            lyric(id: ID!): LyricType

            SongType

                id: ID
                title: String
                lyrics: [LyricType]

            LyricType

                id: ID
                likes: Int
                content: String
                song: SongType

        **Mutations**

            addSong(title: String): SongType
            addLyricToSong(content: StringsongId: ID): SongType
            likeLyric(id: ID): LyricType
            deleteSong(id: ID): SongType
