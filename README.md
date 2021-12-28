# Lyrical-GraphQL

Starter project from a GraphQL course by Stephen Grider on Udemy.com

# Overview

-   This app is basically a basic website that allows users to submit their own lyrics to songs

-   ![lyrical-graphql-mockup](https://raw.githubusercontent.com/kawgh1/Lyrical-GraphQL/main/diagrams/lyrical-graphql-mockup.png)

# Architecture

-   Webpack server is responsible for taking all the client side React code and shipping it down to the browser
    ![lyrical-graphql-architecture](https://raw.githubusercontent.com/kawgh1/Lyrical-GraphQL/main/diagrams/lyrical-graphql-architecture.png)

# Tools

-   ### Dotenv for hiding environment (MongoDB user access) variables
-   **npm install dotenv**
-   https://appdividend.com/2019/06/06/what-is-process-env-in-node-js-environment-variables-in-node-js/

-   ### GraphQL Dashboard

    -   http://localhost:4000/graphql
    -   Always a great idea to review the auto generated docs of a GraphQL Server by visiting the root URL /graphql
    -   It will display the GraphQL Schema for the application and the available Mutations

        Schema

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

        Mutations

            addSong(title: String): SongType
            addLyricToSong(content: StringsongId: ID): SongType
            likeLyric(id: ID): LyricType
            deleteSong(id: ID): SongType
