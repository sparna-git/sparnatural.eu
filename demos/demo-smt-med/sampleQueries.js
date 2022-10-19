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
	}
};