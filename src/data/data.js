const lyrics = [
    {
        verses: [
            "Queria tanto ver a luz que nem vi que virei uma traça", 
            "Ela ilumina e seduz, ensina-me a ir pa casa", "Mas não posso dar cabeçadas",
            "Puto é preciso apontá-la",
            "Pa frente pa ver a nossa estrada, got it! (Skrr)",
        ],
        author: "Profjam",
        title: "Mortalhas",
        year: 2017
    }, 
    {
        verses: [
            "Vivo como um astronauta fora desse vosso mundo", 
            "Meu universo é obscuro, infinito e profundo",
            "No qual eu fecundo e ejaculo e a seguir reproduzo",
            "Recuso tar confuso e nunca rimo em pleno desuso",
        ],
        author: "Bob Da Rage Sense",
        title: "Sem escolha possível",
        year: 2014
    }
];

const getLyricsById = (id) => lyrics[id]

const lyricsCount = () => lyrics.length;

const randomLyricsId = (lyricsCount) => Math.round(Math.random()*(lyricsCount-1));

export const getRandomLyrics = () => getLyricsById(randomLyricsId(lyricsCount()));
