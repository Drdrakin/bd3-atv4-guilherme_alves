const database = 'bd3_atv4';

const collection = 'bd3-atv4-chat';

use(database);

db[collection].find().sort({time: 1, date: 1});

//Lista na ordem cronológica do 'time' e 'date'