1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

all can be used in javascript to mark and change HTML elements. getElementById is used to touch html element by its id name. getElementsByClassName is used to generate html list by class name. queryselector selects the first match based on given css selector. querySelectorAll selects all matches but return a collection.

2. How do you create and insert a new element into the DOM?

.createElement() and then appendChild()

3. What is Event Bubbling and how does it work?

event bubbling is how an event travels up the HTML tree. the event first happens on the clicked element. then goes up to its parent and goes all the way to the top.

4. What is Event Delegation in JavaScript? Why is it useful?

Its a technique where instead of putting many event listeners on child elements, we put a single on their parent. And the parent captures events on child elements. this increases performance because we are only using one event listener instead of many.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser from doing default things like submitting form. stopPropagation() stops an event from going up the DOM tree. which makes the parent element unable to detect.
