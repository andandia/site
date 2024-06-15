


window.onload = (event) => {
    var translator = new MultiLanguage("ja");
    
    var xhr = new XMLHttpRequest();  //Create an xhr instance
    
    xhr.open("GET", "languages.json"); // Define target file and HTTP method to use.
    
    xhr.onreadystatechange = (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonResponse = JSON.parse(xhr.responseText); // get response text and parse it into JSON.
            translator.addSheet(jsonResponse);
        }
    }
    xhr.send()
    
    
    //translator.translate(this.externalJSON, "ja")
    translator.registerSelect(document.getElementById("languages"));
    
};


// function langChange() {
//     var translator = new MultiLanguage();
//     translator.translate(this.externalJSON, document.getElementById("languages").value)
// }
