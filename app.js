 //initalizing some value
 let totalAttempts = 5
 let attempts =0
 let totalWons =0
 let totalLosts =0
//  finding element
const form = document.getElementById('form')
const cardBody = document.getElementById('card-body')
const inputField = document.getElementById('gussingnumber')
const button = document.getElementById('check')
const paragraph = document.getElementById('paragraph')
const paragraph2 = document.getElementById('paragraph2')
const lostWonsMassage = document.createElement('p')

 form.addEventListener('submit', function(){
     event.preventDefault()
    //  console.log(inputField.value)
      attempts++
       if(attempts===5){
        inputField.disabled =true
         button.disabled =true
       }
       if(attempts<6){
           let guessNumber = Number(inputField.value)
        checkResult(guessNumber)
        paragraph2.innerHTML = `Remaining Attempts : ${totalAttempts - attempts}`
       }
       inputField.value =''
 })

  function checkResult(guesssingNumber){
    //  console.log(guesssingNumber)
     const randomNumber = getRandomNumber(5)
    //  console.log(randomNumber)
      if(guesssingNumber === randomNumber){
       paragraph.innerHTML = ` You have won`
       totalWons++
      }
      else{
          paragraph.innerHTML = `You have lost; Number was: ${randomNumber}`
          totalLosts++
      }
       lostWonsMassage.innerHTML =`Won : ${totalWons} Lost : ${totalLosts}`
       lostWonsMassage.classList.add('large-text')
       cardBody.appendChild(lostWonsMassage)
  }
  function getRandomNumber (limit){
      return Math.floor(Math.random() * limit + 1)
  }