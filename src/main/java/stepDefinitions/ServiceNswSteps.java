package stepDefinitions;

import com.cucumber.listener.Reporter;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import utils.DriverFactory;

import java.io.IOException;

public class ServiceNswSteps extends DriverFactory {

    @Given("^I navigate to service nsw website$")
    public void i_navigate_to_service_nsw_website() throws Exception {
        serviceNswPage.navigate_to_service_nsw_website();
    }

    @When("^Search for \"([^\"]*)\"$")
    public void search_for(String text) throws Throwable {
        serviceNswPage.SearchForText(text);
    }

    @And("^Validate the navigation to appropriate page$")
    public void validate_the_navigation_to_appropriate_page() throws Throwable {
        //serviceNswPage.validateAndNavigate();
    }

    @When("^I click on Locate us button$")
    public void i_click_on_Locate_us_button() throws Throwable {
        serviceNswPage.ClickOnLocateUs();
    }

    @And("^I Enter suburb \"([^\"]*)\"$")
    public void i_Enter_suburb(String name) throws Throwable {
        serviceNswPage.enterSuburbName(name);
    }

    @Then("^I click to service centre named as \"([^\"]*)\"$")
    public void i_click_to_service_centre_named_as(String text) throws Throwable {
        Assert.assertEquals(true,serviceNswPage.ClickToServiceCenter(text));
    }

}
