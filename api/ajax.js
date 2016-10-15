function ajax_fetch(uri) {
   var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.status == 200) {
            var results = JSON.stringify(eval(this.responseText))
            var header = "<p>Artista: " + results.artist + "</p>"
            header += "<p>Album: " + results.albumTitle + "</p>"
            if (results.availableOnItunes)
                header += "<a href='#'>" + "Disponible en iTunes</a>"
            var total = 0
            var table = "<table><tr>" +
                        "<th> * </th>" +
                        "<th> Titulo </th>" +
                        "<th> Album </th>" +
                        "<th> Artista </th> </tr>"
            for (var i = results.tracks.length - 1; i >= 0; i--) {
               table += "<tr>" +
                        "<td> * </td>" +
                        "<td>" + results.tracks[i].Title + "</td>" +
                        "<td>" + results.albumTitle + "</td>" +
                        "<td>" + results.artist + "</td></tr>";
                total += results.tracks[i].duration;
            }
            header += "<p>Duracion: " + total + "</p>"
            document.getElementById("content").innerHTML += header + content
        }
    };
    xhttp.open("GET", "http://demo9072126.mockable.io/blick_exam", true);
    xhttp.send()
}

