targets		 := pep.umd.js
bin        := $(shell npm bin)
browserify := $(bin)/browserify pep.js

# -- Building --
dist/${targets}: dist
	$(browserify) --standalone pep > $@

dist:
	mkdir dist

bundle: dist/pep.umd.js

clean: dist
	rm -rf dist

# -- Other tasks --
test:
	node ./test/tap.js

.PHONY: test
