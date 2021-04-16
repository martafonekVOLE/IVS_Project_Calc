MAIN_FOLDER = Calculator_IVS_Project
TEST_FOLDER = Tests
TEST_PATH = $(MAIN_FOLDER)\$(TEST_FOLDER)
TO_INSTALL = electron -g yarn create electron-app -g
ZIP_FILES = help.html icon.ico index.html keyboardHandler.js libiconv2.dll libintl3.dll license.txt main.js make.exe Makefile Math.js package.json profiling.html Profiling.js style.css styleHelp.css styleProfiling.css Tests\Math.test.js Tests\package.json


all: init
	cd $(MAIN_FOLDER) && yarn add electron-builder --dev
	cd $(MAIN_FOLDER) && yarn build-installer

run:
	cd $(MAIN_FOLDER) && yarn run start

doc:
	jsdoc $(MAIN_FOLDER)\Math.js $(TEST_PATH)\Math.test.js

test:
	cd $(MAIN_FOLDER)\$(TEST_FOLDER) && npm init -y && npm test

clean:
	rd $(MAIN_FOLDER) /S /q
	rd node_modules /S /q 

pack:
	tar -a -c -f repo.zip $(ZIP_FILES)

help:
	@echo Pred samotnym sestavenim je nutne mit nainstalovany nasledujici software:
	@echo 	Node.js
	@echo 	npm
	@echo	git
	@echo Dalsi software nutny pro sestaveni programu bude nainstalovan automaticky

init:
	npm install $(TO_INSTALL)
	create-electron-app $(MAIN_FOLDER) 
	copy * /Y $(MAIN_FOLDER)
	md $(TEST_PATH)
	copy tests\* $(TEST_PATH)
	del $(MAIN_FOLDER)\Makefile
	del $(MAIN_FOLDER)\make.exe
	del $(MAIN_FOLDER)\libiconv2.dll
	del $(MAIN_FOLDER)\libintl3.dll
	rd $(MAIN_FOLDER)\src /S /q
	cd $(TEST_PATH) && npm install --save-dev jest