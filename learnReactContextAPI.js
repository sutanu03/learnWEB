// context API ✅ (like a global variable --> to make things easy for state management)

/*
1. step 1 - create context in UserContext.js
==> 
import React from 'react';

const UserContext = React.createContext();

export default UserContext;


2. step 2 - use a provider to provide data
 wrap app class with provider to access any value inside any app component, we don't have to pass the props, we can directly use objects or data inside any component. doesn't matter how much nested it is.

 3. step 2 - consume the data to use it
*/
