const story = {
  id: 1,  q: "Bist du >= 18?",
    answers: {
        ja: {
            id: 2, q: "Wohnst du schon in Mitte?",
            answers: {
                ja: {
                  id: 3,  q: "Was machst du sonntags?",
                    answers: {
                        "weiter raven": {
                            q: "Womit hälst du dich wach?",
                            answers: {
                                Angst: {
                                    q: "Bist du moralisch flexibel?",
                                    answers: {
                                        "mal so, mal so": {
                                            q: "Du verstoeßt regelmäßig gegen Gesetze?",
                                            answers: {
                                                Ja: {
                                                    q: "Lässt du dich dabei erwischen?",
                                                    answers: {
                                                        Nein: "Du ziehst nach Bellevue",
                                                        Ja: "Du kommst in die JVA",
                                                    },
                                                },
                                                //nein
                                            },
                                        },
                                        "das ist XXX":
                                            /*Hier Content?*/ "Du ziehst nach Bellevue",
                                    },
                                },
                                Kokstaxi: {
                                    q: "Wo sitzt du dort?",
                                    answers: {
                                        Fahrersitz: "Du kommst in die JVA",
                                        hinten: {
                                            q: "Wie bewegst du dich?",
                                            answers: {
                                                Leasingwagen: {
                                                    q: "Wo feierst du am liebsten?",
                                                    answers: {
                                                        "Ich feiere auf mehreren Hochzeiten gleichzeitig":
                                                            {
                                                                q: "Was ist das schoenste an einer Reise fuer dich?",
                                                                answers: {
                                                                    "Der Trip":
                                                                        {
                                                                            q: "Online oder offline?",
                                                                            answers:
                                                                                {
                                                                                    Beziehungsprobleme:
                                                                                        "Du kommst ins Startup",
                                                                                    Verbindungsprobleme:
                                                                                        "Du ziehst ins Sudent Hotel",
                                                                                },
                                                                        },
                                                                    Buisnessclass:
                                                                        "Du kommst ins Startup",
                                                                },
                                                            },
                                                    },
                                                },
                                                //2. Antwort wie bewegst du dich
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        flohmarkt: {
                            q: "Du triffst Christian Lindner auf dem Flohmarkt. Wie fuehlst du dich?",
                            answers: {
                                "Abgehängt, denn er hat mir den 3000-Euro-Kronenleuchter vor der Nase weggeschnappt!":
                                    {
                                        q: "Wo bestellst du?",
                                        answers: {
                                            "Bei dem Typen in Eile mit dem orangenen Kasten auf dem Fahrrad":
                                                {
                                                    q: "Was ist dein Lieblingstier?",
                                                    answers: {
                                                        Bettwanze:
                                                            "Du ziehst ins Student Hotel",
                                                    },
                                                },
                                            //koxtaxi
                                        },
                                    },
                                "Wie er, denn er hat auch keine Wohnung in Mitte bekommen.":
                                    {
                                        q: "Online oder offline?",
                                        answers: {
                                            Beziehungsprobleme:
                                                "Du kommst ins Startup",
                                            Verbindungsprobleme:
                                                "Du ziehst ins Sudent Hotel",
                                        },
                                    },
                            },
                        },
                    },
                },
                nein: {
                    q: "Welche Art von Fußbodenbelag bevorzugst du?",
                    answers: {
                        "Haben wir noch Pappen?": {
                            q: "Wie dick?",

                            answers: {
                                "> 2cm2": {
                                    q: "Lieber Arm ab oder arm dran?",
                                    answers: {
                                        //komisch
                                        "arm dran": "Du ziehst ins Zelt ",

                                        "arm ab": {
                                            q: "Hast du den Herd angelassen?",
                                            answers: {
                                                "was ist ein Herd?": {
                                                    q: "Lieber dreckige Masken oder dreckige Maskendeals?",
                                                    answers: {
                                                        "dreckige Masken":
                                                            "Du ziehst ins Zelt",
                                                        "Dreckige Deals":
                                                            "Du ziehst nach Bellevue",
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                "< 2cm2": {
                                    q: "Insta oder Tinder?",
                                    answers: {
                                        "Online-Wohnungsmarkt": {
                                            q: "Womit zahlst du?",
                                            answers: {
                                                "Meinen Eltern": {
                                                    q: "wo bestellst du?",
                                                    answers: {
                                                        Kokstaxi: {
                                                            q: "Online oder offline?",
                                                            answers: {
                                                                Beziehungsprobleme:
                                                                    "Du kommst ins Startup",
                                                                Verbindungsprobleme:
                                                                    "Du ziehst ins Sudent Hotel",
                                                            },
                                                        },
                                                    },
                                                },
                                                Bitcoin: {
                                                    q: "Du triffst Christian Lindner auf dem Flohmarkt. Wie fuehlst du dich?",
                                                    answers: {
                                                        "Abgehängt, denn er hat mir den 3000-Euro-Kronenleuchter vor der Nase weggeschnappt!":
                                                            {
                                                                q: "Wo bestellst du?",
                                                                answers: {
                                                                    "Bei dem Typen in Eile mit dem orangenen Kasten auf dem Fahrrad":
                                                                        {
                                                                            q: "Was ist dein Lieblingstier?",
                                                                            answers:
                                                                                {
                                                                                    Bettwanze:
                                                                                        "Du ziehst ins Student Hotel",
                                                                                    Pfennigfuchs:
                                                                                        "Du ziehst ins Durchgangszimmer",
                                                                                },
                                                                        },
                                                                    //koxtaxi
                                                                },
                                                            },
                                                        "Wie er, denn er hat auch keine Wohnung in Mitte bekommen.":
                                                            {
                                                                q: "Online oder offline?",
                                                                answers: {
                                                                    Beziehungsprobleme:
                                                                        "Du kommst ins Startup",
                                                                    Verbindungsprobleme:
                                                                        "Du ziehst ins Sudent Hotel",
                                                                },
                                                            },
                                                    },
                                                },
                                            },
                                        },
                                        "Alles, was mein Ego pusht": {
                                            q: "Fuehlst du dich manchmal beobachtet?",
                                            answers: {
                                                "Nur, wenn ich zu viel Pappen hatte":
                                                    {
                                                        q: "Was ist dein Lieblingstier?",
                                                        answers: {
                                                            Bettwanze:
                                                                "Du ziehst ins Student Hotel",
                                                            Pfennigfuchs:
                                                                "Du ziehst ins Durchgangszimmer",
                                                        },
                                                    },
                                                answers: {
                                                    Staendig: {
                                                        q: "Teilst du gern mit anderen?",
                                                        answers: {
                                                            "Ich mag's, wenn mir Leute beim Sex zusehen":
                                                                "Du ziehst ins Durchgangszimmer",
                                                            //2. Antwort?
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        laminat: {
                            q: "Womit zahlst du?",
                            answers: {
                                "Meinen Eltern": {
                                    q: "wo bestellst du?",
                                    answers: {
                                        Kokstaxi: {
                                            q: "Online oder offline?",
                                            answers: {
                                                Beziehungsprobleme:
                                                    "Du kommst ins Startup",
                                                Verbindungsprobleme:
                                                    "Du ziehst ins Student Hotel",
                                            },
                                        },
                                        // 2 antwort
                                    },
                                },
                                Bitcoin: {
                                    q: "Du triffst Christian Lindner auf dem Flohmarkt. Wie fuehlst du dich?",
                                    answers: {
                                        "Abgehängt, denn er hat mir den 3000-Euro-Kronenleuchter vor der Nase weggeschnappt!":
                                            {
                                                q: "Wo bestellst du?",
                                                answers: {
                                                    "Bei dem Typen in Eile mit dem orangenen Kasten auf dem Fahrrad":
                                                        {
                                                            q: "Was ist dein Lieblingstier?",
                                                            answers: {
                                                                Bettwanze:
                                                                    "Du ziehst ins Student Hotel",
                                                                Pfennigfuchs:
                                                                    "Du ziehst ins Durchgangszimmer",
                                                            },
                                                        },
                                                    //koxtaxi
                                                },
                                            },
                                        "Wie er, denn er hat auch keine Wohnung in Mitte bekommen.":
                                            {
                                                q: "Online oder offline?",
                                                answers: {
                                                    Beziehungsprobleme:
                                                        "Du kommst ins Startup",
                                                    Verbindungsprobleme:
                                                        "Du ziehst ins Sudent Hotel",
                                                },
                                            },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        nein: "Dann mach's gut!",
    },
};



const altStory =  {
    1: { q: "string",
        answers: {
            "ja": 11,
            "nein": 2
        }
    },
    2: { q: "zweitefrage",
 }
}


module.exports = story