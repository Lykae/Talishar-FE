const axios = require('axios');
const fs = require('fs');

const url =
  'https://raw.githubusercontent.com/the-fab-cube/flesh-and-blood-cards/dusk-till-dawn/json/english/card.json';
const outputFile = 'src/constants/cardList.ts';

axios
  .get(url)
  .then((jsonString) => {
    const cards = jsonString.data;

    const cardNames = cards.reduce((acc, card) => {
      const name = card.name;

      if (card.types.includes('Token')) {
        return acc;
      }

      if (!acc.includes(name)) {
        acc.push(name);
      }

      return acc;
    }, []);

    const sortedCardNames = cardNames.sort();

    const exportData = `// This file is generated by the card-generator script. Do not edit it manually. \nexport const CARD_LIST: string[] = ${JSON.stringify(
      sortedCardNames,
      null,
      2
    )};`;

    fs.mkdirSync('../src/constants', { recursive: true }); // create the constants directory if it doesn't exist
    fs.writeFileSync(outputFile, exportData);
  })
  .catch((err) => {
    console.error(err);
  });
