import React from 'react'


export default function About(){
  return (
    <div>
      <h1>
        Hey There, I am testing out the About page..
        <p/>
        This will be my objectives to finish the project
      </h1>
      <h3>
      For this project, you must:
        <p/>
          - create and read actions for both models
        <p/>
          - full CRUD capability for one of the models
          <p/>
        - Build a separate React frontend application that interacts with the API to
          perform CRUD actions.
          <p/>
        - Implement proper front end state management. You should be updating state using a
          setState function after receiving your response from a POST, PATCH, or DELETE 
          request. You should NOT be relying on a GET request to update state. 
          <p/>
        - Use good OO design patterns. You should have separate classes for each of your
          models, and create instance and class methods as necessary. 
          <p/>
        - Routes in your application (both client side and back end) should follow RESTful
          conventions.
          <p/>
        - Use your back end optimally. Pass JSON for related associations to the front 
          end from the back end. You should use active record methods in your controller to grab
          the needed data from your database and provide as JSON to the front end. You
          should NOT be relying on filtering front end state or a separate fetch request to
          retrieve related data.
      </h3>
    </div>
    
  )
}

