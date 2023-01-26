(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{695:function(e,t,s){"use strict";s.r(t);var n=s(9),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"local-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[e._v("#")]),e._v(" Local development")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("For the "),t("strong",[e._v("development environment")]),e._v(" you need to install these tools:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET 6.0 SDK"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Docker: "),t("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac OS"),t("OutboundLink")],1),e._v(" | "),t("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),t("p",[e._v("To execute tests and run the project for debugging, you need to run a number of "),t("strong",[e._v("dependencies")]),e._v(".")]),e._v(" "),t("p",[e._v("We wrapped all our dependencies in a docker-compose file that you can use to bootstrap the development environment:\nThe file "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.yml"),t("OutboundLink")],1),e._v(" can be used to spin everything up:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/btcpayserver/btcpayserver.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver/BTCPayServer.Tests\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker-compose")]),e._v(" up dev\n")])])]),t("h2",{attrs:{id:"which-ide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#which-ide"}},[e._v("#")]),e._v(" Which IDE?")]),e._v(" "),t("p",[e._v("We recommend using Visual Studio 2022 (Windows Only) or Rider (cross platform). Visual Studio Code (cross platform) should also be possible, but isn't as straightforward to setup for a comfortable development environment.\nYou can of course use VIM if you are hardcore, .NET Core is easy to use via command-line.")]),e._v(" "),t("p",[e._v("Visual Studio Code, Visual Studio and Rider will run the launch profile "),t("code",[e._v("Bitcoin")]),e._v(".\nThis will run a "),t("strong",[e._v("BTCPay Server instance connecting to the services in your Docker service")]),e._v(", so you can easily debug and step through the code.")]),e._v(" "),t("h2",{attrs:{id:"build-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-configuration"}},[e._v("#")]),e._v(" Build configuration")]),e._v(" "),t("p",[e._v("A build configuration defines how to "),t("strong",[e._v("build BTCPay Server")]),e._v(". For example, whether to include some source files, whether to optimize for debugging or performance.")]),e._v(" "),t("p",[e._v("There are several build configurations:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Debug")])]),e._v(" "),t("li",[t("code",[e._v("Release")])]),e._v(" "),t("li",[t("code",[e._v("Altcoins-Debug")])]),e._v(" "),t("li",[t("code",[e._v("Altcoins-Release")])])]),e._v(" "),t("p",[e._v("How to use a different one during your local development depends on your IDE.\nBy default "),t("code",[e._v("Debug")]),e._v(" is used, this is a Bitcoin only build excluding any altcoin dependencies. How to use a different one during your local development depends on your IDE.")]),e._v(" "),t("p",[e._v("You can select which build to use via the "),t("code",[e._v("-c")]),e._v(" switch in "),t("code",[e._v("dotnet")]),e._v(" command line. If you use command line and want to run a Release build:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("dotnet run -c Release\n")])])]),t("h2",{attrs:{id:"launch-profiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launch-profiles"}},[e._v("#")]),e._v(" Launch profiles")]),e._v(" "),t("p",[e._v("When you "),t("strong",[e._v("start BTCPay Server locally for local development")]),e._v(", it needs the right parameter so it can connect to the development time dependencies in the docker-compose file.")]),e._v(" "),t("p",[e._v("Those parameters are wrapped into the dotnet concept of "),t("code",[e._v("launch profile")]),e._v(".")]),e._v(" "),t("p",[e._v("The launch profiles are specified in the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer/Properties/launchSettings.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("launchSettings.json"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("There are currently three launch profiles:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Bitcoin")])]),e._v(" "),t("li",[t("code",[e._v("Bitcoin-HTTPS")])]),e._v(" "),t("li",[t("code",[e._v("Altcoins-HTTPS")])])]),e._v(" "),t("p",[e._v("By default, "),t("code",[e._v("Bitcoin")]),e._v(" is used. How to use a different one during your local development depends on your IDE.")]),e._v(" "),t("p",[e._v("If you use command line, "),t("code",[e._v("dotnet run")]),e._v(" allows you to select the launch profile of your choice:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("dotnet run --launch-profile Bitcoin\n")])])]),t("h2",{attrs:{id:"running-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[e._v("#")]),e._v(" Running tests")]),e._v(" "),t("p",[e._v("Running tests is functioning in the exact same way as running the development time BTCPay Server.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\ndotnet "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),t("p",[e._v("The concept of "),t("code",[e._v("launch profile")]),e._v(" does not apply for tests, but the concept of build configuration does. For example, if I want to run tests on the Release build:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("dotnet "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -c Release\n")])])]),t("p",[e._v("The tests are already configured to use the development time dependencies in the docker-compose presented earlier.")]),e._v(" "),t("p",[e._v("You can use the "),t("code",[e._v("--f")]),e._v(" (filter) switch to run a specific test.")]),e._v(" "),t("p",[e._v("If you use an IDE, consult your IDE documentation to run tests or switch to different configurations.")]),e._v(" "),t("h2",{attrs:{id:"altcoin-support-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#altcoin-support-development"}},[e._v("#")]),e._v(" Altcoin support development")]),e._v(" "),t("p",[e._v("By default, your IDE or simple "),t("code",[e._v("dotnet run")]),e._v(" will use "),t("code",[e._v("Bitcoin")]),e._v(" launch profile on "),t("code",[e._v("Debug")]),e._v(" build.")]),e._v(" "),t("ul",[t("li",[e._v("This means that BTCPay Server will be hosted on a local HTTP port, building without altcoin support,")]),e._v(" "),t("li",[e._v("Run BTCPay Server to connect to Bitcoin only dependencies specified in "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.yml"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("If you want to "),t("strong",[e._v("develop with altcoins support")]),e._v(" you need to use the "),t("code",[e._v("Altcoins-HTTPS")]),e._v(" launch profile, on the "),t("code",[e._v("Altcoins-Debug")]),e._v(" build, and run the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/docker-compose.altcoins.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer.Tests/docker-compose.altcoins.yml"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("If using command line:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker-compose")]),e._v(" -f docker-compose.altcoins.yml up dev\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/BTCPayServer\ndotnet run -c Altcoins-Debug --launch-profile Altcoins-HTTPS\n")])])]),t("p",[e._v("For tests")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" BTCPayServer.Tests\ndotnet "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" -c Altcoins-Debug\n")])])]),t("h2",{attrs:{id:"https-support-for-local-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-support-for-local-development"}},[e._v("#")]),e._v(" HTTPS support for local development")]),e._v(" "),t("p",[e._v("Some browser security features may require that you use "),t("strong",[e._v("HTTPS")]),e._v(" to be properly tested.")]),e._v(" "),t("p",[e._v("In this case, use "),t("code",[e._v("Bitcoin-HTTPS")]),e._v(" (or "),t("code",[e._v("Altcoin-HTTPS")]),e._v(") launch profile. This will create a self signed certificate for your development purpose.")]),e._v(" "),t("p",[e._v("However, your browser will not trust it, making it difficult to debug.")]),e._v(" "),t("p",[e._v("You can instruct your OS to trust this development time certificate by running:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("dotnet dev-certs https --trust\n")])])]),t("h2",{attrs:{id:"videos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[e._v("#")]),e._v(" Videos")]),e._v(" "),t("p",[e._v("For more information check out these videos:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://youtube.com/watch?v=ZePbMPSIvHM",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to contribute to BTCPay Server Development (Windows)"),t("OutboundLink")],1),e._v(" by Nicolas Dorier")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://youtube.com/watch?v=j486T_Rk-yw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setting up BTCPayServer development environment on Linux (Ubuntu)"),t("OutboundLink")],1),e._v(" by RockStarDev")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://youtube.com/watch?v=GWR_CcMsEV0",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server Development - Testing pull request, payments (MacOS)"),t("OutboundLink")],1),e._v(" by Pavlenex")])]),e._v(" "),t("p",[e._v("and these notes:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with development"),t("OutboundLink")],1),e._v(" by Nicolas Dorier (covering relevant docker commands, paying regtest invoices)")])]),e._v(" "),t("h2",{attrs:{id:"how-to-manually-test-payments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-manually-test-payments"}},[e._v("#")]),e._v(" How to manually test payments")]),e._v(" "),t("h3",{attrs:{id:"using-the-test-bitcoin-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-bitcoin-cli"}},[e._v("#")]),e._v(" Using the test bitcoin-cli")]),e._v(" "),t("p",[e._v("You can call bitcoin-cli inside the container with "),t("code",[e._v("docker exec")]),e._v(".\nFor example, if you want to send "),t("code",[e._v("0.23111090")]),e._v(" to "),t("code",[e._v("mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("./docker-bitcoin-cli.sh sendtoaddress "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.23111090")]),e._v("\n")])])]),t("p",[e._v("If you are using Powershell:")]),e._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\docker-bitcoin-"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cli")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 sendtoaddress "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf"')]),e._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("23111090\n")])])]),t("p",[e._v("You can also generate blocks:")]),e._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\docker-bitcoin-generate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 3\n")])])]),t("h3",{attrs:{id:"using-polar-to-test-lightning-payments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-polar-to-test-lightning-payments"}},[e._v("#")]),e._v(" Using Polar to test Lightning payments")]),e._v(" "),t("ul",[t("li",[e._v("Install and run "),t("a",{attrs:{href:"https://lightningpolar.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polar"),t("OutboundLink")],1),e._v(". Setup a small network of nodes.")]),e._v(" "),t("li",[e._v("Go to your store's General Settings and enable Lightning.")]),e._v(" "),t("li",[e._v("Build your connection string using the Connect information in the Polar app.")])]),e._v(" "),t("p",[e._v('LND Connection string example:\ntype=lnd-rest;server=https://127.0.0.1:8084/;macaroonfilepath="local path to admin.macaroon on your computer, without these quotes";allowinsecure=true')]),e._v(" "),t("p",[e._v("Now you can create a Lightning invoice on BTCPay Server regtest and make a payment through Polar.")]),e._v(" "),t("p",[e._v('PLEASE NOTE: You may get an exception break in Visual Studio. You must quickly click "Continue" in VS so the invoice is generated.\nOr, uncheck the box that says, "Break when this exception type is thrown".')]),e._v(" "),t("h3",{attrs:{id:"using-the-test-litecoin-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-litecoin-cli"}},[e._v("#")]),e._v(" Using the test litecoin-cli")]),e._v(" "),t("p",[e._v("Same as bitcoin-cli, but with "),t("code",[e._v(".\\docker-litecoin-cli.ps1")]),e._v(" and "),t("code",[e._v(".\\docker-litecoin-cli.sh")]),e._v(" instead.")]),e._v(" "),t("h3",{attrs:{id:"using-the-test-lightning-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-lightning-cli"}},[e._v("#")]),e._v(" Using the test lightning-cli")]),e._v(" "),t("p",[e._v("If you are using Linux:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("./docker-customer-lightning-cli.sh pay lnbcrt100u1pd2e6uspp5ajnadvhazjrz55twd5k6yeg9u87wpw0q2fdr7g960yl5asv5fmnqdq9d3hkccqpxmedyrk0ehw5ueqx5e0r4qrrv74cewddfcvsxaawqz7634cmjj39sqwy5tvhz0hasktkk6t9pqfdh3edmf3z09zst5y7khv3rvxh8ctqqw6mwhh\n")])])]),t("p",[e._v("If you are using Powershell:")]),e._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\docker-customer-lightning-"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cli")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 pay lnbcrt100u1pd2e6uspp5ajnadvhazjrz55twd5k6yeg9u87wpw0q2fdr7g960yl5asv5fmnqdq9d3hkccqpxmedyrk0ehw5ueqx5e0r4qrrv74cewddfcvsxaawqz7634cmjj39sqwy5tvhz0hasktkk6t9pqfdh3edmf3z09zst5y7khv3rvxh8ctqqw6mwhh\n")])])]),t("p",[e._v("If you get this message:")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("205")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Could not find a route"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"data"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"getroute_tries"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sendpay_tries"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Please, run the test "),t("code",[e._v("CanSetLightningServer")]),e._v(", this will establish a channel between the customer and the merchant, then, retry.")]),e._v(" "),t("p",[e._v("Alternatively you can run the "),t("code",[e._v("./docker-lightning-channel-setup.sh")]),e._v(" script to establish the channel connection.\nThe "),t("code",[e._v("./docker-lightning-channel-teardown.sh")]),e._v(" script closes any existing lightning channels.")]),e._v(" "),t("h3",{attrs:{id:"alternative-lightning-testing-using-polar-to-test-lightning-payments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternative-lightning-testing-using-polar-to-test-lightning-payments"}},[e._v("#")]),e._v(" Alternative Lightning testing: Using Polar to test Lightning payments")]),e._v(" "),t("ul",[t("li",[e._v("Install and run "),t("a",{attrs:{href:"https://lightningpolar.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polar"),t("OutboundLink")],1),e._v(". Setup a small network of nodes.")]),e._v(" "),t("li",[e._v("Go to your store's General Settings and enable Lightning.")]),e._v(" "),t("li",[e._v("Build your connection string using the Connect information in the Polar app.")])]),e._v(" "),t("p",[e._v('LND Connection string example:\ntype=lnd-rest;server=https://127.0.0.1:8084/;macaroonfilepath="local path to admin.macaroon on your computer, without these quotes";allowinsecure=true')]),e._v(" "),t("p",[e._v("Now you can create a lightning invoice on BTCPay Server regtest and make a payment through Polar.")]),e._v(" "),t("p",[e._v('PLEASE NOTE: You may get an exception break in Visual Studio. You must quickly click "Continue" in VS so the invoice is generated.\nOr, uncheck the box that says, "Break when this exception type is thrown".')]),e._v(" "),t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h3",{attrs:{id:"docker-compose-up-dev-failed-or-tests-are-not-passing-what-should-i-do"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-up-dev-failed-or-tests-are-not-passing-what-should-i-do"}},[e._v("#")]),e._v(" "),t("code",[e._v("docker-compose up dev")]),e._v(" failed or tests are not passing, what should I do?")]),e._v(" "),t("ol",[t("li",[e._v("Run "),t("code",[e._v("docker-compose down --volumes")]),e._v(" (this will reset your test environment)")]),e._v(" "),t("li",[e._v("Run "),t("code",[e._v("docker-compose pull")]),e._v(" (this will ensure you have the latest images)")]),e._v(" "),t("li",[e._v("Run again with "),t("code",[e._v("docker-compose up dev")])])]),e._v(" "),t("h3",{attrs:{id:"how-to-run-the-altcoin-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-the-altcoin-environment"}},[e._v("#")]),e._v(" How to run the Altcoin environment?")]),e._v(" "),t("p",[t("code",[e._v("docker-compose -f docker-compose.altcoins.yml up dev")])]),e._v(" "),t("p",[e._v("If you still have issues, try to restart docker.")]),e._v(" "),t("h3",{attrs:{id:"how-to-run-the-selenium-test-with-a-browser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-the-selenium-test-with-a-browser"}},[e._v("#")]),e._v(" How to run the Selenium test with a browser?")]),e._v(" "),t("p",[e._v("Run "),t("code",[e._v("dotnet user-secrets set RunSeleniumInBrowser true")]),e._v(" to run tests in browser.")]),e._v(" "),t("p",[e._v("To switch back to headless mode (recommended) you can run "),t("code",[e._v("dotnet user-secrets remove RunSeleniumInBrowser")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"session-not-created-this-version-of-chromedriver-only-supports-chrome-version-88"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-not-created-this-version-of-chromedriver-only-supports-chrome-version-88"}},[e._v("#")]),e._v(" Session not created: This version of ChromeDriver only supports Chrome version 88")]),e._v(" "),t("p",[e._v("When you run tests for selenium, you may end up with this error.\nThis happen when we update the selenium packages on BTCPay Server while you did not update your chrome version.")]),e._v(" "),t("p",[e._v("If you want to use a older chrome driver on "),t("a",{attrs:{href:"https://chromedriver.chromium.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),t("OutboundLink")],1),e._v(" then point to it with")]),e._v(" "),t("p",[t("code",[e._v('dotnet user-secrets set ChromeDriverDirectory "path/to/the/driver/directory"')])])])}),[],!1,null,null,null);t.default=r.exports}}]);