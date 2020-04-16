$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VerifyLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Login functionality",
  "description": "",
  "id": "verify-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 375900,
  "status": "passed"
});
formatter.before({
  "duration": 157800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify Login with Valid User",
  "description": "",
  "id": "verify-login-functionality;verify-login-with-valid-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@demo"
    },
    {
      "line": 4,
      "name": "@scenario1"
    },
    {
      "line": 4,
      "name": "@lgnmodule"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"vinay\" into username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"12345\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "duration": 169901900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinay",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_into_username_field(String)"
});
formatter.result({
  "duration": 2584200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_into_password_field(String)"
});
formatter.result({
  "duration": 106200,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Login_button()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 348300,
  "error_message": "java.lang.Exception: Element not found in line 25\r\n\tat steps.Login.user_is_navigated_to_home_page(Login.java:53)\r\n\tat ✽.Then User is navigated to home page(VerifyLogin.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 215300,
  "status": "passed"
});
formatter.before({
  "duration": 541100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Login with In-Valid User",
  "description": "",
  "id": "verify-login-functionality;verify-login-with-in-valid-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@demo"
    },
    {
      "line": 14,
      "name": "@scenario2"
    },
    {
      "line": 14,
      "name": "@ordermodule"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enter username into username field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enter password into password field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User access is denied and a message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "duration": 239300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_username_into_username_field()"
});
formatter.result({
  "duration": 461600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_password_into_password_field()"
});
formatter.result({
  "duration": 279000,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Login_button()"
});
formatter.result({
  "duration": 92700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_access_is_denied_and_a_message_is_displayed()"
});
formatter.result({
  "duration": 212800,
  "status": "passed"
});
formatter.after({
  "duration": 396000,
  "status": "passed"
});
formatter.uri("VerifyLoginWIthExamples.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Login functionality with example",
  "description": "",
  "id": "verify-login-functionality-with-example",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify Login with Valid User",
  "description": "",
  "id": "verify-login-functionality-with-example;verify-login-with-valid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@examples"
    },
    {
      "line": 4,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" into username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"\u003cpassword\u003e\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "verify-login-functionality-with-example;verify-login-with-valid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "verify-login-functionality-with-example;verify-login-with-valid-user;;1"
    },
    {
      "cells": [
        "iteration1",
        "1234"
      ],
      "line": 14,
      "id": "verify-login-functionality-with-example;verify-login-with-valid-user;;2"
    },
    {
      "cells": [
        "iteration2",
        "abcd"
      ],
      "line": 15,
      "id": "verify-login-functionality-with-example;verify-login-with-valid-user;;3"
    },
    {
      "cells": [
        "iteration3",
        "5678"
      ],
      "line": 16,
      "id": "verify-login-functionality-with-example;verify-login-with-valid-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 346400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Login with Valid User",
  "description": "",
  "id": "verify-login-functionality-with-example;verify-login-with-valid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@examples"
    },
    {
      "line": 4,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"iteration1\" into username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"1234\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "duration": 263000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iteration1",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_into_username_field(String)"
});
formatter.result({
  "duration": 421900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_into_password_field(String)"
});
formatter.result({
  "duration": 467000,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Login_button()"
});
formatter.result({
  "duration": 116500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 597700,
  "error_message": "java.lang.Exception: Element not found in line 25\r\n\tat steps.Login.user_is_navigated_to_home_page(Login.java:53)\r\n\tat ✽.Then User is navigated to home page(VerifyLoginWIthExamples.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 264500,
  "status": "passed"
});
formatter.before({
  "duration": 493000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Login with Valid User",
  "description": "",
  "id": "verify-login-functionality-with-example;verify-login-with-valid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@examples"
    },
    {
      "line": 4,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"iteration2\" into username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"abcd\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "duration": 749800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iteration2",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_into_username_field(String)"
});
formatter.result({
  "duration": 472000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_into_password_field(String)"
});
formatter.result({
  "duration": 419400,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Login_button()"
});
formatter.result({
  "duration": 129800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 2039600,
  "error_message": "java.lang.Exception: Element not found in line 25\r\n\tat steps.Login.user_is_navigated_to_home_page(Login.java:53)\r\n\tat ✽.Then User is navigated to home page(VerifyLoginWIthExamples.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 265000,
  "status": "passed"
});
formatter.before({
  "duration": 895300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Login with Valid User",
  "description": "",
  "id": "verify-login-functionality-with-example;verify-login-with-valid-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@examples"
    },
    {
      "line": 4,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"iteration3\" into username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter \"5678\" into password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "duration": 248600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iteration3",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_into_username_field(String)"
});
formatter.result({
  "duration": 408400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5678",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_into_password_field(String)"
});
formatter.result({
  "duration": 276300,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Login_button()"
});
formatter.result({
  "duration": 115100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 1152800,
  "error_message": "java.lang.Exception: Element not found in line 25\r\n\tat steps.Login.user_is_navigated_to_home_page(Login.java:53)\r\n\tat ✽.Then User is navigated to home page(VerifyLoginWIthExamples.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 410200,
  "status": "passed"
});
});