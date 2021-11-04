var sampleQueries = {
	"example.1" :
	{
	  "distinct": true,
	  "variables": [
	    "?this"
	  ],
	  "branches": [
	    {
	      "line": {
	        "s": "?this",
	        "p": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/inChapter",
	        "o": "?Chapter_1",
	        "sType": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/Disease",
	        "oType": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/Chapter",
	        "values": [
	          {
	            "label": "07 - Maladies de l'œil et de ses annexes",
	            "uri": "http://data.esante.gouv.fr/atih/cim10/07"
	          }
	        ]
	      },
	      "children": [],
	      "optional": false,
	      "notExists": false
	    },
	    {
	      "line": {
	        "s": "?this",
	        "p": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/label",
	        "o": "?Search_2",
	        "sType": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/Disease",
	        "oType": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/Search",
	        "values": [
	          {
	            "label": "paupière",
	            "key": "paupière"
	          }
	        ]
	      },
	      "children": [],
	      "optional": false,
	      "notExists": false
	    }
	  ]
	},
	"example.2" :
	{
	  "distinct": true,
	  "variables": [
	    "?this"
	  ],
	  "branches": [
	    {
	      "line": {
	        "s": "?this",
	        "p": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/hasCausality",
	        "o": "?Disease_1",
	        "sType": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/Disease",
	        "oType": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/Disease",
	        "values": []
	      },
	      "children": [
	        {
	          "line": {
	            "s": "?Disease_1",
	            "p": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/inSubChapter",
	            "o": "?SubChapter_2",
	            "sType": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/Disease",
	            "oType": "http://sparnatural.eu/demos/demo-smt-cim10/ontology/SubChapter",
	            "values": [
	              {
	                "label": "A80-A89 - Infections virales du système nerveux central",
	                "uri": "http://data.esante.gouv.fr/atih/cim10/A80-A89"
	              }
	            ]
	          },
	          "children": [],
	          "optional": false,
	          "notExists": false
	        }
	      ],
	      "optional": false,
	      "notExists": false
	    }
	  ]
	}
};