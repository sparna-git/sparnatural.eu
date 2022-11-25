function f_getURL(){
      var urlgSheet = document.getElementById('source-url');

      var urlString = "https://xls2rdf.sparna.fr/rest/convert";
      var urlResult = "";
      if(urlgSheet.value != ""){

        var urlSheet = "";
        if(urlgSheet.value.includes("/edit")){
          urlSheet = urlgSheet.value.split("/edit")[0];
        } else {
          urlSheet = urlgSheet.value;
        }

        // Mime type of the RDF output format (e.g. "application/rdf+xml"). Turtle is returned by default
        urlString += "?url="+ urlSheet + "/export?format=xlsx";
        //Don't apply SKOS post-processings after conversion. Set this to true only if you are explicitely generating SKOS taxonomies.
        urlString += "&noPostProcessings=true";


        /* iframe
        =======================================
        */
        
        //var pageGeneric = window.location.href;
        var pageGeneric = "https://sparnatural.eu/demos/demo-generic/index.html"

        var urlGeneral = pageGeneric + "?lang=en" + "?source=" + urlString + "?endpoint=" + urlgSheet.value;

        document.getElementById('sharable-url').value = urlGeneral;

        iframe = "<iframe src='" + urlGeneral +"'";
        iframe += "></iframe>"

        document.getElementById('iframe_code').value = iframe;
    }
}
