$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactus.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9002814117,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I access webdriveruniversity contact us form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a valid firstname",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid last name",
  "rows": [
    {
      "cells": [
        "woods",
        "jackson",
        "jones"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i enter comments",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i click on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the information should successfully be submitted via the contact us form",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.i_access_webdriveruniversity_contact_us_form()"
});
formatter.result({
  "duration": 7180739816,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_firstname()"
});
formatter.result({
  "duration": 334644286,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 277094388,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 1161041466,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 745054652,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 4536550,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat pageObjects.ContactUs_Page.clickOnSubmiButton(ContactUs_Page.java:50)\r\n\tat stepDefinitions.ContactUsSteps.i_click_on_the_submit_button(ContactUsSteps.java:46)\r\n\tat ✽.When i click on the submit button(contactus.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ContactUsSteps.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2066053832,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Products page",
  "description": "",
  "id": "products-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;",
  "rows": [
    {
      "cells": [
        "url",
        "button"
      ],
      "line": 9,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
        "#container-special-offers2"
      ],
      "line": 10,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3954450685,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \"#container-special-offers2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "ProductSteps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 18261347557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#container-special-offers2",
      "offset": 16
    }
  ],
  "location": "ProductSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 425943,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat stepDefinitions.ProductSteps.user_clicks_on(ProductSteps.java:20)\r\n\tat ✽.When user clicks on \"#container-special-offers2\"(products.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProductSteps.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3082992183,
  "status": "passed"
});
formatter.uri("service_nsw.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to Service NSW and validate it",
  "description": "",
  "id": "submit-data-to-service-nsw-and-validate-it",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Submit valid data via Service NSW website",
  "description": "",
  "id": "submit-data-to-service-nsw-and-validate-it;submit-valid-data-via-service-nsw-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I navigate to service nsw website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Search for \"Apply for a number plate\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate the navigation to appropriate page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Locate us button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter suburb \u003cSuburbName\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to service centre named as \"Marrickville Service Centre \"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "submit-data-to-service-nsw-and-validate-it;submit-valid-data-via-service-nsw-website;",
  "rows": [
    {
      "cells": [
        "SuburbName"
      ],
      "line": 13,
      "id": "submit-data-to-service-nsw-and-validate-it;submit-valid-data-via-service-nsw-website;;1"
    },
    {
      "cells": [
        "\"Sydney 2000\""
      ],
      "line": 14,
      "id": "submit-data-to-service-nsw-and-validate-it;submit-valid-data-via-service-nsw-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3704847120,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Submit valid data via Service NSW website",
  "description": "",
  "id": "submit-data-to-service-nsw-and-validate-it;submit-valid-data-via-service-nsw-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I navigate to service nsw website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Search for \"Apply for a number plate\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate the navigation to appropriate page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Locate us button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Enter suburb \"Sydney 2000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to service centre named as \"Marrickville Service Centre \"",
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceNswSteps.i_navigate_to_service_nsw_website()"
});
formatter.result({
  "duration": 4144626563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply for a number plate",
      "offset": 12
    }
  ],
  "location": "ServiceNswSteps.search_for(String)"
});
formatter.result({
  "duration": 388198811,
  "status": "passed"
});
formatter.match({
  "location": "ServiceNswSteps.validate_the_navigation_to_appropriate_page()"
});
formatter.result({
  "duration": 78843,
  "status": "passed"
});
formatter.match({
  "location": "ServiceNswSteps.i_click_on_Locate_us_button()"
});
formatter.result({
  "duration": 1800566276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney 2000",
      "offset": 16
    }
  ],
  "location": "ServiceNswSteps.i_Enter_suburb(String)"
});
formatter.result({
  "duration": 2538229205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marrickville Service Centre ",
      "offset": 36
    }
  ],
  "location": "ServiceNswSteps.i_click_to_service_centre_named_as(String)"
});
formatter.result({
  "duration": 47169578,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ServiceNswSteps.i_click_to_service_centre_named_as(ServiceNswSteps.java:43)\r\n\tat ✽.Then I click to service centre named as \"Marrickville Service Centre \"(service_nsw.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3414182738,
  "status": "passed"
});
});