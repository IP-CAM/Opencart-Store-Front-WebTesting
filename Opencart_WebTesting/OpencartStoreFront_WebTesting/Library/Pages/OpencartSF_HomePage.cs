using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Text;

namespace OpencartStoreFront_WebTesting.Library.Pages
{
    public class OpencartSF_HomePage
    {
        public IWebDriver seleniumDriver;

        public OpencartSF_HomePage(IWebDriver _seleniumDriver)
        {
            seleniumDriver = _seleniumDriver;
        }
    }
}
