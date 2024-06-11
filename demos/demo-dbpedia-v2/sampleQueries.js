var sampleQueries = {
	"example.1" :
{
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Artwork_1"
    },
    {
      "termType": "Variable",
      "value": "Text_6"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Artwork_1",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#displayedAt",
        "o": "Museum_2",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Artwork",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Museum",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "Museum_2",
            "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#country",
            "o": "Country_4",
            "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Museum",
            "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Country",
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
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "Artwork_1",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#description",
        "o": "Text_6",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Artwork",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
        "values": []
      },
      "children": []
    }
  ]
},
	"example.2" :
{
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Date_4"
    },
    {
      "termType": "Variable",
      "value": "Date_6"
    },
    {
      "termType": "Variable",
      "value": "Person_1"
    }
  ],
  "order": "asc",
  "branches": [
    {
      "line": {
        "s": "Person_1",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#movement",
        "o": "Movement_2",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Person",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Movement",
        "values": [
          {
            "label": "Impressionnisme (820)",
            "rdfTerm": {
              "type": "uri",
              "value": "http://fr.dbpedia.org/resource/Impressionnisme"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "Person_1",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#birthDate",
        "o": "Date_4",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Person",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Date",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "Person_1",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#deathYear",
        "o": "Date_6",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Person",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Date",
        "values": []
      },
      "children": [],
      "optional": true
    }
  ]
}
};