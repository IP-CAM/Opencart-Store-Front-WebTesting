using NUnit.Framework;
using OpenQA.Selenium.Chrome;
using System;
using System.Linq;
using TechTalk.SpecFlow;

namespace OpencartStoreFront_WebTesting.Library.SpecFlow.Steps
{
    [Binding]
    public class OpencartSF_HomePageSteps
    {
        public OpencartSF_Website<ChromeDriver> opencartSF_Website;
        public string filterWord;
        
        [BeforeScenario]
        public void SetUp()
        {
            opencartSF_Website = new OpencartSF_Website<ChromeDriver>();
        }

        [Given(@"I am on the homepage")]
        public void GivenIAmOnTheHomepage()
        {
            opencartSF_Website.OpencartSF_HomePage.NavigateToHomePage();
        }

        [When(@"I click the featured product currency list")]
        public void WhenIClickTheFeaturedProductCurrencyList()
        {
            opencartSF_Website.OpencartSF_HomePage.ClickCurrencyDropDown();
        }

        [When(@"I select a currency (.*)")]
        public void WhenISelectACurrency(string currency)
        {
            opencartSF_Website.OpencartSF_HomePage.ClickCurrency(currency);
        }

        [Then(@"the price of all featured products contains the currency symbol (.*)")]
        public void ThenThePriceOfAllFeaturedProductsContainsTheCurrencySymbol(string symbol)
        {
            Assert.That(opencartSF_Website.OpencartSF_HomePage.GetFeaturedProductPrices().Where(e => e.Contains(symbol)).Count, Is.EqualTo(4));
        }


        [When(@"I click the my account drop down menu")]
        public void WhenIClickTheMyAccountDropDownMenu()
        {
            opencartSF_Website.OpencartSF_HomePage.ClickMyAccountDropDown();
        }

        [When(@"I select an option (.*)")]
        public void WhenISelectAnOption(string option)
        {
            opencartSF_Website.OpencartSF_HomePage.ClickOption(option);
        }

        [Then(@"I am redirected to the URL (.*)")]
        public void ThenIAmRedirectedToTheURL(string url)
        {
            Assert.That(opencartSF_Website.OpencartSF_HomePage.seleniumDriver.Url, Is.EqualTo(url));
        }

        [When(@"I enter a query (.*) into the search box")]
        public void WhenIEnterAQueryIntoTheSearchBox(string filterWord)
        {
            this.filterWord = filterWord;
            opencartSF_Website.OpencartSF_HomePage.EnterStringIntoSearchBox(filterWord);
        }


        [When(@"I press the search button")]
        public void WhenIPressTheSearchButton()
        {
            opencartSF_Website.OpencartSF_HomePage.ClickSearchButton();
        }

        [Then(@"only products containing that query string are returned")]
        public void ThenOnlyProductsContainingThatQueryStringAreReturned()
        {  
            Assert.That(opencartSF_Website.OpencartSF_HomePage.GetFilteredProductNames().All(e => e.Contains(filterWord)), Is.True);
        }


        [When(@"I hover over the product category (.*)")]
        public void WhenIHoverOverTheProductCategory(string category)
        {
            opencartSF_Website.OpencartSF_HomePage.HoverOverProductCategoryTab(category);
        }

        [When(@"I click to see All (.*)")]
        public void WhenIClickToSeeAll(string category)
        {
            opencartSF_Website.OpencartSF_HomePage.ClickOnProductCategory(category);
        }

        [Then(@"I am redirected to a page which only shows products from (.*)")]
        public void ThenIAmRedirectedToAPageWhichOnlyShowsProductsFrom(string category)
        {
            Assert.That(opencartSF_Website.OpencartSF_HomePage.GetProductCategoryPageHeader(), Is.EqualTo(category));
        }



        [AfterScenario]
        public void TearDown()
        {
            opencartSF_Website.SeleniumDriver.Quit();
            opencartSF_Website.SeleniumDriver.Dispose();
        }
    }
}
