var sampleQueries = {
	"example.1" :
	{
	  "distinct": true,
	  "variables": [
	    "?this"
	  ],
	  "order": null,
	  "branches": [
	    {
	      "line": {
	        "s": "?this",
	        "p": "http://rdvocab.info/RDARelationshipsWEMI/workManifested",
	        "o": "?Work_1",
	        "sType": "http://rdvocab.info/uri/schema/FRBRentitiesRDA/Manifestation",
	        "oType": "http://rdvocab.info/uri/schema/FRBRentitiesRDA/Work",
	        "values": []
	      },
	      "children": [
	        {
	          "line": {
	            "s": "?Work_1",
	            "p": "http://purl.org/dc/terms/creator",
	            "o": "?Person_2",
	            "sType": "http://rdvocab.info/uri/schema/FRBRentitiesRDA/Work",
	            "oType": "http://xmlns.com/foaf/0.1/Person",
	            "values": [
	              {
	                "label": "Guy de Maupassant",
	                "uri": "http://data.bnf.fr/ark:/12148/cb11915226h#about"
	              }
	            ]
	          },
	          "children": []
	        }
	      ]
	    },
	    {
	      "line": {
	        "s": "?this",
	        "p": "http://ontologies.sparna.fr/sparnatural-legilux#publishedIn",
	        "o": "?Langue_3",
	        "sType": "http://rdvocab.info/uri/schema/FRBRentitiesRDA/Manifestation",
	        "oType": "http://ontologies.sparna.fr/sparnatural-legilux#Date",
	        "values": [
	          {
	            "label": "2020",
	            "uri": "http://data.bnf.fr/date/2020/"
	          }
	        ]
	      },
	      "children": []
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
	        "p": "http://ontologies.sparna.fr/sparnatural-legilux#dateOfWork",
	        "o": "?Date_1",
	        "sType": "http://rdvocab.info/uri/schema/FRBRentitiesRDA/Work",
	        "oType": "http://ontologies.sparna.fr/sparnatural-legilux#Date",
	        "values": [
	          {
	            "label": "1792",
	            "uri": "http://data.bnf.fr/date/1792/"
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
	        "p": "http://ontologies.sparna.fr/sparnatural-legilux#adapteDans",
	        "o": "?Event_2",
	        "sType": "http://rdvocab.info/uri/schema/FRBRentitiesRDA/Work",
	        "oType": "http://purl.org/dc/dcmitype/Event",
	        "values": []
	      },
	      "children": [],
	      "optional": false,
	      "notExists": false
	    }
	  ]
	}
};