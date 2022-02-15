        let raw;
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vT1nQ50IQI3hOB23JrU4bOPRpVkZ9a602GyLYRYOBX2O336QYncYyvaC7bNAz3R9_YqE2_Ucri2dW3D/pub?gid=0&single=true&output=csv", {
            download: true,
            header: true,
            complete: function(results) {
                console.log(results);
                raw = results;
                setupRow(results)
            }


        });