package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {

	WebDriver driver;
	
	
	
	@Given("^User is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 //   throw new PendingException();
		System.out.println("In login page");
		//driver.get("www.google.com");
	}

	@When("^User enter username into username field$")
	public void user_enter_username_into_username_field() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		System.out.println("entered username");
		//driver.findElement(By.xpath("")).sendKeys("vinay");

	}

	@When("^User enter password into password field$")
	public void user_enter_password_into_password_field() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		System.out.println("entered password");

	}

	@When("^Click on Login button$")
	public void click_on_Login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
	}

	@Then("^User is navigated to home page$")
	public void user_is_navigated_to_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   /// throw new PendingException();
		//throw new Exception("Element not found in line 25");
	}

	@Then("^User access is denied and a message is displayed$")
	public void user_access_is_denied_and_a_message_is_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}


	@When("^User enters \"([^\"]*)\" into username field$")
	public void user_enters_into_username_field(String username) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
		System.out.println("Enter username data: "+username);
		
	}

	@When("^User enter \"([^\"]*)\" into password field$")
	public void user_enter_into_password_field(String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		System.out.println("Enter password data: "+password);

		
	}
	
	
	@Given("^Read data from excel$")
	public void read_data_from_excel() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
	}
	
	@Then("^User is navigated to home pages$")
	public void user_is_navigated_to_home_pages() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 //   throw new PendingException();
	}

	
	@Before
	public void globalbeforeInitialization()
	{
		System.out.println("in global before method");
	}
	
	@After
	public void globalAfterTearDown()
	{
		System.out.println("in global After method");
	}
	
	@Before("@scenario1")
	public void globalbeforeInitializationscenario1()
	{
		System.out.println("in scenario1 before method");
	}
}
