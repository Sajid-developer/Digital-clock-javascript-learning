// Creating digital clock using javascript in-built function //
        
        let clockInterval=setInterval(time,1000);

        // setTimeout(function(){
        // 	clearInterval(dur);
        // },10000);

        function time(){
        	
          let clock= document.getElementById("clock");

          let day = new Date();
          // console.log(day);
          let hour = day.getHours();
          let min = day.getMinutes();
          let sec = day.getSeconds();
		  let meridian="";

		//   console.log(sec);

          if(hour<12 && sec>=0){
			meridian="AM";
          }
		  if(hour<1){
			hour=12;
          }
		  if(hour>12){
			hour=hour-12;
			meridian="PM";
          }
          
          hour=(hour<10) ? "0"+hour : hour;
          min=(min<10) ? "0"+min : min;
          sec=(sec<10) ? "0"+sec : sec;

		  clock.innerHTML=`${hour} : ${min} : ${sec} ${meridian}`;
        }

    // ------------ ------------- --------------- -------------- //


    const fruits = ["apple","orange","grape","guava","pineapple","banana","papaya"];
    
    // Different methods of array.....

   // 1. Length of the array

    console.log("Length of array is : "+fruits.length);

    // 2. Remove element of the array from last

    fruits.pop();
    console.log(fruits);

    // 3. Add element in the array at last

    fruits.push("coconut");
    console.log(fruits);

    // 4. Remove element of the array from start

    fruits.shift();
    console.log(fruits);

    // 5. Add element in the array at start

    fruits.unshift("pear");
    console.log(fruits);

    // 6. Remove element of array by specified index 

    fruits.splice(3,2);
    console.log(fruits);

    // 7. Make new array of characters from a string using split method....
    
    let randFruit=Math.floor(Math.random()*fruits.length);
    let splitWord=fruits[randFruit].split("");
    console.log(splitWord);

    let newWord="";

    for (let i=splitWord.length-1;i>=0;--i) {
    		newWord+=splitWord[i];
    }

     console.log(newWord);

	//  const numbers=[7,9,4,8,12,3,5,23,18,1,6,2,10];

	 function shuffleFruits(){
		let shuffledFruits=fruits.sort((a,b) => 0.5 - Math.random());

		// console.log(descendingNumbers);
		// console.log(ascendingNumbers);
		console.log(shuffledFruits);
	 }

	 shuffleFruits();