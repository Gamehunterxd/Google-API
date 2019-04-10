$(document).ready(function () {

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(initialize);

    function initialize() {
        drawBarChart("barChart");
        drawBarChartRange("barChartTwo");
        drawBarChartDeling("barDeling");
        drawBarChartTilgang("barTilgang");
        drawBarChartRatio("barRatio");

    }

    function drawBarChart(HTMLElementId) {
        var chartData = {
            "cols": [
                {"id":"","label":"interaktioner","pattern":"","type":"string"},
                {"id":"","label":"Bruger","pattern":"","type":"number"},

            ],
            "rows": [

            ]
        };
        $.ajax({
            dataType:"JSON",
            url: "https://sheets.googleapis.com/v4/spreadsheets/1-bqZbCP8QKzkyF7CKmGcpaD_HO1dTu0j32grgt5vMhA/values/'Ark1'!A3%3AB13?majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyDQGWBsEDnNMNKu4c42rsGYaEhezRkxKpM"
        }).done(function (Data) {
            console.log(Data);
            $.each(Data.values, function (key, value) {
                chartData.rows.push(
                    {"c":[
                            {"v":value[0],"f":null},
                            {"v":value[1],"f":null},

                        ]}
                );
            });
            var data = new google.visualization.DataTable(chartData);
            var options = {
                chart: {
                    title: 'SoMe statistics',
                    subtitle: 'Facebook, Interaktioner',


                }
            };

            var chart = new google.charts.Bar(document.getElementById(HTMLElementId));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        });

    }


    function drawBarChartRange(HTMLElementId) {


        var chartData = {
            "cols": [
                {"id":"","label":"Rækkevide","pattern":"","type":"string"},
                {"id":"","label":"Bruger","pattern":"","type":"number"},

            ],
            "rows": [

            ]
        };
        $.ajax({
            dataType:"JSON",
            url: "https://sheets.googleapis.com/v4/spreadsheets/1-bqZbCP8QKzkyF7CKmGcpaD_HO1dTu0j32grgt5vMhA/values/'Ark1'!A15%3AB25?majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyDQGWBsEDnNMNKu4c42rsGYaEhezRkxKpM"
        }).done(function (Data) {
            console.log(Data);
            $.each(Data.values, function (key, value) {
                chartData.rows.push(
                    {"c":[
                            {"v":value[0],"f":null},
                            {"v":value[1],"f":null},

                        ]}
                );
            });
            var data = new google.visualization.DataTable(chartData);
            var options = {
                chart: {
                    title: 'SoMe statistics',
                    subtitle: 'Facebook, Rækkevide',


                }
            };

            var chart = new google.charts.Bar(document.getElementById(HTMLElementId));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        });

    }
    function drawBarChartDeling (HTMLElementId) {
        var chartData = {
            "cols": [
                {"id":"","label":"likes/delinger","pattern":"","type":"string"},
                {"id":"","label":"Likes","pattern":"","type":"number"},
                {"id":"","label":"Delinger","pattern":"","type":"number"}

            ],
            "rows": [

            ]
        };
        $.ajax({
            dataType:"JSON",
            url: "https://sheets.googleapis.com/v4/spreadsheets/1-bqZbCP8QKzkyF7CKmGcpaD_HO1dTu0j32grgt5vMhA/values/'Ark1'!A28%3AC29?majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyDQGWBsEDnNMNKu4c42rsGYaEhezRkxKpM"
        }).done(function (Data) {
            console.log(Data);
            $.each(Data.values, function (key, value) {
                chartData.rows.push(
                    {"c":[
                            {"v":value[0],"f":null},
                            {"v":value[1],"f":null},
                            {"v":value[2],"f":null}

                        ]}
                );
            });
            var data = new google.visualization.DataTable(chartData);
            var options = {
                chart: {
                    title: 'SoMe statistics',
                    subtitle: 'Facebook, Likes/delinger',


                }
            };

            var chart = new google.charts.Bar(document.getElementById(HTMLElementId));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        });
    }
    function drawBarChartTilgang (HTMLElementId) {
        var chartData = {
            "cols": [
                {"id":"","label":"Bruger flow igennem SoMe/Organic search/Direct search","pattern":"","type":"string"},
                {"id":"","label":"SoMe","pattern":"","type":"number"},
                {"id":"","label":"Organic search","pattern":"","type":"number"},
                {"id":"","label":"Direct search","pattern":"","type":"number"}

            ],
            "rows": [

            ]
        };
        $.ajax({
            dataType:"JSON",
            url: "https://sheets.googleapis.com/v4/spreadsheets/1-bqZbCP8QKzkyF7CKmGcpaD_HO1dTu0j32grgt5vMhA/values/'Ark1'!A32%3AD36?majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyDQGWBsEDnNMNKu4c42rsGYaEhezRkxKpM"
        }).done(function (Data) {
            console.log(Data);
            $.each(Data.values, function (key, value) {
                chartData.rows.push(
                    {"c":[
                            {"v":value[0],"f":null},
                            {"v":value[1],"f":null},
                            {"v":value[2],"f":null},
                            {"v":value[3],"f":null}

                        ]}
                );
            });
            var data = new google.visualization.DataTable(chartData);
            var options = {
                chart: {
                    title: 'SoMe statistics',
                    subtitle: 'Facebook, Likes/delinger',


                }
            };

            var chart = new google.charts.Bar(document.getElementById(HTMLElementId));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        });
    }
    function drawBarChartRatio (HTMLElementId) {
        var chartData = {
            "cols": [
                {"id":"","label":"PC/Mobil Ratio","pattern":"","type":"string"},
                {"id":"","label":"Procenter","pattern":"","type":"number"}


            ],
            "rows": [

            ]
        };
        $.ajax({
            dataType:"JSON",
            url: "https://sheets.googleapis.com/v4/spreadsheets/1-bqZbCP8QKzkyF7CKmGcpaD_HO1dTu0j32grgt5vMhA/values/'Ark1'!B39%3AC40?majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyDQGWBsEDnNMNKu4c42rsGYaEhezRkxKpM"
        }).done(function (Data) {
            console.log(Data);
            $.each(Data.values, function (key, value) {
                chartData.rows.push(
                    {"c":[
                            {"v":value[0],"f":null},
                            {"v":value[1],"f":null},


                        ]}
                );
            });
            var data = new google.visualization.DataTable(chartData);
            var options = {
                chart: {
                    title: 'SoMe statistics',
                    subtitle: 'Facebook, Likes/delinger',


                }
            };

            var chart = new google.charts.Bar(document.getElementById(HTMLElementId));

            chart.draw(data, google.charts.Bar.convertOptions(options));
        });
    }
});