MAIN_FOLDER = Calculator_IVS_Project
TEST_FOLDER = Tests
TEST_PATH = $(MAIN_FOLDER)\$(TEST_FOLDER)
TO_INSTALL = electron -g yarn create electron-app -g
ZIP_FILES = help.html icon.ico index.html keyboardHandler.js libiconv2.dll libintl3.dll license.txt main.js make.exe Makefile Math.js package.json profiling.html Profiling.js style.css styleHelp.css styleProfiling.css Tests\Math.test.js Tests\package.json
DOC_FILES = $(MAIN_FOLDER)\Math.js $(TEST_PATH)\Math.test.js $(MAIN_FOLDER)\keyboardHandler.js $(MAIN_FOLDER)\main.js


all: init
	cd $(MAIN_FOLDER) && yarn add electron-builder --dev
	cd $(MAIN_FOLDER) && yarn build-installer

run:
	cd $(MAIN_FOLDER) && yarn run start

doc:
	jsdoc $(DOC_FILES)

test:	
	@echo *************************************************************************
	@echo * In order to test functions please make sure, that in "module.exports"	*
	@echo * section in Math.js is uncommented! 					*
	@echo * In default, this part is commented due to error in debugger.		*				 
	@echo *************************************************************************
	cd $(MAIN_FOLDER)\$(TEST_FOLDER) && npm init -y && npm test

profile:
	@echo *****************************************
	@echo * Press CTRL+SHIFT+P to start profiling *
	@echo *****************************************
	cd $(MAIN_FOLDER) && yarn run start

clean:
	rd $(MAIN_FOLDER) /S /q

pack:
	tar -a -c -f repo.zip $(ZIP_FILES)

help:
	@echo Before building application please make sure, that you have installed following components:
	@echo 	Node.js	(https://nodejs.org/en/)
	@echo 	Npm	(Will be installed with Node.js)
	@echo 	Git	(https://git-scm.com/download/win)
	@echo All other components will be installed automatically.

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
