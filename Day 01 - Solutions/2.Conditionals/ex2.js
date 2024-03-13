const prompt = require('prompt-sync')();

//Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let notesPrompt = prompt('Enter a exam grade: ');
notesPrompt = Number(notesPrompt);
switch (true) {
  case notesPrompt >= 80 && notesPrompt <= 100:
    console.log('Letter grade A');
    break;

  case notesPrompt >= 70 && notesPrompt <= 79:
    console.log('Letter grade B');
    break;

  case notesPrompt >= 60 && notesPrompt <= 69:
    console.log('Letter grade C');
    break;

  case notesPrompt >= 50 && notesPrompt <= 59:
    console.log('Letter grade D');
    break;

  case notesPrompt >= 0 && notesPrompt <= 49:
    console.log('Letter grade F');
    break;

  default:
    console.log('Invalid score');
    break;
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let seasonPrompt = prompt('Enter month name: ').toLowerCase();
switch (seasonPrompt) {
  case 'september':
  case 'october':
  case 'november':
    console.log('The season is Autumn');
    break;

  case 'december':
  case 'january':
  case 'february':
    console.log('The season is Winter');
    break;

  case 'march':
  case 'april':
  case 'may':
    console.log('The season is Spring');
    break;

  case 'june':
  case 'july':
  case 'august':
    console.log('The season is Summer');
    break;

  default:
    console.log('Invalid month input.');
    break;
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let dayPrompt = prompt('What is the day today? ').toLowerCase();
switch (dayPrompt) {
  case 'saturday':
  case 'sunday':
    console.log(`${dayPrompt} is a weekend`);
    break;

  case 'monday':
  case 'tuesday':
  case 'WednesDay':
  case 'thurday':
  case 'friday':
    console.log(`${dayPrompt} is a work day`);
    break;

  default:
    console.log('Invalid day input.');
    break;
}
