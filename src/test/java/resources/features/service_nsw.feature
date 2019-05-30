Feature: Submit data to Service NSW and validate it
@test
Scenario Outline: Submit valid data via Service NSW website
	Given I navigate to service nsw website
	When Search for "Apply for a number plate"
	And  Validate the navigation to appropriate page
	When I click on Locate us button
	And I Enter suburb <SuburbName>
	Then I click to service centre named as "Marrickville Service Centre "


	Examples:
	|        SuburbName                 |
	|     "Sydney 2000"                 |