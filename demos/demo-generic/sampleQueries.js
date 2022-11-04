var sampleQueries = {
	"example.1" :
	{
	  "distinct": true,
	  "variables": [
	    "?this",
	    "?Voie_2"
	  ],
	  "defaultLang": "fr",
	  "order": null,
	  "branches": [
	    {
	      "line": {
	        "s": "?this",
	        "p": "http://data.esante.gouv.fr/ansm/medicament/substance",
	        "o": "?Substance_1",
	        "sType": "http://data.esante.gouv.fr/ansm/medicament/PrescriptionEnDC",
	        "oType": "http://data.esante.gouv.fr/ansm/medicament/Substance",
	        "values": [
	          {
	            "label": "chlorhydrate de lidocaïne anhydre (3)",
	            "uri": "http://data.esante.gouv.fr/ema/xevmpd/SUB34217"
	          }
	        ]
	      },
	      "children": []
	    },
	    {
	      "line": {
	        "s": "?this",
	        "p": "http://data.esante.gouv.fr/ansm/medicament/voie",
	        "o": "?Voie_2",
	        "sType": "http://data.esante.gouv.fr/ansm/medicament/PrescriptionEnDC",
	        "oType": "http://data.esante.gouv.fr/ansm/medicament/Voie",
	        "values": []
	      },
	      "children": []
	    }
	  ]
	},
	"example.2":
	{
	  "distinct": true,
	  "variables": [
	    "?this",
	    "?UniteCommuneDeDispensation_1"
	  ],
	  "defaultLang": "fr",
	  "order": null,
	  "branches": [
	    {
	      "line": {
	        "s": "?this",
	        "p": "http://data.esante.gouv.fr/ansm/medicament/dispenseDans",
	        "o": "?UniteCommuneDeDispensation_1",
	        "sType": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique",
	        "oType": "http://data.esante.gouv.fr/ansm/medicament/UniteCommuneDeDispensation",
	        "values": []
	      },
	      "children": [
	        {
	          "line": {
	            "s": "?UniteCommuneDeDispensation_1",
	            "p": "http://data.esante.gouv.fr/ansm/medicament/classementSubstanceDosageForme",
	            "o": "?MedicamentParSubstanceDosageForme_2",
	            "sType": "http://data.esante.gouv.fr/ansm/medicament/UniteCommuneDeDispensation",
	            "oType": "http://data.esante.gouv.fr/ansm/medicament/MedicamentParSubstanceDosageForme",
	            "values": [
	              {
	                "label": "acide clavulanique 50 mg + amoxicilline 500 mg solution injectable/pour perfusion (2)",
	                "uri": "http://data.esante.gouv.fr/ansm/medicament/PHPID4_1"
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