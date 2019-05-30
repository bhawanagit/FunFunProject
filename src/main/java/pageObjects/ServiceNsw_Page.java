package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utils.Constant;

import java.io.IOException;
import java.util.List;

public class ServiceNsw_Page extends BasePage {
    public @FindBy(id = "edit-contains") WebElement textForSearch;
    public @FindBy(css = ".locate-us-button") WebElement button_locateUs;
    public @FindBy(id = "locatorTextSearch") WebElement textForSuburbName;
    public @FindBy(css = ".form__actions") WebElement buttonSuburbSearch;
    public  String locatorResultList=".form__input-group.form--search-group div" ;
    public  String css="has-autocomplete";
    public final String cssLinkResults=  ".location a";

    public ServiceNsw_Page() throws IOException {
        super();
    }

    public ServiceNsw_Page navigate_to_service_nsw_website() throws IOException {
        getDriver().get(Constant.Base_Url);
        return new ServiceNsw_Page();
    }

    public ServiceNsw_Page SearchForText(String text) throws Exception {
        sendKeysToWebElement(textForSearch, text);
        return new ServiceNsw_Page();
    }

    public ServiceNsw_Page validateAndNavigate() throws Exception {
        //waitAndClickElement(button_locateUs);
        return new ServiceNsw_Page();
    }

    public ServiceNsw_Page ClickOnLocateUs() throws Exception {
        waitAndClickElement(button_locateUs);
        return new ServiceNsw_Page();
    }

    public ServiceNsw_Page enterSuburbName(String name) throws Exception {
        sendKeysToWebElement(textForSuburbName, "");
        sendKeysToWebElement(textForSuburbName, name);
        waitAndClickElement(buttonSuburbSearch);
        WebElement element = driver.findElement(By.cssSelector(locatorResultList));
        this.wait.until(ExpectedConditions.attributeContains(element,"class",css));
                //(driver.findElements(By.cssSelector(locatorResultList))));
        System.out.println("I am here");
        return new ServiceNsw_Page();
    }

    public boolean ClickToServiceCenter(String text) throws Exception {
          boolean retVal=false;
        List<WebElement> listServiceCenter = driver.findElements(By.cssSelector(cssLinkResults));
        for(WebElement w : listServiceCenter) {
            System.out.println(w.getAttribute("text"));
            if (w.getAttribute("text").equals(text)) {
                retVal=true;
                break;
            }
        }
        System.out.println(retVal);
        return retVal;
    }

}
