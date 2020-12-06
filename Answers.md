1. What problem does the context API help solve?
    When making larger apps, Context API can help accessing state on a global level much easier.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    a. Actions transmit the payload from the application to store
    b. Store is where all application state is stored.
    c. Reducers update state according to what actions dictate.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is usable by all components. Component state is accesible by only the component and its children.
    Component state works good for small apps where state can be passed down easily with props.
    Appplication state is good for larger applications with state nested in different places.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk is a middleware used to do something between our action and the reducer. It allows us to run async processes like an API call.
    action-creators are usable inside of thunk so we can use them inside of the middleware.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    So for Context api has been the easiest to understand. But I may flex this unit before build week because I have been struggling to grasp all the consepts given in this unit.