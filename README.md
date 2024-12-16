# Film Organizer Improvement Project

This project is a React-based application for creating and sharing movie lists. The project was started by another developer and is currently incomplete. Your task is to finalize the application to match the technical requirements specified below.

## Overview

The application allows users to:
- Search for movies using the OMDb API.
- Add selected movies to a list.
- Remove movies from the list.
- Save the movie list to the server.
- Share the saved list via a unique link.
- View shared lists, with links to each movie's IMDB page.

## Installation

1. Fork this repository to your GitHub account.
2. Clone the forked repository:
   ```bash
   git clone <your-forked-repo-url>
   ```
3. Navigate to the project directory:
   ```bash
   cd bootcamp-m4-starter
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Obtain an OMDb API key from [OMDb API](http://www.omdbapi.com/apikey.aspx) and set it in the project environment.

## Features

1. **Search Movies**
   - Users can search for movies by title using the OMDb API.
   - API Endpoint: `http://www.omdbapi.com/?s=<movie-title>&apikey=<your-api-key>`.

2. **Manage Movie List**
   - Add movies to the selected list.
   - Prevent duplicate movies in the list.
   - Remove movies from the list.
   - Edit the name of the movie list.

3. **Save Movie List**
   - Save the list to the server using the following API:
     - Endpoint: `https://acb-api.algoritmika.org/api/movies/list`
     - Method: POST
     - Body:
       ```json
       {
         "title": "List Name",
         "movies": ["tt1234567", "tt7654321"]
       }
       ```
     - Response:
       ```json
       {
         "id": "unique-list-id",
         "title": "List Name",
         "movies": ["tt1234567", "tt7654321"]
       }
       ```

4. **Share and View Lists**
   - Generate a unique link for the saved list (e.g., `http://localhost:3000/list/<id>`).
   - View the list and its associated movies.
   - Each movie includes a link to its IMDB page.

## Technical Requirements

- The project must use React.
- Mobile-friendly design.

### API Endpoints

1. Search Movies:
   ```http
   GET http://www.omdbapi.com/?s=<title>&apikey=<api-key>
   ```
2. Fetch Movie Details:
   ```http
   GET http://www.omdbapi.com/?i=<imdbID>&apikey=<api-key>
   ```
3. Save Movie List:
   ```http
   POST https://acb-api.algoritmika.org/api/movies/list
   Content-Type: application/json

   Body:
   {
       "title": "My Movie List",
       "movies": ["tt1234567", "tt7654321"]
   }
   ```
4. Fetch Saved List:
   ```http
   GET https://acb-api.algoritmika.org/api/movies/list/<id>
   ```

## Checklist

| Requirement                                      | Completed |
|--------------------------------------------------|-----------|
| Initial state: page loads with empty search and selected movie list, default list name is "New List". | [ ] |
| Search for "Godfather" and display results.      | [ ] |
| Add three movies to the selected list.           | [ ] |
| Prevent duplicate movies from being added.       | [ ] |
| Remove a movie from the selected list.           | [ ] |
| Rename the movie list to "My List".              | [ ] |
| Save the list and generate a unique link.        | [ ] |
| View the saved list via the unique link.         | [ ] |
| Each movie links to its IMDB page.               | [ ] |

## Presentation Requirements

Prepare to discuss:
1. Initial state of the project.
2. Challenges encountered and how they were resolved.
3. Problems faced during development and their solutions.

## Deployment

1. Ensure the application is responsive and mobile-friendly.
2. Deploy the final version to a hosting platform of your choice (e.g., Netlify, Vercel).
3. Share the deployed application link.

## Useful Links

- [OMDb API Documentation](http://www.omdbapi.com/)
- [Project Sample](http://mustsee-bootcamp-sample.s3-website.eu-west-3.amazonaws.com/)

