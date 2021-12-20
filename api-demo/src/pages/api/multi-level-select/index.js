Page({
  onShowMultiLevelSelect() {
    if (my.canIUse('multiLevelSelect')) {
      my.multiLevelSelect({
        title: 'Place of birth',
        suggest: 'Please chosse',
        list: [
          {
            name: 'Hangzhou City',
            subList: [
              {
                name: 'West Lake District',
                subList: [
                  {
                    name: 'Gucui Street',
                  },
                  {
                    name: 'Wenxin Street',
                  },
                ],
              },
              {
                name: 'Uptown',
                subList: [
                  {
                    name: "Yan'an Street",
                  },
                  {
                    name: 'Longxiangqiao Street',
                    subList: [
                      {
                        name: 'Longxiangqiao Street 1',
                      },
                      {
                        name: 'Longxiangqiao Street 2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Shanghai City', 
          },
          {
            name: 'HCM City', 
            subList: [
              {
                name: "District 1",
              },
              {
                name: 'District 3',
              },
            ],
          },
        ],
        success: (res) => {
          my.alert({
            title: `Result: ${JSON.stringify(res)}`,
          });
        },
      });
    }
  },
});
