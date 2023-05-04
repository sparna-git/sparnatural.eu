var sampleQueries = {
	"example.1" :
	{
  "distinct": true,
  "variables": [
    "SpecialitePharmaceutique_1",
    "CIP_6",
    "UCD_10"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?SpecialitePharmaceutique_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/codeATC",
        "o": "?CodeATC_2",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/CodeATC",
        "values": [
          {
            "label": "J01DC02",
            "regex": "J01DC02"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?SpecialitePharmaceutique_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/aPourPresentation",
        "o": "?Presentation_4",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/Presentation",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?Presentation_4",
            "p": "http://data.esante.gouv.fr/ansm/medicament/CIP13",
            "o": "?CIP_6",
            "sType": "http://data.esante.gouv.fr/ansm/medicament/Presentation",
            "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/CIP",
            "values": []
          },
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "?SpecialitePharmaceutique_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/aPourUniteDeDispensation",
        "o": "?UniteCommuneDeDispensation_8",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/UniteCommuneDeDispensation",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?UniteCommuneDeDispensation_8",
            "p": "http://data.esante.gouv.fr/ansm/medicament/codeUCD13",
            "o": "?UCD_10",
            "sType": "http://data.esante.gouv.fr/ansm/medicament/UniteCommuneDeDispensation",
            "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/UCD",
            "values": []
          },
          "children": []
        }
      ]
    }
  ]
}
	,
	"example.2":
{
  "distinct": true,
  "variables": [
    "Substance_1",
    "CodeSMS_6"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?Substance_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/estSubstanceActiveDans",
        "o": "?SpecialitePharmaceutique_2",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/Substance",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?SpecialitePharmaceutique_2",
            "p": "http://data.esante.gouv.fr/ansm/medicament/codeATC",
            "o": "?CodeATC_4",
            "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
            "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/CodeATC",
            "values": [
              {
                "label": "C09AA04",
                "regex": "C09AA04"
              }
            ]
          },
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "?Substance_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/codeSMS",
        "o": "?CodeSMS_6",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/Substance",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/CodeSMS",
        "values": []
      },
      "children": [],
      "optional": true
    }
  ]
}
	,
	"example.3":
{
  "distinct": true,
  "variables": [
    "CodeATC_2"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?SpecialitePharmaceutique_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/labelATC",
        "o": "?CodeATC_2",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/CodeATC",
        "values": [
          {
            "label": "betamethasone",
            "regex": "betamethasone"
          }
        ]
      },
      "children": []
    }
  ]
}
	,
	"example.4":
{
  "distinct": true,
  "variables": [
    "SpecialitePharmaceutique_1"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?SpecialitePharmaceutique_1",
        "p": "http://www.w3.org/2000/01/rdf-schema#label",
        "o": "?Text_2",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/Text",
        "values": [
          {
            "label": "vaccin",
            "regex": "vaccin"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?SpecialitePharmaceutique_1",
        "p": "http://www.w3.org/2000/01/rdf-schema#label",
        "o": "?Text_4",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/Text",
        "values": [
          {
            "label": "covid",
            "regex": "covid"
          }
        ]
      },
      "children": []
    }
  ]
}
	,
	"example.5":
{
  "distinct": true,
  "variables": [
    "Evenement_1",
    "SpecialitePharmaceutique_2"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?Evenement_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/concerne",
        "o": "?SpecialitePharmaceutique_2",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/Evenement",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "values": [
          {
            "label": "FORTUM 2 g, poudre pour solution injectable (IV) ou pour perfusion",
            "uri": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique_69443806"
          }
        ]
      },
      "children": []
    }
  ]
}
	,
	"example.6":
{
  "distinct": true,
  "variables": [
    "Presentation_1",
    "Substance_4",
    "TypeProcedure_6"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?Presentation_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/presente",
        "o": "?SpecialitePharmaceutique_2",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/Presentation",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?SpecialitePharmaceutique_2",
            "p": "http://data.esante.gouv.fr/ansm/medicament/substanceActive",
            "o": "?Substance_4",
            "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
            "oType": "http://data.esante.gouv.fr/ansm/medicament/Substance",
            "values": [
              {
                "label": "ézétimibe",
                "uri": "http://data.esante.gouv.fr/ansm/medicament/Substance_73242"
              }
            ]
          },
          "children": []
        },
        {
          "line": {
            "s": "?SpecialitePharmaceutique_2",
            "p": "http://data.esante.gouv.fr/ansm/medicament/typeProcedureCourante",
            "o": "?TypeProcedure_6",
            "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
            "oType": "http://data.esante.gouv.fr/ansm/medicament/TypeProcedure",
            "values": [
              {
                "label": "Autorisation d'importation parallèle d’une spécialité pharmaceutique en vue de la mise sur le marché en France (300)",
                "uri": "http://data.esante.gouv.fr/ansm/medicament/Procedure_31"
              }
            ]
          },
          "children": []
        }
      ]
    }
  ]
}
	,
	"example.7":
{
  "distinct": true,
  "variables": [
    "Presentation_1"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?Presentation_1",
        "p": "http://www.w3.org/2000/01/rdf-schema#label",
        "o": "?Text_2",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/Presentation",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/Text",
        "values": [
          {
            "label": "metformine",
            "regex": "metformine"
          }
        ]
      },
      "children": []
    },
    {
      "line": {
        "s": "?Presentation_1",
        "p": "http://www.w3.org/2000/01/rdf-schema#label",
        "o": "?Text_4",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/Presentation",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/Text",
        "values": [
          {
            "label": "1000",
            "regex": "1000"
          }
        ]
      },
      "children": []
    }
  ]
},
	"example.8":
{
  "distinct": true,
  "variables": [
    "Substance_1",
    "Text_4"
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "?Substance_1",
        "p": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/estSubstanceActiveDans",
        "o": "?SpecialitePharmaceutique_2",
        "sType": "http://data.esante.gouv.fr/ansm/medicament/Substance",
        "oType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "?SpecialitePharmaceutique_2",
            "p": "http://www.w3.org/2000/01/rdf-schema#label",
            "o": "?Text_4",
            "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
            "oType": "http://data.esante.gouv.fr/ansm/medicament/sparnatural-config/Text",
            "values": [
              {
                "label": "humex rhume",
                "regex": "humex rhume"
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