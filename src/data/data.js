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
        year: 2017,
        media: [
            {
                name: "YouTube",
                link: "https://www.youtube.com/watch?v=ydWxT-lRTa4"
            },
            {
                name: "Spotify",
                link: "https://open.spotify.com/track/1giQJIkaBcmEG1j4fkebZ2"
            }
        ]
    }, 
    {
        verses: [
            "ya tu fica no teu canto Nameless rima abusa", 
            "Nova Deli sou indiano sou o melhor da dica lusa",
            "tu já sabes eu sou bruto eu parto a tua fuça",
            "segura no durum burro mama-me a chamuça",
        ],
        author: "Nameless x ZA x Nastyfactor",
        title: "Tikka Masala",
        year: 2020,
        media: [
            {
                name: "YouTube",
                link: "https://www.youtube.com/watch?v=KJn-CY-iHGY"
            },
            {
                name: "Spotify",
                link: "https://open.spotify.com/track/1ztIGgUg50xt5lcwmrzbnK"
            }
        ]
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
        year: 2014,
        media: [
            {
                name: "YouTube",
                link: "https://www.youtube.com/watch?v=Tfr9Sg7JSNM"
            },
            {
                name: "Spotify",
                link: "https://open.spotify.com/track/5bJeUbMTGIo6Bs4vvRl5rC"
            }
        ]
    }
];

const getLyricsById = (id) => lyrics[id]

const lyricsCount = () => lyrics.length;

const randomLyricsId = (lyricsCount) => Math.round(Math.random()*(lyricsCount-1));

export const getRandomLyrics = () => getLyricsById(randomLyricsId(lyricsCount()));