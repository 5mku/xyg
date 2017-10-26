  $(document).ready(function() {  
                       var chart = {
                           plotBackgroundColor: null,
                           plotBorderWidth: null,
                           plotShadow: false
                       };
                       var title = {
                          text: ''   
                       };      
                       var tooltip = {
                          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                       };
                       var plotOptions = {
                          pie: {
                             allowPointSelect: true,
                             cursor: 'pointer',
                             dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                                style: {
                                   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                             }
                          }
                       };
                       var series= [{
                          type: 'pie',
                          name: 'Browser share',
                          data: [
                             ['0~1个月',   45.0],
                             ['1~3个月',       25.0],
                             ['3~6个月',     15],
                             ['6个月以上',   15]
                          ]
                       }];     
                          
                       var json = {};   
                       json.chart = chart; 
                       json.title = title;     
                       json.tooltip = tooltip;  
                       json.series = series;
                       json.plotOptions = plotOptions;
                       $('#container1').highcharts(json);  
                    });
  $(document).ready(function() {  
   var chart = {
      type: 'column'
   };
   var title = {
      text: ''   
   };
   var subtitle = {
      text: ''  
   };
   var xAxis = {
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12'],
      crosshair: true
   };
   var yAxis = {
      min: 0,
      title: {
         text: ''         
      }      
   };
   var tooltip = {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y:.1f} 元</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   };
   var plotOptions = {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   };  
   var credits = {
      enabled: false
   };
   
   var series= [{
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.subtitle = subtitle; 
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;  
   json.credits = credits;
   $('#container').highcharts(json);
  
});