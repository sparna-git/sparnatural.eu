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
            "label": "http://creativecommons.org/publicdomain/mark/1.0/",
            "uri": "http://creativecommons.org/publicdomain/mark/1.0/"
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
    "Provenance_2",
    "Format_4"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/terms/provenance",
        "o": "?Provenance_2",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Provenance",
        "values": [
          {
            "label": "amsterdam",
            "regex": "amsterdam"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/format",
        "o": "?Format_4",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Format",
        "values": [
          {
            "label": "metal",
            "regex": "metal"
          }
        ]
      },
      "children": []
}
  ]
},

  "example.3" :
{

  "distinct": true,
  "variables": [
    "ProvidedCHO_1",
    "Format_2",
    "Date_8",
    "WebResource_6"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/elements/1.1/format",
        "o": "?Format_2",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Format",
        "values": [
          {
            "label": "diamant",
            "regex": "diamant"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/aggredatedIn",
        "o": "?Aggregation_4",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://www.openarchives.org/ore/terms/Aggregation",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Aggregation_4",
            "p": "http://www.europeana.eu/schemas/edm/isShownBy",
            "o": "?WebResource_6",
            "sType": "http://www.openarchives.org/ore/terms/Aggregation",
            "oType": "http://www.europeana.eu/schemas/edm/WebResource",
            "values": []
          },
          "children": [],
          "optional": true
        }
      ]
    },
    {
      "line": {
        "s": "?ProvidedCHO_1",
        "p": "http://purl.org/dc/terms/created",
        "o": "?Date_8",
        "sType": "http://www.europeana.eu/schemas/edm/ProvidedCHO",
        "oType": "http://sparnatural.eu/demos/demo-edm/sparnatural-config.ttl/Date",
        "values": []
      },
      "children": []
          }
  ]
}
}