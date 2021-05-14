 
document.querySelector(".control span").onclick = function () {
 
  let Name = prompt("Please Enter your name");
 
  if (Name == null || Name == "") {

 
    document.querySelector(".name span").innerHTML = 'Unknown';
 
  }else if (!isNaN(Name) ){
    document.querySelector(".name span").innerHTML = 'some number NOT a name';   
  }
   else {
 
    document.querySelector(".name span").innerHTML = Name;

  }
 
  document.querySelector(".control").remove();

};
 
let TimeFlip = 500;

 
let Container = document.querySelector(".memory-game");
 
let blocks = Array.from(Container.children);

 

let orderRange = Array.from(Array(blocks.length).keys());

 
Swap(orderRange);
 

 blocks.forEach((block, index) => {

   block.style.order = orderRange[index];

   block.addEventListener('click', function () {

     flipBlock(block);
 });

});

 function flipBlock(select) {

    select.classList.add('flipped');

   let allFlipped = blocks.filter(flippedBlock => flippedBlock.classList.contains('flipped'));

   if (allFlipped.length === 2) {

 
     stopClicking();

     checkMatchedBlocks(allFlipped[0], allFlipped[1]);

  }

}

 function stopClicking() {

   Container.classList.add('no-clicking');

   setTimeout(() => {

     Container.classList.remove('no-clicking');

  }, TimeFlip);

}

 function checkMatchedBlocks(firstBlock, secondBlock) {

  let triesElement = document.querySelector('.tries span');

  if (firstBlock.dataset.techno === secondBlock.dataset.techno) {

    firstBlock.classList.remove('flipped');
    secondBlock.classList.remove('flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

    document.getElementById('success').play();

  } else {

    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    setTimeout(() => {

      firstBlock.classList.remove('flipped');
      secondBlock.classList.remove('flipped');

    }, TimeFlip);

    document.getElementById('fail').play();

  }

}

 function Swap(array) {

   let currentValue = array.length,
      temp,
      random;

  while (currentValue > 0) {

     random = Math.floor(Math.random() * currentValue);

     currentValue--;

     temp = array[currentValue];

     array[currentValue] = array[random];
 
    array[random] = temp;
  }
  return array;
}