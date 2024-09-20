var sampleQueries = {
    "example.1" :
{
    "distinct": true,
    "variables": [
        {
            "termType": "Variable",
            "value": "Sentence_1"
        },
        {
            "termType": "Variable",
            "value": "Language_2"
        }
    ],
    "order": null,
    "branches": [
        {
            "line": {
                "s": "Sentence_1",
                "p": "https://w3id.org/SpOTy/shapes-ldo/Sentence_language",
                "o": "Language_2",
                "sType": "https://w3id.org/SpOTy/shapes-ldo/Sentence",
                "oType": "https://w3id.org/SpOTy/shapes-ldo/Language",
                "values": []
            },
            "children": []
        }
    ]
}
,
    "example.2" :
{
    "distinct": true,
    "variables": [
        {
            "termType": "Variable",
            "value": "Sentence_1"
        },
        {
            "termType": "Variable",
            "value": "Code_8"
        },
        {
            "termType": "Variable",
            "value": "Code_12"
        }
    ],
    "order": null,
    "branches": [
        {
            "line": {
                "s": "Sentence_1",
                "p": "https://w3id.org/SpOTy/shapes-ldo/Sentence_sentenceToken",
                "o": "Token_2",
                "sType": "https://w3id.org/SpOTy/shapes-ldo/Sentence",
                "oType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                "values": []
            },
            "children": [
                {
                    "line": {
                        "s": "Token_2",
                        "p": "https://w3id.org/SpOTy/shapes-ldo/Token_tokenSemantics",
                        "o": "Semantics_4",
                        "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                        "oType": "https://w3id.org/SpOTy/shapes-ldo/Semantics",
                        "values": [
                            {
                                "label": "P trajectoire",
                                "rdfTerm": {
                                    "type": "uri",
                                    "value": "https://aslan.universite-lyon.fr/spoty/ns/CC-P"
                                }
                            }
                        ]
                    },
                    "children": []
                },
                {
                    "line": {
                        "s": "Token_2",
                        "p": "https://w3id.org/SpOTy/shapes-ldo/Token_semantics",
                        "o": "Semantics_6",
                        "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                        "oType": "https://w3id.org/SpOTy/shapes-ldo/Semantics",
                        "values": []
                    },
                    "children": [
                        {
                            "line": {
                                "s": "Semantics_6",
                                "p": "https://w3id.org/SpOTy/shapes-ldo/Semantics_codeCC",
                                "o": "Code_8",
                                "sType": "https://w3id.org/SpOTy/shapes-ldo/Semantics",
                                "oType": "https://w3id.org/SpOTy/shapes-ldo/Code",
                                "values": []
                            },
                            "children": []
                        }
                    ]
                },
                {
                    "line": {
                        "s": "Token_2",
                        "p": "https://w3id.org/SpOTy/shapes-ldo/Token_morphoSyntax",
                        "o": "MorphoSyntax_10",
                        "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                        "oType": "https://w3id.org/SpOTy/shapes-ldo/MorphoSyntax",
                        "values": []
                    },
                    "children": [
                        {
                            "line": {
                                "s": "MorphoSyntax_10",
                                "p": "https://w3id.org/SpOTy/shapes-ldo/MorphoSyntax_codeMS",
                                "o": "Code_12",
                                "sType": "https://w3id.org/SpOTy/shapes-ldo/MorphoSyntax",
                                "oType": "https://w3id.org/SpOTy/shapes-ldo/Code",
                                "values": []
                            },
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
}

    ,
    "example.3" :
{
    "distinct": true,
    "variables": [
        {
            "termType": "Variable",
            "value": "Sentence_1"
        },
        {
            "termType": "Variable",
            "value": "Semantics_6"
        },
        {
            "termType": "Variable",
            "value": "Semantics_10"
        },
        {
            "termType": "Variable",
            "value": "Language_12"
        },
        {
            "termType": "Variable",
            "value": "Transcription_14"
        }
    ],
    "order": null,
    "branches": [
        {
            "line": {
                "s": "Sentence_1",
                "p": "https://w3id.org/SpOTy/shapes-ldo/Sentence_firstToken",
                "o": "Token_2",
                "sType": "https://w3id.org/SpOTy/shapes-ldo/Sentence",
                "oType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                "values": []
            },
            "children": [
                {
                    "line": {
                        "s": "Token_2",
                        "p": "https://w3id.org/SpOTy/shapes-ldo/Token_tokenSemantics",
                        "o": "Semantics_4",
                        "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                        "oType": "https://w3id.org/SpOTy/shapes-ldo/Semantics",
                        "values": [
                            {
                                "label": "F figure",
                                "rdfTerm": {
                                    "type": "uri",
                                    "value": "https://aslan.universite-lyon.fr/spoty/ns/CC-F"
                                }
                            }
                        ]
                    },
                    "children": []
                },
                {
                    "line": {
                        "s": "Token_2",
                        "p": "https://w3id.org/SpOTy/shapes-ldo/Token_semantics",
                        "o": "Semantics_6",
                        "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                        "oType": "https://w3id.org/SpOTy/shapes-ldo/Semantics",
                        "values": []
                    },
                    "children": []
                },
                {
                    "line": {
                        "s": "Token_2",
                        "p": "https://w3id.org/SpOTy/shapes-ldo/Token_nextToken",
                        "o": "Token_8",
                        "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                        "oType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                        "values": []
                    },
                    "children": [
                        {
                            "line": {
                                "s": "Token_8",
                                "p": "https://w3id.org/SpOTy/shapes-ldo/Token_semantics",
                                "o": "Semantics_10",
                                "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                                "oType": "https://w3id.org/SpOTy/shapes-ldo/Semantics",
                                "values": []
                            },
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "line": {
                "s": "Sentence_1",
                "p": "https://w3id.org/SpOTy/shapes-ldo/Sentence_language",
                "o": "Language_12",
                "sType": "https://w3id.org/SpOTy/shapes-ldo/Sentence",
                "oType": "https://w3id.org/SpOTy/shapes-ldo/Language",
                "values": []
            },
            "children": []
        },
        {
            "line": {
                "s": "Sentence_1",
                "p": "https://w3id.org/SpOTy/shapes-ldo/Sentence_transcription",
                "o": "Transcription_14",
                "sType": "https://w3id.org/SpOTy/shapes-ldo/Sentence",
                "oType": "https://w3id.org/SpOTy/shapes-ldo/Transcription",
                "values": []
            },
            "children": []
        }
    ]
}

    ,
    "example.4" :
{
    "distinct": true,
    "variables": [
        {
            "termType": "Variable",
            "value": "Token_1"
        },
        {
            "termType": "Variable",
            "value": "ClauseNumber_4"
        },
        {
            "termType": "Variable",
            "value": "Sentence_6"
        }
    ],
    "order": null,
    "branches": [
        {
            "line": {
                "s": "Token_1",
                "p": "https://w3id.org/SpOTy/shapes-ldo/Token_tokenMorphosynytax",
                "o": "MorphoSyntax_2",
                "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                "oType": "https://w3id.org/SpOTy/shapes-ldo/MorphoSyntax",
                "values": [
                    {
                        "label": "H tête",
                        "rdfTerm": {
                            "type": "uri",
                            "value": "https://aslan.universite-lyon.fr/spoty/ns/MS-H"
                        }
                    }
                ]
            },
            "children": []
        },
        {
            "line": {
                "s": "Token_1",
                "p": "https://w3id.org/SpOTy/shapes-ldo/Token_clause",
                "o": "ClauseNumber_4",
                "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                "oType": "https://w3id.org/SpOTy/shapes-ldo/ClauseNumber",
                "values": []
            },
            "children": []
        },
        {
            "line": {
                "s": "Token_1",
                "p": "https://w3id.org/SpOTy/shapes-ldo/Token_tokenSentence",
                "o": "Sentence_6",
                "sType": "https://w3id.org/SpOTy/shapes-ldo/Token",
                "oType": "https://w3id.org/SpOTy/shapes-ldo/Sentence",
                "values": []
            },
            "children": []
        }
    ]
}

};
