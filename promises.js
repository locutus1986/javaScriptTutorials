// promises part 1
// example 1

let promise1 = new Promise((resolve, reject)=> {
  // do stuff
  let worked = false;
  if(worked){
    resolve("worked");
  }else{
    reject('didn\'t work');
  }
});

promise1.then((fromResolve)=>{
  console.log("work has been done" + fromResolve);
}).catch((fromReject)=>{
  console.log(fromReject);
});


// example 2
let cleanRoom = ()=>{
  return new Promise((resolve, reject)=>{
    resolve('You\'ve cleaned your Room, ');
  });
};

let removeTrash = (message)=>{
  return new Promise((resolve, reject)=>{
    resolve(message + 'and taken out the trash!! ');
  });
};

let winIcecream = (message)=>{
  return new Promise((resolve, reject)=>{
    resolve(message + 'Well done!! Get your coat'
            + ' and meet me in the car!');
  });
};

// waits until one's done and then starts the next

cleanRoom().then((result)=>{
  return removeTrash(result);
}).then((result)=>{
  return winIcecream(result);
}).then((result)=>{
  console.log(result);
}).catch(()=>{
  console.log("Go to your room and don\'t"
              + " come out until it\'s clean");
});


// everything starts at the same time.

Promise.race([
  cleanRoom(),
  removeTrash(),
  winIcecream()
]).then(()=>{
  console.log('something\'s done');
}).catch(()=>{
  console.log('failure Will Robinson');
});
