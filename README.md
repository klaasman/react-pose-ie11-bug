# react-pose IE 11 bug

## running this project

```
git clone https://github.com/klaasman/react-pose-ie11-bug
cd react-pose-ie11-bug
yarn install
yarn start
```

Wait for the initial build to finish and open [`http://localhost:8000`](http://localhost:8000) in Internet Explorer 11.

## The issue in IE 11
In `/src/App.js` there's a nested Posed component. This nested component will not inherit the pose of its parent.

```js
<ContainerPose pose={somePose}>
  <InnerPose /> {/* <= this `<InnerPose />` will not inherit the pose of the `<ContainerPose />` */}
</ContainerPose>
```


## screen captures

Wrong tween (IE11):  
![right](/gif-wrong.gif)


Right tween:  
![right](/gif-right.gif)
