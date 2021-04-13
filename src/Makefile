MAIN_FOLDER = Calculator_IVS_Project
TEST_FOLDER = Tests
TEST_PATH = $(MAIN_FOLDER)\$(TEST_FOLDER)
TO_INSTALL = electron -g yarn create electron-app -g


all: init
	yarn build-installer

run:
	cd $(MAIN_FOLDER) && yarn run start

doc:
	jsdoc $(MAIN_FOLDER)\Math.js $(TEST_PATH)\Math.test.js

test:
	cd $(MAIN_FOLDER)\$(TEST_FOLDER) && npm init -y && npm test

erase:
	rd $(MAIN_FOLDER) /S /q

init:
	npm install $(TO_INSTALL)
	create-electron-app $(MAIN_FOLDER) 
	copy * /Y $(MAIN_FOLDER)
	md $(TEST_PATH)
	copy tests\* $(TEST_PATH)
	rd $(MAIN_FOLDER)\src /S /q
	cd $(TEST_PATH) && npm install --save-dev jest
	cd $(MAIN_FOLDER) && npm install -g electron-forge