var sampleQueries = {
	"example.1" :
{
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "Aggregation_1"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "Aggregation_1",
        "p": "https://shacl-play.sparna.fr/shapes/Aggregation_rights",
        "o": "ZZ_Other_2",
        "sType": "https://shacl-play.sparna.fr/shapes/Aggregation",
        "oType": "http://special/ZZ_Other",
        "values": [
          {
            "label": "https://creativecommons.org/licenses/by/4.0/",
            "rdfTerm": {
              "type": "uri",
              "value": "https://creativecommons.org/licenses/by/4.0/"
            }
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
    {
      "expression": {
        "type": "aggregate",
        "aggregation": "count",
        "distinct": false,
        "expression": {
          "termType": "Variable",
          "value": "CulturalHeritageObject"
        }
      },
      "variable": {
        "termType": "Variable",
        "value": "CulturalHeritageObject_count"
      }
    },
    {
      "termType": "Variable",
      "value": "aCollection"
    }
  ],
  "order": "desc",
  "branches": [
    {
      "line": {
        "s": "CulturalHeritageObject",
        "p": "https://shacl-play.sparna.fr/shapes/ProvidedCHO_isGatheredInto",
        "o": "aCollection",
        "sType": "https://shacl-play.sparna.fr/shapes/ProvidedCHO",
        "oType": "https://shacl-play.sparna.fr/shapes/Collection",
        "values": []
      },
      "children": []
    }
  ]
},

  "example.3" :
{
  "distinct": true,
  "variables": [
    {
      "expression": {
        "type": "aggregate",
        "aggregation": "count",
        "distinct": false,
        "expression": {
          "termType": "Variable",
          "value": "ProvidedCHO_1"
        }
      },
      "variable": {
        "termType": "Variable",
        "value": "ProvidedCHO_1_count"
      }
    },
    {
      "termType": "Variable",
      "value": "Agent_2"
    }
  ],
  "order": "desc",
  "branches": [
    {
      "line": {
        "s": "ProvidedCHO_1",
        "p": "https://shacl-play.sparna.fr/shapes/ProvidedCHO_creator",
        "o": "Agent_2",
        "sType": "https://shacl-play.sparna.fr/shapes/ProvidedCHO",
        "oType": "https://shacl-play.sparna.fr/shapes/Agent",
        "values": []
      },
      "children": []
    }
  ]
},
"example.4":
{
  "distinct": true,
  "variables": [
    {
      "termType": "Variable",
      "value": "ProvidedCHO_1"
    },
    {
      "termType": "Variable",
      "value": "Z_Location_4"
    }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "ProvidedCHO_1",
        "p": "https://shacl-play.sparna.fr/shapes/ProvidedCHO_spatial",
        "o": "Place_2",
        "sType": "https://shacl-play.sparna.fr/shapes/ProvidedCHO",
        "oType": "https://shacl-play.sparna.fr/shapes/Place",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "Place_2",
            "p": "https://shacl-play.sparna.fr/shapes/Place_asWKT",
            "o": "Z_Location_4",
            "sType": "https://shacl-play.sparna.fr/shapes/Place",
            "oType": "http://special/Z_Location",
            "values": [
              {
                "label": "<svg id=\"svgelem\" width=\"30\" height=\"30\" viewBox=\"0 0 2.768554687500001 2.6751296840457783\" xmlns=\"http://www.w3.org/2000/svg\" style=\" transform: rotateX(180deg);\" preserveAspectRatio=\"xMidYMid meet\">   <g><polygon points=\"0,0 0,2.6751296840457783 2.768554687500001,2.6751296840457783 2.768554687500001,0\" style=\"fill:#ffffff;\" /></g></svg><span>90834 km²</span>",
                "type": "Rectangle",
                "coordinates": [
                  [
                    {
                      "lat": 42.90816007196054,
                      "lng": 5.858641862869264
                    },
                    {
                      "lat": 45.583289756006316,
                      "lng": 5.858641862869264
                    },
                    {
                      "lat": 45.583289756006316,
                      "lng": 8.627196550369264
                    },
                    {
                      "lat": 42.90816007196054,
                      "lng": 8.627196550369264
                    }
                  ]
                ]
              }
            ]
          },
          "children": []
        }
      ]
    }
  ]
}
};