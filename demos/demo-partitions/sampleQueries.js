var sampleQueries = {
	"example.1" :
{
  "distinct": true,
  "variables": [
    "?this"
  ],
  "defaultLang": "fr",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/casting",
        "o": "?Casting_1",
        "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Partition",
        "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Casting",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Casting_1",
            "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/castingdetail",
            "o": "?CastingDetail_2",
            "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Casting",
            "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/CastingDetail",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "?CastingDetail_2",
                "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/medium",
                "o": "?Medium_3",
                "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/CastingDetail",
                "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Medium",
                "values": [
                  {
                    "label": "Violon",
                    "uri": "http://www.mimo-db.eu/InstrumentsKeywords/3573"
                  }
                ]
              },
              "children": []
            },
            {
              "line": {
                "s": "?CastingDetail_2",
                "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/quantityofmop",
                "o": "?QuantityOfMop_4",
                "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/CastingDetail",
                "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/QuantityOfMop",
                "values": [
                  {
                    "label": "1",
                    "regex": "1"
                  }
                ]
              },
              "children": []
            }
          ]
        },
        {
          "line": {
            "s": "?Casting_1",
            "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/castingdetail",
            "o": "?CastingDetail_5",
            "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Casting",
            "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/CastingDetail",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "?CastingDetail_5",
                "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/medium",
                "o": "?Medium_6",
                "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/CastingDetail",
                "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Medium",
                "values": [
                  {
                    "label": "Piano",
                    "uri": "http://www.mimo-db.eu/InstrumentsKeywords/2299"
                  }
                ]
              },
              "children": []
            },
            {
              "line": {
                "s": "?CastingDetail_5",
                "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/quantityofmop",
                "o": "?QuantityOfMop_7",
                "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/CastingDetail",
                "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/QuantityOfMop",
                "values": [
                  {
                    "label": "1",
                    "regex": "1"
                  }
                ]
              },
              "children": []
            }
          ]
        },
        {
          "line": {
            "s": "?Casting_1",
            "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/numberOfInstrument",
            "o": "?NumberOfInstrument_8",
            "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Casting",
            "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/NumberOfInstrument",
            "values": [
              {
                "label": "2",
                "literal": "2"
              }
            ]
          },
          "children": []
        }
      ]
    }
  ]
},
	"example.2" :
{
  "distinct": true,
  "variables": [
    "?this"
  ],
  "defaultLang": "fr",
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?this",
        "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/created_inverse",
        "o": "?Event_1",
        "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Partition",
        "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Event",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Event_1",
            "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/acivity",
            "o": "?Activity_2",
            "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Event",
            "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Activity",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "?Activity_2",
                "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/activity_carriedoutBy",
                "o": "?Person_3",
                "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Activity",
                "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Person",
                "values": [
                  {
                    "label": "Wolfgang Amadeus Mozart",
                    "uri": "https://ark.philharmoniedeparis.fr/ark:49250/0055853"
                  }
                ]
              },
              "children": []
            }
          ]
        }
      ]
    },
    {
      "line": {
        "s": "?this",
        "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/genre",
        "o": "?Genre_4",
        "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Partition",
        "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Genre",
        "values": [
          {
            "label": "Concerto (1526)",
            "uri": "https://ark.philharmoniedeparis.fr/ark:49250/0064628"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?this",
        "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/casting",
        "o": "?Casting_5",
        "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Partition",
        "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Casting",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Casting_5",
            "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/castingdetail",
            "o": "?CastingDetail_6",
            "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Casting",
            "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/CastingDetail",
            "values": []
          },
          "children": [
            {
              "line": {
                "s": "?CastingDetail_6",
                "p": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/medium",
                "o": "?Medium_7",
                "sType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/CastingDetail",
                "oType": "https://data.philharmoniedeparis.fr/partitions/sparnatural-config/Medium",
                "values": [
                  {
                    "label": "Piano",
                    "uri": "http://www.mimo-db.eu/InstrumentsKeywords/2299"
                  }
                ]
              },
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
};