# DynamicTable

## Below are homework questions:


### a. Virtual DOM vs real DOM, what is diffing algorithm and reconciliation, why does React use virtual DOM

**Answer:** The diffing algorithm of React is called reconciliation, its purpose is to find the differences between two virtual DOM tree. When the state of a component changes, diffing algorithm will calculate the minimum updates that required by the real DOM. By using virtual DOM, React can bring improved performance by using reconciliation instead of manipulate real DOM directly.

### b. React lifecycle methods, 3 stages, how and why do we use them

**Answer:** The 3 stages are: mounting, updating, unmounting. **

The lifecycle methods of **mounting** stage are:
1. constructor(): this is called before mounting a component and is used to initialize the state and bind class method to instances.
2. componentDidMount():  this method is called when the component is first added to the screen and we can perform fetching data, manipulating DOM node inside this method.
3. render(): this method is to render the returned JSX to the DOM.

The lifecycle methods of **updating** stage are:
1. shouldComponentUpdate(): this method will be called when props and state change, if this method returns true, the component will be re-rendered.
2. render(): if shouldComponentUpdate() returns true, render() will be called.
3. componentDidUpdate(): this method will be called after the component is re-rendered, we can perform tasks to manipulate the DOM with updated props and state.

The lifecycle methods of **unmounting** stage are:
1. componentWillUnmount(): this method will be called before the component is removed from the DOM, usually we use it to cancel data fetching and remove subscriptions.

### c. The purpose of using the key attribute when we use map in JSX

**Answer:** Key is an unique identifier that React uses to keep track of list of elements, React use keys to tell which element should be updated, removed, added or stay still, it also help to minimize the number of DOM operations.

### d. Ways of triggering component update

**Answer:** 
1. Props and state change: when recieve new props or state changes, an update will be triggered.
2. Use shouldComponentUpdate() lifecycle method inside class component.
3. Use useEffect() hook inside functional component.


### e. What is HOC and higher order function?

**Answer:**
1. HOC: HOC takes an component as argument, and returns a new component. By using HOCs, we can reuse logics of components, and keep our code DRY.
2. Higher-order function: higher-order function takes a function as argument or returns a new function, or both.

### f. What/why custom hooks?

**Answer:** Custom hooks are functions defined by ourselves like the build-in hooks, by defining custom hooks we can extract reusable logics from components to improve the reusability and separation of concerns of our code.

### g. What is the “children” props?

**Answer:** childern prop is a set of JSX elements or components inside a component.

### h. what/why React.memo, useMemo, useCallback

**Answer:** 
1. React.memo: this is a HOC defined by React, this is usedtyo wrap a component in memo to get a memoized version of that component. This can help us to skip re-rendering a component when its props are unchanged.
2. useMemo: this is a hook in React, we can use it to memoize the result of a function so that it only re-computes when its dependencies change.
3. useCallback: this is a hook in React that allows you to memoize (or cache) the creation of a function itself, so that the function is only recreated when its dependencies change. This can be useful for optimizing performance in situations where you have callback functions that depend on specific input values and need to maintain referential equality.