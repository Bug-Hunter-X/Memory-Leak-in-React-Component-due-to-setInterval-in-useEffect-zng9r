# React useEffect setInterval Memory Leak
This repository demonstrates a common React coding error: using `setInterval` within the `useEffect` hook without proper cleanup.  This leads to memory leaks as the interval continues to run even after the component unmounts.

## Bug Description
The `MyComponent` component uses `setInterval` to update a counter every second.  However, it lacks a cleanup function within `useEffect` to clear the interval when the component is unmounted. This causes the interval to persist, leading to a memory leak.

## Solution
The solution involves adding a return function to the `useEffect` hook. This function clears the interval using `clearInterval` when the component unmounts or when the component is updated.

## How to reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.