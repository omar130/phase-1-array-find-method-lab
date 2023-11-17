// code your solution here

function superbowlWin(myarray){
  let foundWin = myarray.find((recordObject) => {
    if (recordObject.result === "W"){
      return recordObject
  }
  } )
  if (foundWin === undefined){
    return undefined
  } else {
return foundWin.year
  }
}


