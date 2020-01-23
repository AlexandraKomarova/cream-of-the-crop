function showBorders(){   
    var addListenersOnPolygon = function(polygon) {
        google.maps.event.addListener(polygon, 'click', function (event) {
        console.log("clicked")
                var request = {
                    location: {lat:40.715033,lng:-73.984272},
                    radius: "3000",
                    type: ["restaurant"]
                };
                service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, callback);
            
            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK){
                    console.log(results)
                    var topSorted = results.slice(0, 4) 
                    for (var i = 0; i < topSorted.length; i++) {
                        var place = topSorted[i];
            
                        let content = `<h3>${place.name}</h3>
                        <h4>${place.vicinity}</h4>
            
                        Rating: ${place.rating}
                        </p>`;
                        var marker = new google.maps.Marker({
                            position: place.geometry.location,
                            map: map,
                            title: place.name
                        });
                        var infowindow = new google.maps.InfoWindow({
                            content: content
                        });
                        bindInfoWindow(marker, map, infowindow, content);
                        marker.setMap(map);
                    }
                }
            }
            function bindInfoWindow (marker, map, infowindow, html) {
                marker.addListener("click", function() {
                    infowindow.setContent(html);
                    infowindow.open(map, this);
                });
            }
        });  
    }

    var LESCoords = [ 
        { 
            lat:40.7150577,
            lng:-73.9925069
        },
        { 
            lat:40.716184,
            lng:-73.9919114
        },
        { 
            lat:40.7173794,
            lng:-73.9913106
        },
        { 
            lat:40.7192253,
            lng:-73.9903611
        },
        { 
            lat:40.7216281,
            lng:-73.9891273
        },
        { 
            lat:40.7229413,
            lng:-73.9886606
        },
        { 
            lat:40.7214777,
            lng:-73.9838433
        },
        { 
            lat:40.7206889,
            lng:-73.9813113
        },
        { 
            lat:40.719908,
            lng:-73.978736
        },
        { 
            lat:40.719274,
            lng:-73.977191
        },
        { 
            lat:40.718558,
            lng:-73.973565
        },
        { 
            lat:40.714688,
            lng:-73.975024
        },
        { 
            lat:40.711614,
            lng:-73.976569
        },
        { 
            lat:40.7105971,
            lng:-73.9778888
        },
        { 
            lat:40.7105321,
            lng:-73.9780551
        },
        { 
            lat:40.7104914,
            lng:-73.9782429
        },
        { 
            lat:40.7103206,
            lng:-73.980335
        },
        { 
            lat:40.71028,
            lng:-73.9803243
        },
        { 
            lat:40.7102149,
            lng:-73.9812952
        },
        { 
            lat:40.7098205,
            lng:-73.9812309
        },
        { 
            lat:40.709117,
            lng:-73.9884996
        },
        { 
            lat:40.7099099,
            lng:-73.9886445
        },
        { 
            lat:40.7099343,
            lng:-73.9887249
        },
        { 
            lat:40.709975,
            lng:-73.9887732
        },
        { 
            lat:40.7097635,
            lng:-73.9902806
        },
        { 
            lat:40.709544,
            lng:-73.9918631
        },
        { 
            lat:40.7107598,
            lng:-73.9920402
        },
        { 
            lat:40.7112071,
            lng:-73.9922601
        },
        { 
            lat:40.7127563,
            lng:-73.9924693
        },
        { 
            lat:40.7143665,
            lng:-73.9926893
        },
        { 
            lat:40.7146389,
            lng:-73.9927107
        }
    ]
    var LESBorderOutline = new google.maps.Polygon({
    paths: LESCoords,
    strokeColor: 'black',
    strokeWeight: 2,
    fillColor: 'transparent',
    });
    LESBorderOutline.setMap(map);
    addListenersOnPolygon(LESBorderOutline);

    var alphabetCityCoords = [ 
        { 
            lat:40.7221529,
            lng:-73.98629
        },
        { 
            lat:40.7305433,
            lng:-73.9802385
        },
        { 
            lat:40.7286327,
            lng:-73.9757002
        },
        { 
            lat:40.7313482,
            lng:-73.9738227
        },
        { 
            lat:40.7311694,
            lng:-73.9733828
        },
        { 
            lat:40.7310637,
            lng:-73.9732325
        },
        { 
            lat:40.7308442,
            lng:-73.9730288
        },
        { 
            lat:40.7305677,
            lng:-73.9726961
        },
        { 
            lat:40.7303482,
            lng:-73.9724172
        },
        { 
            lat:40.7301287,
            lng:-73.9720954
        },
        { 
            lat:40.729836,
            lng:-73.9718056
        },
        { 
            lat:40.7295514,
            lng:-73.9716126
        },
        { 
            lat:40.729275,
            lng:-73.9714837
        },
        { 
            lat:40.7289579,
            lng:-73.9714302
        },
        { 
            lat:40.7286246,
            lng:-73.9714302
        },
        { 
            lat:40.7282018,
            lng:-73.9715052
        },
        { 
            lat:40.7276327,
            lng:-73.9715804
        },
        { 
            lat:40.7276408,
            lng:-73.9716661
        },
        { 
            lat:40.7274335,
            lng:-73.9717037
        },
        { 
            lat:40.7274091,
            lng:-73.9715052
        },
        { 
            lat:40.7258073,
            lng:-73.9717788
        },
        { 
            lat:40.7258236,
            lng:-73.971854
        },
        { 
            lat:40.7253723,
            lng:-73.9718485
        },
        { 
            lat:40.7231607,
            lng:-73.9724064
        },
        { 
            lat:40.7220549,
            lng:-73.9727068
        },
        { 
            lat:40.7187048,
            lng:-73.9734364
        },
        { 
            lat:40.7194285,
            lng:-73.9772022
        },
        { 
            lat:40.7199977,
            lng:-73.9786721
        }
    ];
    var alphabetCityBorderOutline = new google.maps.Polygon({
        paths: alphabetCityCoords,
        strokeColor: 'black',
        strokeWeight: 2,
        fillColor: 'transparent',
        });
        alphabetCityBorderOutline.setMap(map);   

    var chinatownCoords = [ 
           { 
              lat:40.7170824,
              lng:-73.998617
           },
           { 
              lat:40.7162488,
              lng:-73.9960422
           },
           { 
              lat:40.7172411,
              lng:-73.9954844
           },
           { 
              lat:40.718412,
              lng:-73.9948405
           },
           { 
              lat:40.7181434,
              lng:-73.9938213
           },
           { 
              lat:40.717916,
              lng:-73.9930702
           },
           { 
              lat:40.7176759,
              lng:-73.9922065
           },
           { 
              lat:40.7173749,
              lng:-73.991284
           },
           { 
              lat:40.716188,
              lng:-73.9919169
           },
           { 
              lat:40.7150577,
              lng:-73.9925122
           },
           { 
              lat:40.7146552,
              lng:-73.9927054
           },
           { 
              lat:40.7143706,
              lng:-73.9926841
           },
           { 
              lat:40.7131747,
              lng:-73.9925285
           },
           { 
              lat:40.7130694,
              lng:-73.993038
           },
           { 
              lat:40.7130694,
              lng:-73.9940036
           },
           { 
              lat:40.7130368,
              lng:-73.9946473
           },
           { 
              lat:40.7129718,
              lng:-73.9950765
           },
           { 
              lat:40.7129555,
              lng:-73.9955271
           },
           { 
              lat:40.7129067,
              lng:-73.9958919
           },
           { 
              lat:40.7128742,
              lng:-73.996321
           },
           { 
              lat:40.7128417,
              lng:-73.9967287
           },
           { 
              lat:40.7128254,
              lng:-73.9971364
           },
           { 
              lat:40.7127929,
              lng:-73.9975441
           },
           { 
              lat:40.7127766,
              lng:-73.9979734
           },
           { 
              lat:40.7132808,
              lng:-73.9981879
           },
           { 
              lat:40.7134921,
              lng:-73.9985847
           },
           { 
              lat:40.7139232,
              lng:-73.9995398
           },
           { 
              lat:40.7151672,
              lng:-73.9996415
           },
           { 
              lat:40.7159035,
              lng:-73.9993306
           },
           { 
              lat:40.7162039,
              lng:-74.0001298
           },
           { 
              lat:40.7165498,
              lng:-73.9999206
           },
           { 
              lat:40.7175579,
              lng:-73.9993143
           }
        ]
        var chinatownBorderOutline = new google.maps.Polygon({
            paths: chinatownCoords,
            strokeColor: 'black',
            strokeWeight: 2,
            fillColor: 'transparent',
        });
        chinatownBorderOutline.setMap(map);   
    
    var sohoCoords = [ 
           { 
              lat:40.7235836,
              lng:-74.0048933
           },
           { 
              lat:40.7258277,
              lng:-74.0038633
           },
           { 
              lat:40.7283319,
              lng:-74.0027904
           },
           { 
              lat:40.7256976,
              lng:-73.9975119
           },
           { 
              lat:40.7251122,
              lng:-73.9951944
           },
           { 
              lat:40.7234372,
              lng:-73.9966536
           },
           { 
              lat:40.7222988,
              lng:-73.9971149
           },
           { 
              lat:40.7214614,
              lng:-73.9973617
           },
           { 
              lat:40.7208108,
              lng:-73.9976406
           },
           { 
              lat:40.717973,
              lng:-73.9999366
           },
           { 
              lat:40.7218435,
              lng:-74.0053116
           }
        ]
        var sohoBorderOutline = new google.maps.Polygon({
            paths: sohoCoords,
            strokeColor: 'black',
            strokeWeight: 2,
            fillColor: 'transparent',
        });
        sohoBorderOutline.setMap(map);   
    
    var nolitaCoords = [ 
           { 
              "lat":40.7208596,
              "lng":-73.9976299
           },
           { 
              "lat":40.7214613,
              "lng":-73.9973778
           },
           { 
              "lat":40.721893,
              "lng":-73.9972422
           },
           { 
              "lat":40.7223273,
              "lng":-73.9971042
           },
           { 
              "lat":40.7229665,
              "lng":-73.9968531
           },
           { 
              "lat":40.7234372,
              "lng":-73.9966482
           },
           { 
              "lat":40.7250228,
              "lng":-73.9953607
           },
           { 
              "lat":40.7248946,
              "lng":-73.9949638
           },
           { 
              "lat":40.7246324,
              "lng":-73.9942074
           },
           { 
              "lat":40.7241081,
              "lng":-73.9927268
           },
           { 
              "lat":40.721624,
              "lng":-73.9935744
           },
           { 
              "lat":40.7203717,
              "lng":-73.9940626
           },
           { 
              "lat":40.7198148,
              "lng":-73.9942395
           },
           { 
              "lat":40.7195057,
              "lng":-73.9943683
           },
           { 
              "lat":40.719831,
              "lng":-73.9952427
           },
           { 
              "lat":40.7204856,
              "lng":-73.9968359
           }
        ];
        var nolitaBorderOutline = new google.maps.Polygon({
            paths: nolitaCoords,
            strokeColor: 'black',
            strokeWeight: 2,
            fillColor: 'transparent',
        });
        nolitaBorderOutline.setMap(map);   

    var littleItalyCoords = [ 
           { 
              "lat":40.7179891,
              "lng":-73.9999902
           },
           { 
              "lat":40.7208351,
              "lng":-73.9976514
           },
           { 
              "lat":40.7201724,
              "lng":-73.9960206
           },
           { 
              "lat":40.7198105,
              "lng":-73.9953125
           },
           { 
              "lat":40.7193716,
              "lng":-73.9944113
           },
           { 
              "lat":40.7183958,
              "lng":-73.9949048
           },
           { 
              "lat":40.7172411,
              "lng":-73.9954627
           },
           { 
              "lat":40.7162165,
              "lng":-73.9961064
           },
           { 
              "lat":40.7170702,
              "lng":-73.9986598
           },
           { 
              "lat":40.7175662,
              "lng":-73.9993574
           }
        ];
        var littleItalyBorderOutline = new google.maps.Polygon({
            paths: littleItalyCoords,
            strokeColor: 'black',
            strokeWeight: 2,
            fillColor: 'transparent',
        });
        littleItalyBorderOutline.setMap(map);  
}




 