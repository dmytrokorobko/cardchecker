// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

//Added some card numbers myself
const mymystery6 = [6, 7, 6, 1, 3, 1, 6, 8, 5, 1, 2, 9, 8, 9, 3, 1]

// An array of all the arrays above
const batch = [mymystery6, valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
//Task 3 - function has been divided into two functions due to the solution of task 7-2 below
const validateCred = arr => {   
   return validateCredCalc(arr) === 0 ? true : false;
}

const validateCredCalc = arr => {
   let total = 0;
   let isDouble = false;

   for (let i = arr.length - 1; i >= 0; i--) {
      if (!isDouble) {         
         total += arr[i];
         isDouble = true;
      } else {         
         let temp = arr[i] * 2;
         if (temp > 9) temp -= 9;
         total += temp;
         isDouble = false;
      }
   }

   return total % 10;
}

function showAllValidatedCards(cards) {
   const vals = [];
   cards.forEach(card => {
      const str = card.join('') + ' ' + validateCred(card);
      vals.push(str);
   });
   return vals;
}

//Task 4
const findInvalidCards = allCards => {
   const invalidCards = [];
   allCards.forEach(card => {
      if (!validateCred(card)) invalidCards.push(card);      
   });
   return invalidCards;
}

//Task 5
const idInvalidCardCompanies = invalidCards => {
   const companies = [];
   const amex = 'Amex (American Express)';
   const visa = 'Visa';
   const master = 'Mastercard';
   const disc = 'Discover';
   const reg = 'Company not found';

   invalidCards.forEach(card => {
      if (card[0] === 3 && companies.indexOf(amex) === -1) companies.push(amex);
      else if (card[0] === 4 && companies.indexOf(visa) === -1) companies.push(visa);
      else if (card[0] === 5 && companies.indexOf(master) === -1) companies.push(master);
      else if (card[0] === 6 && companies.indexOf(disc) === -1) companies.push(disc);
      else if (companies.indexOf(reg) === -1) companies.push(reg);
   });
   return companies;
}


//Task 7-1 Converting Strings to Numbered Array
//Convert one string to number
const convertStringToCardNumber = cardString => {
   if (!cardString && cardNum.length < 1) return console.log('Uncorrect string');
   return Array.from(cardString, num => Number(num));
}

//Convert array of strings to array of numbers
const convertStringsToCardNumbers = cardStrings => {
   const cards = [];
   cardStrings.forEach(string => {
      const check = convertStringToCardNumber(string);
      if (check !== 'Uncorrect string') cards.push(check);
   });
   return cards;
}


//Task 7-2 Convert Invalid cards into Valid
const convertInvalidToValid = cards => {
   cards.forEach(card => {
      const rem = validateCredCalc(card);
      if (rem != 0) {
         if (card[card.length - 1] >= rem) card[card.length - 1] = card[card.length - 1] - rem;
         else card[card.length - 1] = 10 - rem + card[card.length - 1];
      }      
   });
   return cards;
}


//Tests
//Task 3 - validateCred function
console.log('Task 3');
console.log(showAllValidatedCards(batch));

//Task 4 - findInvalidCards only
console.log('Task 4');
console.log(findInvalidCards(batch));

//Task 5 - idInvalidCardCompanies
console.log('Task 5');
console.log(idInvalidCardCompanies(findInvalidCards(batch)));

//Task 7-1 Convert Strings into numbers array
console.log('Task 7-1');
const batch2 = ['36728952810889', '4024007130004728568', '30528378870277', '367583754856937585'];
console.log(showAllValidatedCards(convertStringsToCardNumbers(batch2)));

//Task7-2 Convert Invalid Cards into Valid
console.log('Task 7-2');
console.log('////////List of Invalid cards////////////////');
console.log(showAllValidatedCards(findInvalidCards(batch)));
console.log('////////List of Coverted Valid cards////////////////');
console.log(showAllValidatedCards(convertInvalidToValid(findInvalidCards(batch))));








