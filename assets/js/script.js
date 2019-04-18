var lang = {
        "html": "95%",
        "css": "85%",
        "javascript": "80%",
        "php": "80%",
        "angulars": "60%",
        "cyber": "50%",
        "react": "65%",
        "vue": "75%",
        "firebase": "80%",
        "bd": "80%",
        "drupal": "50%",
        "android": "84%",
        "csharp": "78%",
        "java": "90%",
        "wordpress": "90%"
        };

        var multiply = 4;

        $.each( lang, function( language, pourcent) {

        var delay = 0;
        
        setTimeout(function() {
            $('#'+language+'-pourcent').html(pourcent);
        },delay*multiply);
        
        multiply++;

        });