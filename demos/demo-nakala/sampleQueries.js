var sampleQueries = {
	"example.1" :
{
  "distinct": true,
  "variables": [
    "Aggregation_1",
    "License_2"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?Aggregation_1",
        "p": "http://www.europeana.eu/schemas/edm/rights",
        "o": "?License_2",
        "sType": "http://www.openarchives.org/ore/terms/Aggregation",
        "oType": "http://creativecommons.org/ns#License",
        "values": [
          {
            "label": "public",
            "regex": "public"
          }
        ]
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
    "ProvidedCHO_1",
    "Concept_2",
    "Coverage_4",
    "WebResource_10"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/subject",
        "o": "?Concept_2",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.w3.org/2004/02/skos/core#Concept",
        "values": [
          {
            "label": "Statues",
            "rdfTerm": {
              "type": "literal",
              "xml:lang": "en",
              "value": "Statues"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/terms/spatial",
        "o": "?Coverage_4",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Coverage",
        "values": [
          {
            "label": "Dublin",
            "regex": "Dublin"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://www.europeana.eu/schemas/edm/type",
        "o": "?Type_6",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Type",
        "values": [
          {
            "label": "IMAGE (19160)",
            "rdfTerm": {
              "type": "literal",
              "value": "IMAGE"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/aggredatedIn",
        "o": "?Aggregation_8",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.openarchives.org/ore/terms/Aggregation",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Aggregation_8",
            "p": "http://www.europeana.eu/schemas/edm/hasView",
            "o": "?WebResource_10",
            "sType": "http://www.openarchives.org/ore/terms/Aggregation",
            "oType": "http://www.europeana.eu/schemas/edm/WebResource",
            "values": []
          },
          "children": []
        }
      ]
    }
  ]
},

  "example.3" :
{
  "distinct": true,
  "variables": [
    "ProvidedCHO_1",
    "WebResource_10"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/type",
        "o": "?Type_2",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Type",
        "values": [
          {
            "label": "SOUND (396)",
            "rdfTerm": {
              "type": "literal",
              "xml:lang": "en",
              "value": "SOUND"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/subject",
        "o": "?Concept_4",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.w3.org/2004/02/skos/core#Concept",
        "values": [
          {
            "label": "Tales -- Ireland",
            "rdfTerm": {
              "type": "literal",
              "xml:lang": "en",
              "value": "Tales -- Ireland"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/language",
        "o": "?Language_6",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Language",
        "values": [
          {
            "label": "ga (395)",
            "rdfTerm": {
              "type": "literal",
              "value": "ga"
            }
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/aggredatedIn",
        "o": "?Aggregation_8",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.openarchives.org/ore/terms/Aggregation",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Aggregation_8",
            "p": "http://www.europeana.eu/schemas/edm/hasView",
            "o": "?WebResource_10",
            "sType": "http://www.openarchives.org/ore/terms/Aggregation",
            "oType": "http://www.europeana.eu/schemas/edm/WebResource",
            "values": []
          },
          "children": []
        }
      ]
    }
  ]
}
};