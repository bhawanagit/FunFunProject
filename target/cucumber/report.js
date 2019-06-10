$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("service_nsw.feature");
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
  "duration": 6760198724,
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
  "duration": 4570812684,
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
  "duration": 476298578,
  "status": "passed"
});
formatter.match({
  "location": "ServiceNswSteps.validate_the_navigation_to_appropriate_page()"
});
formatter.result({
  "duration": 39655,
  "status": "passed"
});
formatter.match({
  "location": "ServiceNswSteps.i_click_on_Locate_us_button()"
});
formatter.result({
  "duration": 1887541702,
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
  "duration": 3251518209,
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
  "duration": 53223288,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.ServiceNswSteps.i_click_to_service_centre_named_as(ServiceNswSteps.java:43)\r\n\tat ✽.Then I click to service centre named as \"Marrickville Service Centre \"(service_nsw.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3189412633,
  "status": "passed"
});
});