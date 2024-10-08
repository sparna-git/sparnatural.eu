var sampleQueries = {
    "example.1" :{
    "distinct": true,
    "variables": [
        {
            "termType": "Variable",
            "value": "Artwork_1"
        },
        {
            "termType": "Variable",
            "value": "Museum_2"
        },
        {
            "termType": "Variable",
            "value": "Country_4"
        }
    ],
    "order": null,
    "branches": [
        {
            "line": {
                "s": "Artwork_1",
                "p": "https://data.mydomain.com/ontologies/sparnatural-config/Artwork_displayedAt",
                "o": "Museum_2",
                "sType": "https://data.mydomain.com/ontologies/sparnatural-config/Artwork",
                "oType": "https://data.mydomain.com/ontologies/sparnatural-config/Museum",
                "values": []
            },
            "children": [
                {
                    "line": {
                        "s": "Museum_2",
                        "p": "https://data.mydomain.com/ontologies/sparnatural-config/Museum_country",
                        "o": "Country_4",
                        "sType": "https://data.mydomain.com/ontologies/sparnatural-config/Museum",
                        "oType": "https://data.mydomain.com/ontologies/sparnatural-config/Country",
                        "values": [
                            {
                                "label": "Italie (1091)",
                                "rdfTerm": {
                                    "type": "uri",
                                    "value": "http://fr.dbpedia.org/resource/Italie"
                                }
                            }
                        ]
                    },
                    "children": []
                }
            ]
        }
    ]
},
"example.2": {
    "distinct": true,
    "variables": [
        {
            "termType": "Variable",
            "value": "Museum_1"
        },
        {
            "termType": "Variable",
            "value": "Artwork_2"
        },
        {
            "termType": "Variable",
            "value": "Person_4"
        }
    ],
    "order": null,
    "branches": [
        {
            "line": {
                "s": "Museum_1",
                "p": "https://data.mydomain.com/ontologies/sparnatural-config/Museum_displays",
                "o": "Artwork_2",
                "sType": "https://data.mydomain.com/ontologies/sparnatural-config/Museum",
                "oType": "https://data.mydomain.com/ontologies/sparnatural-config/Artwork",
                "values": []
            },
            "children": [
                {
                    "line": {
                        "s": "Artwork_2",
                        "p": "https://data.mydomain.com/ontologies/sparnatural-config/Artwork_author",
                        "o": "Person_4",
                        "sType": "https://data.mydomain.com/ontologies/sparnatural-config/Artwork",
                        "oType": "https://data.mydomain.com/ontologies/sparnatural-config/Person",
                        "values": [
                            {
                                "label": "Vincent van Gogh",
                                "rdfTerm": {
                                    "type": "uri",
                                    "value": "http://fr.dbpedia.org/resource/Vincent_van_Gogh"
                                }
                            }
                        ]
                    },
                    "children": []
                }
            ]
        }
    ]
},
"example.3":
{
    "distinct": true,
    "variables": [
        {
            "termType": "Variable",
            "value": "Person_1"
        },
        {
            "termType": "Variable",
            "value": "Category_2"
        },
        {
            "termType": "Variable",
            "value": "Artwork_4"
        },
        {
            "termType": "Variable",
            "value": "Museum_6"
        },
        {
            "termType": "Variable",
            "value": "Country_8"
        }
    ],
    "order": null,
    "branches": [
        {
            "line": {
                "s": "Person_1",
                "p": "https://data.mydomain.com/ontologies/sparnatural-config/Person_classifiedIn",
                "o": "Category_2",
                "sType": "https://data.mydomain.com/ontologies/sparnatural-config/Person",
                "oType": "https://data.mydomain.com/ontologies/sparnatural-config/Category",
                "values": [
                    {
                        "label": "Peintre français",
                        "rdfTerm": {
                            "type": "uri",
                            "value": "http://fr.dbpedia.org/resource/Catégorie:Peintre_français"
                        }
                    }
                ]
            },
            "children": []
        },
        {
            "line": {
                "s": "Person_1",
                "p": "https://data.mydomain.com/ontologies/sparnatural-config/Person_created",
                "o": "Artwork_4",
                "sType": "https://data.mydomain.com/ontologies/sparnatural-config/Person",
                "oType": "https://data.mydomain.com/ontologies/sparnatural-config/Artwork",
                "values": []
            },
            "children": [
                {
                    "line": {
                        "s": "Artwork_4",
                        "p": "https://data.mydomain.com/ontologies/sparnatural-config/Artwork_displayedAt",
                        "o": "Museum_6",
                        "sType": "https://data.mydomain.com/ontologies/sparnatural-config/Artwork",
                        "oType": "https://data.mydomain.com/ontologies/sparnatural-config/Museum",
                        "values": []
                    },
                    "children": [
                        {
                            "line": {
                                "s": "Museum_6",
                                "p": "https://data.mydomain.com/ontologies/sparnatural-config/Museum_country",
                                "o": "Country_8",
                                "sType": "https://data.mydomain.com/ontologies/sparnatural-config/Museum",
                                "oType": "https://data.mydomain.com/ontologies/sparnatural-config/Country",
                                "values": [
                                    {
                                        "label": "France (3987)",
                                        "rdfTerm": {
                                            "type": "uri",
                                            "value": "http://fr.dbpedia.org/resource/France"
                                        }
                                    }
                                ]
                            },
                            "children": [],
                            "notExists": true
                        }
                    ]
                }
            ]
        }
    ]
}

};