using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OpencartStoreFront_WebTesting.Library.Pages
{
    public class OpencartSF_HomePage
    {
        public IWebDriver seleniumDriver;

        private string baseUrl = "https://demo.opencart.com/";
        private IWebElement currencyDropDown => seleniumDriver.FindElement(By.ClassName("dropdown-toggle"));
        private IWebElement myAccountDropDown => seleniumDriver.FindElement(By.CssSelector("[title*='My Account']"));
        private IWebElement searchBox => seleniumDriver.FindElement(By.Name("search"));
        private IWebElement searchButton => seleniumDriver.FindElement(By.ClassName("btn-default"));


        public OpencartSF_HomePage(IWebDriver _seleniumDriver)
        {
            seleniumDriver = _seleniumDriver;
        }


        public void NavigateToHomePage() => seleniumDriver.Navigate().GoToUrl(baseUrl);

        public void ClickCurrencyDropDown() => currencyDropDown.Click();

        public void ClickCurrency(string currency) => seleniumDriver.FindElement(By.Name(currency)).Click();

        public string[] GetFeaturedProductPrices() => seleniumDriver.FindElements(By.ClassName("price")).Select(e => e.Text).ToArray();

        public void ClickMyAccountDropDown() => myAccountDropDown.Click();

        public void ClickOption(string option) => seleniumDriver.FindElement(By.LinkText(option)).Click();

        public void EnterStringIntoSearchBox(string query) => searchBox.SendKeys(query);

        public void ClickSearchButton() => searchButton.Click();

        public string[] GetFilteredProductNames() => seleniumDriver.FindElements(By.XPath("//div[contains(@class,'caption')]/h1/a")).Select(e => e.Text).ToArray();

        public void HoverOverProductCategoryTab(string category)
        {
            Actions action = new Actions(seleniumDriver);
            action.MoveToElement(seleniumDriver.FindElement(By.LinkText(category))).Perform();
        }

        public void ClickOnProductCategory(string category) => seleniumDriver.FindElement(By.LinkText($"Show All {category}")).Click();

        public string GetProductCategoryPageHeader() => seleniumDriver.FindElement(By.XPath("//div[contains(@id,'content')]/h2")).Text;
    }
}
