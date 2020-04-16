package testrunner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/demofeatures", glue="steps", format={"json:target/cucumber.json", "html:target/site/cucumber-pretty"},
 dryRun=false, monochrome=true, tags="@demo")
public class TestRunner{

	
	
}
