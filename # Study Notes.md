# Study Notes

## Welcome

this is my personal notes about this project and the topics covered feel free to read through them for your own learning path, i'd try to note things in a way that makes sense globally but i can't make no promises as im going at a fast pace.

these notes also skip over my initail topics from before.

## Notes:

### General

we can't do any type of dom changes because it will change how react will interact with states. this includes styles.

**useState()**

if we want to use this we need to return the elements as new elements and we need to use an updater function (t) => {return adjusted values}, only time this changes is with any resets

if we have an array of objects we can't adjust any of the objects in place but what we can do is return a new element to replace it

``` 
setTasks((t) =>
    t.map((element) => {
    // t = whole arr, element = current index
    if (element.name === currentTask.name) {
        return {...element, isDone : !element.isDone}; takes the targetted item and returns a copy with our adjustment
    }
    return element; // keeps untargetted elements 
    })
);
```
