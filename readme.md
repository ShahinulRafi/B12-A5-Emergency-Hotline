1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    getElementById(id): Returns one element with the given ID.

    getElementsByClassName(class): Returns a live HTMLCollection of all elements with that class.

    querySelector(selector): Returns the first match for a CSS selector.

    querySelectorAll(selector) → Returns a static NodeList of all matches.

2. How do you create and insert a new element into the DOM?

    let newDiv = document.createElement("div");  
    newDiv.textContent = "Hello!";  
    document.body.appendChild(newDiv);  


3. What is Event Bubbling and how does it work?
    The proce of Events moving from the target element up through its parents is called Event Bubbling (child → parent → document).

4. What is Event Delegation in JavaScript? Why is it useful?
    Event Delegation is attaching an event listener to a common parent instead of each child. It is useful for handling events on dynamically added elements efficiently.

5. What is the difference between preventDefault() and stopPropagation() methods?

    preventDefault() → Stops the default action (e.g., form submission, link navigation).

    stopPropagation() → Stops the event from bubbling up to parent elements.
