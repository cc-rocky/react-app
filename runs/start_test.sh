chromedriver --port=4444 & sleep 5

echo "Member Quick add test start"

flutter driver --driver=web_testing/test/integration_driver/integration_test_driver.dart --target=web_testing/member_add_step_1.dart > reports/testing/member_quick_add.log -d web-server

echo "Member Quick add tests complete"