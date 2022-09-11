let pythonCount = 0;
let jsCount = 0;
let csharpCount = 0;

function questionOne(text) {
  let answerIndex = 0
  if (text.trim().length ===0){
    return 0;
  }
  const answer1 = ["easy", "versatile"];
  const answer2 = ["middling", "website"];
  const answer3 = ["complex", "operations"];
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(answer1.at(answerIndex).toLowerCase())) {
      pythonCount++;
      answerIndex++; 
    }
    else if (element.toLowerCase().includes(answer2.at(answerIndex).toLowerCase())) {
      jsCount++;
      answerIndex++; 
    }
    else if (element.toLowerCase().includes(answer3.at(answerIndex).toLowerCase())) {
      csharpCount++;
      answerIndex++; 
    }
    
  });
  if (pythonCount > jsCount && pythonCount > csharpCount) {
    return pythonCount;
  }
  else if (jsCount > pythonCount && jsCount > csharpCount) {
    return jsCount;
  }
  else if (csharpCount > pythonCount && csharpCount > jsCount) {
    return csharpCount;
  }
  else {
    return 0;
  }
}