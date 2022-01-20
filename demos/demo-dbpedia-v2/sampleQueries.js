var sampleQueries = {
	"example.1" :
{
  "distinct": true,
  "variables": [
    "?Text_5",
    "?Text_3",
    "?Text_4",
    "?this"
  ],
  "defaultLang": "fr",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#displayedAt",
        "o": "?Museum_1",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Artwork",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Museum",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Museum_1",
            "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#country",
            "o": "?Country_2",
            "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Museum",
            "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Country",
            "values": [
              {
                "label": "France (222)",
                "uri": "http://fr.dbpedia.org/resource/France"
              }
            ]
          },
          "children": []
        },
        {
          "line": {
            "s": "?Museum_1",
            "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#label",
            "o": "?Text_5",
            "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Museum",
            "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
            "values": []
          },
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "?this",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#label",
        "o": "?Text_3",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Artwork",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "?this",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#description",
        "o": "?Text_4",
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
    "?Date_3",
    "?Date_4",
    "?Text_2",
    "?this"
  ],
  "defaultLang": "fr",
  "order": {
    "expression": "?Date_3",
    "sort": "asc"
  },
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#movement",
        "o": "?Movement_1",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Person",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Movement",
        "values": [
          {
            "label": "Impressionnisme (88)",
            "uri": "http://fr.dbpedia.org/resource/Impressionnisme"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?this",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#label",
        "o": "?Text_2",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Person",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Text",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "?this",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#birthDate",
        "o": "?Date_3",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Person",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Date",
        "values": []
      },
      "children": []
    },
    {
      "line": {
        "s": "?this",
        "p": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#deathYear",
        "o": "?Date_4",
        "sType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Person",
        "oType": "http://ontologies.sparna.fr/sparnatural-demo-dbpedia#Date",
        "values": []
      },
      "optional": true,
      "children": []
    }
  ]
}
};