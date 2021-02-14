jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "OpencartSF_HomePage.feature",
      "Feature": {
        "Name": "OpencartSF_HomePage",
        "Description": "The landing page of the website with access to logging in and product search",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "currency",
                    "symbol"
                  ],
                  "DataRows": [
                    [
                      "EUR",
                      "€",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "GBP",
                      "£",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "USD",
                      "$",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Changing the currency of featured products",
            "Slug": "changing-the-currency-of-featured-products",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the homepage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the featured product currency list",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I select a currency <currency>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the price of all featured products contains the currency symbol <symbol>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "option",
                    "url"
                  ],
                  "DataRows": [
                    [
                      "Register",
                      "https://demo.opencart.com/index.php?route=account/register",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "Login",
                      "https://demo.opencart.com/index.php?route=account/login",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Selecting an option from the account drop down menu",
            "Slug": "selecting-an-option-from-the-account-drop-down-menu",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the homepage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click the my account drop down menu",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I select an option <option>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am redirected to the URL <url>",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#| My Account    | https://demo.opencart.com/index.php?route=account/login       |"
                  },
                  {
                    "Text": "#| Order History | https://demo.opencart.com/index.php?route=account/order       |"
                  },
                  {
                    "Text": "#| Transactions  | https://demo.opencart.com/index.php?route=account/transaction |"
                  },
                  {
                    "Text": "#| Downloads     | https://demo.opencart.com/index.php?route=account/download    |"
                  },
                  {
                    "Text": "#| Logout        | https://demo.opencart.com/index.php?route=account/logout      |"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "query"
                  ],
                  "DataRows": [
                    [
                      "mac",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "apple",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "a",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Filtering products by search box query",
            "Slug": "filtering-products-by-search-box-query",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the homepage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter a query <query> into the search box",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I press the search button",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "only products containing that query string are returned",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "category"
                  ],
                  "DataRows": [
                    [
                      "Desktops",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "Laptops & Notebooks",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "Components",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Navigating to different product category pages",
            "Slug": "navigating-to-different-product-category-pages",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I am on the homepage",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I hover over the product category <category>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click to see All <category>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I am redirected to a page which only shows products from <category>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    }
  ],
  "Summary": {
    "Tags": [],
    "Folders": [
      {
        "Folder": "OpencartSF_HomePage.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "OpencartSF_HomePage.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 4,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 4
    },
    "Features": {
      "Total": 1,
      "Passing": 1,
      "Failing": 0,
      "Inconclusive": 0
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "OpencartSF_HomePage.feature",
        "Total": 4,
        "Automated": 4,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "SutName": "Demo",
    "SutVersion": "v1.0",
    "GeneratedOn": "14 February 2021 20:10:23"
  }
});