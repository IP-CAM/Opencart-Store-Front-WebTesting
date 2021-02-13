using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;

namespace OpencartStoreFront_WebTesting
{
    public static class AppConfigReader
    {
        public static readonly string BaseUrl = ConfigurationManager.AppSettings["base_url"];
    }
}
