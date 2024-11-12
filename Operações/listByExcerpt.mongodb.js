const database = 'bd3_atv4';

const collection = 'bd3-atv4-chat';

use(database);

const query = {"message" : /pico/i };

db[collection].find(
        query
    );

// Pesquisa por um trecho específico