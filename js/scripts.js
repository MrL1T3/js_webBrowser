let pythonCount = 0;
let jsCount = 0;
let csharpCount = 0;

function questionOne(text) {
  if (text.trim().length ===0){
    return 0;
  }
  const answer1 = "easy";
  const answer2 = "middling";
  const answer3 = "complex";
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(answer1.toLowerCase())) {
      pythonCount++;
    }
    else if (element.toLowerCase().includes(answer2.toLowerCase())) {
      jsCount++;
    }
    else if (element.toLowerCase().includes(answer3.toLowerCase())) {
      csharpCount++;
    }
  });
  if (pythonCount === 1) {
    return pythonCount;
  }
  else if (jsCount > pythonCount && jsCount > csharpCount) {
    return jsCount;
  }
  else {
    return csharpCount;
  }
}


function questionTwo(text) {
  if (text.trim().length ===0){
    return 0;
  }
  const answer1 = "versatile";
  const answer2 = "web based";
  const answer3 = "operations";
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(answer1.toLowerCase())) {
      pythonCount++;
    }
    else if (element.toLowerCase().includes(answer2.toLowerCase())) {
      jsCount++;
    }
    else if (element.toLowerCase().includes(answer3.toLowerCase())) {
      csharpCount++;
    }
  });
  if (pythonCount === 1) {
    return pythonCount;
  }
  else if (jsCount > pythonCount && jsCount > csharpCount) {
    return jsCount;
  }
  else {
    return csharpCount;
  }
}