# API - CHAINING

A React-based API Testing Field built with Vite. This application allows you to interact with multiple APIs, chain requests, and visualize request/response data in a user-friendly interface.
Setup Instructions

  * Clone the repository
  *Install dependencies: Make sure you have Node.js installed on your machine.

          npm install

  * Start Application

          npm run dev

   # Brief Explanation of the Approach

  This project provides a UI to test and visualize API requests/responses. The main features include:
    
  * API Chaining: Users can trigger API calls in sequence, with real-time feedback on requests and responses.
  * Editable Requests: Users can edit requests before they are sent, with a modal for selecting userId during post creation.
  * State Management: React's useState and useEffect are used to manage API calls, loading states, and error handling.
    
   # Assumptions and Decisions Made
    
  * User Selection: For the Create Post and Get Comments by Post ID functionalities, users must first select a userId fetched from the getUsers API.
  *  Modal for User Selection: When editing the request body for Create Post, a modal pops up showing all users from the getUsers API. The selected userId is then passed in the createPost request.
  *  Chaining Flexibility: The user is allowed to modify the request and make another API call in the sequence, supporting flexible API testing.
    
   # Completed Features
    
  * Responsive UI: A clean and intuitive interface using React and Tailwind CSS.
  * API Implementation: Functional APIs for:
            Fetching users (getUsers)
            Creating posts (createPost)
            Fetching comments by Post ID (getCommentsByPostId)
  * Editable Requests: Users can edit requests accesing response of other APIs before sending them, with real-time updates in the request/response fields.
    
   # Known Issues
    
  * API Chaining Visualization: While functional, the visualization of the API chaining process can be improved for a smoother user experience.
  * Request Editing: The current modal only allows the selection for certain fields . Other fields remain static and require manual editing.
