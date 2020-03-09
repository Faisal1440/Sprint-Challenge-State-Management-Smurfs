1. What problem does the context API help solve?

It allows us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are payloads of information send information or data from my app to my store. the store is known as a 'single source of truth' in a redux application becuase its the ONLY sourse of infomation for the store. 
Reducers tell us exactly how the state changes as a result of actions being sent to the store.the store is the object that combines actions and reducers together. it basicly hold the state of the app. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is the "global" state that all components in the component tree can access.This is the state that your application is in and basically what is being rendered.Component local state is state that is local to a single component and cannot be seen outside of this component. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A thunk is a function that returns another function.It’s a special name for a function that’s returned by another function. If the thing returned is an action, it forwards the action through to the reducer. But, if the thing returned is a function, aka a thunk (a function returned from a function), then it invokes the thunk and passes the dispatch function as an argument to it.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, because its simple, predictable and the most popular state container for react applications.