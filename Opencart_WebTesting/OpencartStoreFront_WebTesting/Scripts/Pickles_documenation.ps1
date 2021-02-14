# Setup variables
$root = "{rootDirOfProject}"
$FeatureDirectory = "C:\Users\olawr\OneDrive\Engineering73\AdvancedTesting\Opencart_WebTesting\Opencart_WebTesting\OpencartStoreFront_WebTesting\Library\SpecFlow\Features"
$OutputDirectory = "C:\Users\olawr\OneDrive\Engineering73\AdvancedTesting\Opencart_WebTesting\Opencart_WebTesting\OpencartStoreFront_WebTesting\Docs\Word"
$DocumentationFormat = "html"
$TestResultsFormat = "nunit"
$TestResultsFile = "C:\Users\olawr\OneDrive\Engineering73\AdvancedTesting\Opencart_WebTesting\Opencart_WebTesting\OpencartStoreFront_WebTesting\bin\Debug\TestResult.xml"
 
# Import the Pickles-comandlet
Import-Module C:\Users\olawr\.nuget\packages\pickles\2.20.1\tools\PicklesDoc.Pickles.Powershell.dll
 
# Call pickles
Pickle-Features -FeatureDirectory $FeatureDirectory `
            -OutputDirectory $OutputDirectory `
            -DocumentationFormat $DocumentationFormat  `
            -TestResultsFormat $TestResultsFormat  `
            -TestResultsFile $TestResultsFile