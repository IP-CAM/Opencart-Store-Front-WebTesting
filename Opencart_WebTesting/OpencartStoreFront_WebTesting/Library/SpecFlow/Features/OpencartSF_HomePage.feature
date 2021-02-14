Feature: OpencartSF_HomePage
	The landing page of the website with access to logging in and product search

Background: The user is on the home page
	Given I am on the homepage

@CurrencyOfFeaturedProducts
Scenario: Changing the currency of featured products
	When I click the featured product currency list
	And I select a currency <currency>
	Then the price of all featured products contains the currency symbol <symbol>
	Examples:
	| currency | symbol |
	| EUR      | €      |
	| GBP      | £      |
	| USD      | $      |

@AccountDropDown
Scenario: Selecting an option from the account drop down meni
	When I click the my account drop down menu
	And I select an option <option>
	Then I am redirected to the URL <url>
	Examples:
	| option   | url                                                        |
	| Register | https://demo.opencart.com/index.php?route=account/register |
	| Login    | https://demo.opencart.com/index.php?route=account/login    |

	#| My Account    | https://demo.opencart.com/index.php?route=account/login       |
	#| Order History | https://demo.opencart.com/index.php?route=account/order       |
	#| Transactions  | https://demo.opencart.com/index.php?route=account/transaction |
	#| Downloads     | https://demo.opencart.com/index.php?route=account/download    |
	#| Logout        | https://demo.opencart.com/index.php?route=account/logout      |


@SearchBoxFunctionality
Scenario: Filtering products by search box query
	When I enter a query <query> into the search box
	And I press the search button
	Then only products containing that query string are returned
	Examples:
	| query |
	| mac   |
	| apple |
	| a     |


@NavigatingToRelevantProductPage
Scenario: Navigating to different product category pages
	When I hover over the product category <category>
	And I click to see All <category>
	Then I am redirected to a page which only shows products from <category>
	Examples:
	| category |
	| Desktops |
	| Laptops & Notebooks |
	| Components |