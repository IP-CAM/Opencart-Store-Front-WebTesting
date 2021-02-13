using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Text;

namespace OpencartStoreFront_WebTesting.Library.Driver_Config
{
    public class SeleniumDriverConfig<T> where T : IWebDriver, new()
    {
        public T Driver { get; set; }

        public SeleniumDriverConfig(int pageLoadInSecs, int implicitWaitInSecs)
        {
            SetDriver();
            SetDriverConfigurationSettings(pageLoadInSecs, implicitWaitInSecs);
        }
        public void SetDriver()
        {
            Driver = new T();
        }

        public void SetDriverConfigurationSettings(int pageLoadInSecs, int implicitWaitInSecs)
        {
            Driver.Manage().Timeouts().PageLoad = TimeSpan.FromSeconds(pageLoadInSecs);
            Driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(implicitWaitInSecs);
        }
    }
}
