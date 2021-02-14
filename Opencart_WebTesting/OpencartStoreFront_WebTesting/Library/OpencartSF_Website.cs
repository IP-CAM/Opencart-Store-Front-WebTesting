using OpencartStoreFront_WebTesting.Library.Driver_Config;
using OpencartStoreFront_WebTesting.Library.Pages;
using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Text;

namespace OpencartStoreFront_WebTesting.Library
{
    public class OpencartSF_Website<T> where T : IWebDriver, new()
    {
        public T SeleniumDriver { get; internal set; }
        public OpencartSF_HomePage OpencartSF_HomePage { get; set; }

        public OpencartSF_Website(int pageLoadInSecs = 5, int implicitWaitInSecs = 5)
        {
            SeleniumDriver = new SeleniumDriverConfig<T>(pageLoadInSecs, implicitWaitInSecs).Driver;

            OpencartSF_HomePage = new OpencartSF_HomePage(SeleniumDriver);
        }

    }
}
