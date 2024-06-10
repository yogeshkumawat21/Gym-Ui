/* ****gym members****
 */

let members=document.querySelector("#member-increasing");
let memberno=1;
let memberincreasing=setInterval(function () {
  members.innerHTML=memberno;
  memberno++;
  if (memberno==19)
    {
      clearInterval(memberincreasing);
    }
}, 200);


/* ****gym end members****
 */


/* ****partner members****
 */
let partnerIncreasing=document.querySelector("#partner-increasing");
let partnerno=400;
let partnernoIncreasing=setInterval(function () {
  partnerIncreasing.innerHTML=partnerno;
  partnerno++;
  if (partnerno==425)
    {
      clearInterval(partnernoIncreasing);
    }
}, 800);

/* ****partner members end*****/
let coachIncreasing=document.querySelector("#coach-increasing");
let coachno = 80;
let coachnoIncreasing=setInterval(function () {
  coachIncreasing.innerHTML=coachno;
  coachno++;
  if (coachno==100)
    {
      clearInterval(coachnoIncreasing);
    }
}, 100);

/* ****coach members end*****/
/* ****partner members end*****/
let appreciationIncreasing=document.querySelector("#appreciation-increasing");
let appreciationno = 1;
let appreciationnoIncreasing=setInterval(function () {
appreciationIncreasing.innerHTML=appreciationno;
  appreciationno++;
  if (appreciationno==880)
    {
      clearInterval(appreciationnoIncreasing);
    }
}, 20);

/* ****coach members end*****/

