/**
 * Created by Petrenko on 02.09.2016.
 */
$().ready(function() {
    $(document).ajaxError(function(p1, p2, p3, p4, p5) {
        console.log(p1)
        console.log(p2)
        console.log(p3)
        console.log(p4)
        console.log(p5)
        //alertify.error(response.message) + " (" + response.code + ")";
    });
    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });
    var from, to;
    $('#from').datetimepicker();
    $('#to').datetimepicker();
    loadAvailableKeyPairs();
    $(".btn-load-history").click(loadHistory);

    $('#from').on("dp.change", function (e) {
        from = e.timeStamp;
    });
    $('#to').on("dp.change", function (e) {
        to = e.timeStamp;
    });
    function loadHistory() {

    }
    function loadAvailableKeyPairs() {
        $.get("http://dgate2.devhost.io:8080/exchange/backtest/currencies", function(response) {
            addCurrencies(response.cps);
        });
    }


    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('date', 'Date');
        dataTable.addColumn('number', 'low');
        dataTable.addColumn('number', 'open');
        dataTable.addColumn('number', 'close');
        dataTable.addColumn('number', 'high');
        dataTable.addColumn({type: 'string', role: 'tooltip'});
        dataTable.addColumn({type: 'string', role: 'style'});
        dataTable.addRows([
            //time, low, open, close, high
            [new Date(2019,09,01), 20, 28, 38, 45, makeTooltip(new Date(2019,09,01), 20, 28, 38, 45, 'buy', '0.001', '40'), makeStyle('buy')],
            [new Date(2019,09,02), 31, 38, 55, 66, '', ''],
            [new Date(2019,09,03), 50, 55, 77, 80, '', ''],
            [new Date(2019,09,04), 77, 77, 66, 50, makeTooltip(new Date(2019,09,01), 20, 28, 38, 45, 'sell', '0.001', '40'), makeStyle('sell')],
            [new Date(2019,09,05), 68, 66, 22, 15, '', ''],
            [new Date(2019,09,06), 15, 66, 22, 68, '', ''],
            [new Date(2019,09,07), 20, 28, 38, 45, '', ''],
            [new Date(2019,09,08), 31, 38, 55, 66, '', ''],
            [new Date(2019,09,09), 50, 55, 77, 80, makeTooltip(new Date(2019,09,01), 20, 28, 38, 45, 'sell', '0.001', '40'), makeStyle('sell')],
            [new Date(2019,09,10), 177, 177, 166, 150, '', ''],
            [new Date(2019,09,11), 120, 128, 138, 145, '', ''],
            [new Date(2019,09,12), 131, 138, 155, 166, '', ''],
            [new Date(2019,09,13), 150, 155, 177, 180, '', ''],
            [new Date(2019,09,14), 177, 177, 166, 150, '', ''],
            [new Date(2019,09,15), 168, 166, 122, 115, '', ''],
            [new Date(2019,09,16), 115, 166, 122, 168, '', ''],
            [new Date(2019,09,17), 120, 128, 138, 145, '', ''],
            [new Date(2019,09,18), 131, 138, 155, 166, '', ''],
            [new Date(2019,09,19), 150, 155, 177, 180, '', ''],
            [new Date(2019,09,20), 77, 77, 66, 50, '', ''],
            [new Date(2019,09,21), 20, 28, 38, 45, '', ''],
            [new Date(2019,09,22), 31, 38, 55, 66, '', ''],
            [new Date(2019,09,23), 50, 55, 77, 80, '', ''],
            [new Date(2019,09,24), 77, 77, 66, 50, '', ''],
            [new Date(2019,09,25), 68, 66, 22, 15, '', ''],
            [new Date(2019,09,26), 15, 66, 22, 68, '', ''],
            [new Date(2019,09,27), 20, 28, 38, 45, '', ''],
            [new Date(2019,09,28), 31, 38, 55, 66, '', ''],
            [new Date(2019,09,29), 50, 55, 77, 80, '', ''],
            [new Date(2019,09,30), 50, 55, 77, 80, '', ''],
            [new Date(2019,10,01), 20, 28, 38, 45, '', ''],
            [new Date(2019,10,02), 31, 38, 55, 66, '', ''],
            [new Date(2019,10,03), 50, 55, 77, 80, '', ''],
            [new Date(2019,10,04), 77, 77, 66, 50, '', ''],
            [new Date(2019,10,05), 68, 66, 22, 15, '', ''],
            [new Date(2019,10,06), 15, 66, 22, 68, '', ''],
            [new Date(2019,10,07), 20, 28, 38, 45, '', ''],
            [new Date(2019,10,08), 31, 38, 55, 66, '', ''],
            [new Date(2019,10,09), 50, 55, 77, 80, '', ''],
            [new Date(2019,10,10), 177, 177, 166, 150, '', ''],
            [new Date(2019,10,11), 120, 128, 138, 145, '', ''],
            [new Date(2019,10,12), 131, 138, 155, 166, '', ''],
            [new Date(2019,10,13), 150, 155, 177, 180, '', ''],
            [new Date(2019,10,14), 177, 177, 166, 150, '', ''],
            [new Date(2019,10,15), 168, 166, 122, 115, '', ''],
            [new Date(2019,10,16), 115, 166, 122, 168, '', ''],
            [new Date(2019,10,17), 120, 128, 138, 145, '', ''],
            [new Date(2019,10,18), 131, 138, 155, 166, '', ''],
            [new Date(2019,10,19), 150, 155, 177, 180, '', ''],
            [new Date(2019,10,20), 77, 77, 66, 50, '', ''],
            [new Date(2019,10,21), 20, 28, 38, 45, '', ''],
            [new Date(2019,10,22), 31, 38, 55, 66, '', ''],
            [new Date(2019,10,23), 50, 55, 77, 80, '', ''],
            [new Date(2019,10,24), 77, 77, 66, 50, '', ''],
            [new Date(2019,10,25), 68, 66, 22, 15, '', ''],
            [new Date(2019,10,26), 15, 66, 22, 68, '', ''],
            [new Date(2019,10,27), 20, 28, 38, 45, '', ''],
            [new Date(2019,10,28), 31, 38, 55, 66, '', ''],
            [new Date(2019,10,29), 50, 55, 77, 80, '', ''],
            [new Date(2019,10,30), 50, 55, 77, 80, '', ''],
            [new Date(2019,11,01), 20, 28, 38, 45, '', ''],
            [new Date(2019,11,02), 31, 38, 55, 66, '', ''],
            [new Date(2019,11,03), 50, 55, 77, 80, '', ''],
            [new Date(2019,11,04), 77, 77, 66, 50, '', ''],
            [new Date(2019,11,05), 68, 66, 22, 15, '', ''],
            [new Date(2019,11,06), 15, 66, 22, 68, '', ''],
            [new Date(2019,11,07), 20, 28, 38, 45, '', ''],
            [new Date(2019,11,08), 31, 38, 55, 66, '', ''],
            [new Date(2019,11,09), 50, 55, 77, 80, '', ''],
            [new Date(2019,11,10), 177, 177, 166, 150, '', ''],
            [new Date(2019,11,11), 120, 128, 138, 145, '', ''],
            [new Date(2019,11,12), 131, 138, 155, 166, '', ''],
            [new Date(2019,11,13), 150, 155, 177, 180, '', ''],
            [new Date(2019,11,14), 177, 177, 166, 150, '', ''],
            [new Date(2019,11,15), 168, 166, 122, 115, '', ''],
            [new Date(2019,11,16), 115, 166, 122, 168, '', ''],
            [new Date(2019,11,17), 120, 128, 138, 145, '', ''],
            [new Date(2019,11,18), 131, 138, 155, 166, '', ''],
            [new Date(2019,11,19), 150, 155, 177, 180, '', ''],
            [new Date(2019,11,20), 77, 77, 66, 50, '', ''],
            [new Date(2019,11,21), 20, 28, 38, 45, '', ''],
            [new Date(2019,11,22), 31, 38, 55, 66, '', ''],
            [new Date(2019,11,23), 50, 55, 77, 80, '', ''],
            [new Date(2019,11,24), 77, 77, 66, 50, '', ''],
            [new Date(2019,11,25), 68, 66, 22, 15, '', ''],
            [new Date(2019,11,26), 15, 66, 22, 68, '', ''],
            [new Date(2019,11,27), 20, 28, 38, 45, '', ''],
            [new Date(2019,11,28), 31, 38, 55, 66, '', ''],
            [new Date(2019,11,29), 50, 55, 77, 80, '', ''],
            [new Date(2019,11,30), 50, 55, 77, 80, '', '']
            // Treat first row as data as well.
        ], true);

        var options = {
            legend:'none'

            //bar: { groupWidth: '90%' }, // Remove space between bars.
            //chartArea: {backgroundColor: "#000"}
        };

        var chart = new google.visualization.CandlestickChart(document.getElementById('chart-history'));
        chart.draw(dataTable, options);
        console.log(options);

        function makeTooltip(date, low, open, close, high, tradeType, tradeVolume, tradePrice) {
            var message = '';
            if (tradeType) {
                if (tradeType == 'sell') {
                    message += "SOLD ->"
                } else if (tradeType == 'buy') {
                    message += "BOUGHT ->"
                }
                message += " volume: " + tradeVolume + ", price: " + tradePrice + "\n";
            }
            message += "date: " + date + "\n";
            message += "low: " + low + ", high: " + high + "\n";
            message += "open: " + open + ", close: " + close + "\n";
            return message;
        }

        function makeStyle(tradeType) {
            if (tradeType == 'buy') {
                return "stroke-width: 4; stroke-opacity: 0.75; stroke-color: #33cc4d"
            } else if (tradeType == 'sell') {
                return "stroke-width: 4; stroke-opacity: 0.75; stroke-color: #cc334d"
            }
        }
    }

    function addCurrencies(currencies) {
        var select = $('#currencies'),
            content = "";
        currencies.forEach(function(element) {
            content += "<option>" + element + "</option>";
        });
        console.log(content);
        select.html(content);
        select.selectpicker('refresh');
    }
});