const database = 'bd3_atv4';

const collection = 'bd3-atv4-chat';

use(database);

db[collection].insertMany(
    [
        {
            "author": "Fulano",
            "date": "12/11/2024",
            "time": "19:00:00",
            "message": "Beleza, tudo bem?"
        },
        {
            "author": "Ciclano",
            "date": "12/11/2024",
            "time": "19:01:00",
            "message": "To bem sim fulano, e vc?"
        },
        {
            "author": "Fulano",
            "date": "12/11/2024",
            "time": "19:01:20",
            "message": "Mais que bem ciclano! To me sentindo top"
        },
        {
            "author": "Ciclano",
            "date": "12/11/2024",
            "time": "19:01:50",
            "message": "Legal, como que vai sua mulher?"
        },
        {
            "author": "Fulano",
            "date": "12/11/2024",
            "time": "19:02:20",
            "message": "Ta falando da minha mulher pq? Vou te meter a porrada mano"
        },
        {
            "author": "Ciclano",
            "date": "12/11/2024",
            "time": "19:02:50",
            "message": "Para mano, me bate não, só queria saber como ela ta se sentindo"
        },
        {
            "author": "Fulano",
            "date": "12/11/2024",
            "time": "19:03:10",
            "message": "Bom mesmo >:("
        },
        {
            "author": "Ciclano",
            "date": "12/11/2024",
            "time": "19:03:30",
            "message": "Nossa mlk eu te odeio, nem queria mas depois desse emoticon vou descer a tora nela"
        },
        {
            "author": "Fulano",
            "date": "12/11/2024",
            "time": "19:03:50",
            "message": "Fechou, vem pro pico do jaraguá as 12:00 pra ver qual homem sai vivo"
        },
        {
            "author": "Ciclano",
            "date": "12/11/2024",
            "time": "19:04:00",
            "message": "PARA DE SER NERDOLA VEI, NINGUEM QUER ELA NÃO"
        },
        {
            "author": "Fulano",
            "date": "12/11/2024",
            "time": "19:05:00",
            "message": "Gritou = perdeu o argumento"
        }
    ]
)