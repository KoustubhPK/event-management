document.addEventListener('DOMContentLoaded', function() {
    (function () {
        let cardColor, headingColor, axisColor, shadeColor, borderColor;
        cardColor = config.colors.white;
        headingColor = config.colors.headingColor;
        axisColor = config.colors.axisColor;
        borderColor = config.colors.borderColor;
  
        var attendedGuests = guestData.attendedGuests;
  
        const growthChartEl = document.querySelector('#attendedGrowthChart'),
            growthChartOptions = {
                series: [attendedGuests],
                labels: ['Attended'],
                chart: {
                    height: 150,
                    type: 'radialBar'
                },
                plotOptions: {
                    radialBar: {
                        size: 150,
                        offsetY: 10,
                        startAngle: -150,
                        endAngle: 150,
                        hollow: {
                            size: '70%'
                        },
                        track: {
                            background: cardColor,
                            strokeWidth: '100%'
                        },
                        dataLabels: {
                            name: {
                                offsetY: 15,
                                color: headingColor,
                                fontSize: '12px',
                                fontWeight: '600',
                                fontFamily: 'Public Sans'
                            },
                            value: {
                                offsetY: -25,
                                color: headingColor,
                                fontSize: '18px',
                                fontWeight: '250',
                                fontFamily: 'Public Sans'
                            }
                        }
                    }
                },
                colors: [config.colors.success],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.5,
                        gradientToColors: [config.colors.success],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 0.6,
                        stops: [30, 70, 100]
                    }
                },
                stroke: {
                    // dashArray: 5
                    lineCap: 'round'
                },
                grid: {
                    padding: {
                        top: -20,
                        bottom: -10
                    }
                },
                states: {
                    hover: {
                        filter: {
                            type: 'none'
                        }
                    },
                    active: {
                        filter: {
                            type: 'none'
                        }
                    }
                }
            };
        if (typeof growthChartEl !== 'undefined' && growthChartEl !== null) {
            const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
            growthChart.render();
        }
    })();
  });

document.addEventListener('DOMContentLoaded', function() {
  (function () {
      let cardColor, headingColor, axisColor, shadeColor, borderColor;
      cardColor = config.colors.white;
      headingColor = config.colors.headingColor;
      axisColor = config.colors.axisColor;
      borderColor = config.colors.borderColor;

      var mostInvolved = guestData.mostInvolved;

      const growthChartEl = document.querySelector('#mostGrowthChart'),
          growthChartOptions = {
              series: [mostInvolved],
              labels: ['Max'],
              chart: {
                  height: 150,
                  type: 'radialBar'
              },
              plotOptions: {
                  radialBar: {
                      size: 150,
                      offsetY: 10,
                      startAngle: -150,
                      endAngle: 150,
                      hollow: {
                          size: '70%'
                      },
                      track: {
                          background: cardColor,
                          strokeWidth: '100%'
                      },
                      dataLabels: {
                          name: {
                              offsetY: 15,
                              color: headingColor,
                              fontSize: '12px',
                              fontWeight: '600',
                              fontFamily: 'Public Sans'
                          },
                          value: {
                              offsetY: -25,
                              color: headingColor,
                              fontSize: '18px',
                              fontWeight: '250',
                              fontFamily: 'Public Sans'
                          }
                      }
                  }
              },
              colors: [config.colors.primary],
              fill: {
                  type: 'gradient',
                  gradient: {
                      shade: 'dark',
                      shadeIntensity: 0.5,
                      gradientToColors: [config.colors.primary],
                      inverseColors: true,
                      opacityFrom: 1,
                      opacityTo: 0.6,
                      stops: [30, 70, 100]
                  }
              },
              stroke: {
                  lineCap: 'round'
              },
              grid: {
                  padding: {
                      top: -20,
                      bottom: -10
                  }
              },
              states: {
                  hover: {
                      filter: {
                          type: 'none'
                      }
                  },
                  active: {
                      filter: {
                          type: 'none'
                      }
                  }
              }
          };
      if (typeof growthChartEl !== 'undefined' && growthChartEl !== null) {
          const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
          growthChart.render();
      }
  })();
});


document.addEventListener('DOMContentLoaded', function() {
  (function () {
      let cardColor, headingColor, axisColor, shadeColor, borderColor;
      cardColor = config.colors.white;
      headingColor = config.colors.headingColor;
      axisColor = config.colors.axisColor;
      borderColor = config.colors.borderColor;

      var leastInvolved = guestData.leastInvolved;

      const growthChartEl = document.querySelector('#leastGrowthChart'),
          growthChartOptions = {
              series: [leastInvolved],
              labels: ['Min'],
              chart: {
                  height: 150,
                  type: 'radialBar'
              },
              plotOptions: {
                  radialBar: {
                      size: 150,
                      offsetY: 10,
                      startAngle: -150,
                      endAngle: 150,
                      hollow: {
                          size: '70%'
                      },
                      track: {
                          background: cardColor,
                          strokeWidth: '100%'
                      },
                      dataLabels: {
                          name: {
                              offsetY: 15,
                              color: headingColor,
                              fontSize: '12px',
                              fontWeight: '600',
                              fontFamily: 'Public Sans'
                          },
                          value: {
                              offsetY: -25,
                              color: headingColor,
                              fontSize: '18px',
                              fontWeight: '250',
                              fontFamily: 'Public Sans'
                          }
                      }
                  }
              },
              colors: [config.colors.danger],
              fill: {
                  type: 'gradient',
                  gradient: {
                      shade: 'dark',
                      shadeIntensity: 0.5,
                      gradientToColors: [config.colors.danger],
                      inverseColors: true,
                      opacityFrom: 1,
                      opacityTo: 0.6,
                      stops: [30, 70, 100]
                  }
              },
              stroke: {
                  lineCap: 'round'
              },
              grid: {
                  padding: {
                      top: -20,
                      bottom: -10
                  }
              },
              states: {
                  hover: {
                      filter: {
                          type: 'none'
                      }
                  },
                  active: {
                      filter: {
                          type: 'none'
                      }
                  }
              }
          };
      if (typeof growthChartEl !== 'undefined' && growthChartEl !== null) {
          const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
          growthChart.render();
      }
  })();
});